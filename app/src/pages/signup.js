import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as yup from "yup";
import debounce from "../lib/yupDebounceIt";
import { Box, Button, FormField, TextInput } from "grommet";
import firebase from "firebase/app";
import { app } from "../firebase-app";

import { useContext } from "react";
import SplashHeader from "../components/SplashHeader";
import Page from "../components/Page";

import { useAuthUser, withAuthUser, AuthAction } from "next-firebase-auth";
const USERNAME_VALIDITY_CHECK_COOLDOWN = 350; //number of ms to wait until we recheck if the username is valid
const validationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(65),
  username: yup
    .string()
    .required()
    .min(2)
    .test(
      "username-is-available",
      "${path} is already taken!",
      debounce(async (username) => {
        const checkUsernameAvailability = app
          .functions()
          .httpsCallable("checkUsernameAvailability");
        try {
          const usernameIsAvailableResponse = await checkUsernameAvailability(
            username
          );
          const isAvailable =
            usernameIsAvailableResponse.data.usernameAvailable;
          console.log(`username ${isAvailable ? "is" : "is not"} available`);
          return isAvailable;
        } catch (errorCheckingUsername) {
          console.error("error checking username", errorCheckingUsername);
        }
      }, USERNAME_VALIDITY_CHECK_COOLDOWN)
    ),
});

const EMAIL_IN_USE_ERROR = "auth/email-already-in-use";

const Signup = () => {
  const router = useRouter();
  const currentUser = useAuthUser();
  const qs = router.query?.from
    ? `?from=${encodeURIComponent(router.query?.from)}`
    : "";

  return (
    <Page title="Signup">
      <Box align="center">
        <Box width="medium" margin="large">
          <SplashHeader />
          <Box margin={{ top: "large" }}>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(data, { setSubmitting, resetForm, setStatus }) => {
                setSubmitting(true);
                const { email, password, username } = data;
                app
                  .auth()
                  .createUserWithEmailAndPassword(email, password)
                  .then(async ({ user }) => {
                    console.log("user created");
                    const createdAt = firebase.firestore.Timestamp.fromDate(
                      new Date()
                    );
                    try {
                        await app.firestore().doc(`users/${user.uid}`).set({
                          displayName: username,
                          isAnonymous: false,
                          createdAt,
                        }).then(router.push(`/account${qs}`))
                    } catch (e) {
                      console.error(
                        "failed to persist user, this is the darkest timeline",
                        e
                      );
                    }
                  })
                  .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === EMAIL_IN_USE_ERROR) {
                      console.log("email in use", setStatus);
                      // hack as per formik author https://github.com/formium/formik/issues/150
                      setStatus({ emailInUse: "this email is already in use" });
                    }
                    console.log("e", errorCode, "\n", errorMessage);
                  });
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                touched,
                status,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormField
                    label="Username"
                    error={touched.username ? errors.username : null}
                  >
                    <TextInput
                      name="username"
                      value={values.username}
                      type="username"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </FormField>
                  <FormField
                    label="Email"
                    error={touched.email ? errors.email : status?.emailInUse}
                  >
                    <TextInput
                      name="email"
                      value={values.email}
                      type="email"
                      onBlur={handleBlur}
                      onChange={(...args) => {
                        // call change handler and clear "email in use warning" when email changes
                        handleChange(...args);
                        if (status?.emailInUse) {
                          status.emailInUse = null;
                        }
                      }}
                    />
                  </FormField>
                  <FormField
                    label="Password"
                    error={touched.password ? errors.password : null}
                  >
                    <TextInput
                      name="password"
                      value={values.password}
                      type="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </FormField>
                  <Box
                    tag="footer"
                    margin={{ top: "medium" }}
                    direction="row"
                    justify="between"
                  >
                    <Link href="/">
                      <Button label="Cancel" />
                    </Link>
                    <Button type="submit" primary label="Register" />
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default withAuthUser(
  {whenAuthed: AuthAction.REDIRECT_TO_APP}
)(Signup);
