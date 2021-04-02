import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as yup from "yup";

import { Box, Button, FormField, TextInput } from "grommet";

import { app } from "../firebase-app";

import { useContext } from "react";
import SplashHeader from "../components/SplashHeader";
import Page from "../components/Page";

import { useAuthUser, withAuthUser } from "next-firebase-auth";


const validationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(65),
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
                const { email, password } = data;
                app
                  .auth()
                  .createUserWithEmailAndPassword(email, password)
                  .then(() => {
                    console.log("user created");
                    router.replace(`/profile${qs}`);
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
                dirty,
                status,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormField
                    label="Email"
                    error={dirty.email ? errors.email : status?.emailInUse}
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
                    error={dirty.password ? errors.password : null}
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

export default withAuthUser()(Signup);
