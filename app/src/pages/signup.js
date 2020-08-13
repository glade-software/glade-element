import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as yup from "yup";

import {
  grommet,
  Box,
  Button,
  Grommet,
  FormField,
  TextInput
} from "grommet";

import app from "../firebase-app";

import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import Header from "../components/Header";

const theme = grommet;
const gladeGreen = "#1A535C";

// personalize
theme.global.colors.brand = gladeGreen;

const validationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(65),
});

const Signup = () => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

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
              onSubmit={(data, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                const { email, password } = data;
                app
                  .auth()
                  .createUserWithEmailAndPassword(email, password)
                  .then(() => {
                    console.log("user created");
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
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormField
                    label="Email"
                    error={touched.email ? errors.email : null}
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
    </Grommet>
  );
};

export default Signup;
