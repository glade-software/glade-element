import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as yup from "yup";
import { withAuthUser, useAuthUser, AuthAction } from "next-firebase-auth";

import { Box, Button, FormField, TextInput } from "grommet";

import { app } from "../firebase-app";

import SplashHeader from "../components/SplashHeader";
import Page from "../components/Page";

const USER_NOT_FOUND_ERROR = "auth/user-not-found";
const WRONG_PASSWORD_ERROR = "auth/wrong-password";

const validationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(65),
});

const Login = () => {
  const router = useRouter();
  const currentUser = useAuthUser();
  return (
    <Page title="Login">
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
                const { email, password } = data;
                app
                  .auth()
                  .signInWithEmailAndPassword(email, password)
                  .then(() => {
                    console.log("user logged in");
                    router.replace("/account");
                  })
                  .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    if (errorCode === USER_NOT_FOUND_ERROR) {
                      setStatus({
                        userNotFound: "there's no user with this email address",
                      });
                    }
                    if (errorCode === WRONG_PASSWORD_ERROR) {
                      setStatus({
                        wrongPassword: "that's not the right password",
                      });
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
                status,
                dirty,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormField
                    label="Email"
                    error={dirty.email ? errors.email : status?.userNotFound}
                  >
                    <TextInput
                      name="email"
                      value={values.email}
                      type="email"
                      onBlur={handleBlur}
                      onChange={(...args) => {
                        handleChange(...args);
                        // call change handler and clear "user not found" warning when password changes
                        if (status?.userNotFound) {
                          status.userNotFound = null;
                        }
                      }}
                    />
                  </FormField>
                  <FormField
                    label="Password"
                    error={
                      dirty.password ? errors.password : status?.wrongPassword
                    }
                  >
                    <TextInput
                      name="password"
                      value={values.password}
                      type="password"
                      onBlur={handleBlur}
                      onChange={(...args) => {
                        // call change handler and clear "wrong password" warning when password changes
                        handleChange(...args);
                        if (status?.wrongPassword) {
                          status.wrongPassword = null;
                        }
                      }}
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
                    <Button type="submit" primary label="Login" />
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

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(Login);
