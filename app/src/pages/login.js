import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as yup from "yup";
import {withAuthUser, useAuthUser, AuthAction} from "next-firebase-auth";

import {
  grommet,
  Box,
  Button,
  Grommet,
  FormField,
  TextInput
} from "grommet";

import {app} from "../firebase-app";

import Header from "../components/Header";

const theme = grommet;
const gladeGreen = "#1A535C";

// personalize
theme.global.colors.brand = gladeGreen;

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
    <Grommet theme={grommet}>
      <Box align="center">
        <Box width="medium" margin="large">
          <Header />
          <Box margin={{ top: "large" }}>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(data, { setSubmitting, resetForm, setStatus}) => {
                setSubmitting(true);
                const { email, password } = data;
                app
                  .auth()
                  .signInWithEmailAndPassword(email,password)
                  .then(() => {
                    console.log("user logged in");
                    router.replace('/profile');
                  })
                  .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;

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
                dirty
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormField
                    label="Email"
                    error={dirty.email ? errors.email : null}
                  >
                    <TextInput
                      name="email"
                      value={values.email}
                      type="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
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
                    <Button type="submit" primary label="Login" />
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP
})(Login);
