import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as yup from "yup";

import { grommet, Box, Button, Grommet, FormField, TextInput } from "grommet";

import {app} from "../../firebase-app";

import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { withAuthUser,useAuthUser } from "next-firebase-auth";

const db = app.firestore();

const theme = grommet;
const gladeGreen = "#1A535C";

// personalize
theme.global.colors.brand = gladeGreen;

const validationSchema = yup.object({
  org: yup
    .string()
    .required()
    .min(2)
    .max(64)
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "only letters, numbers and hyphens allowed",
    }),
});

const CreateOrg = async () => {
  const router = useRouter();
  const currentUser = useAuthUser();
  if (!currentUser?.email) {
    console.log("account doesn't have an email address");
    useEffect(() => {
      app.auth()
        .signOut()
        .then(() => {
          router.push("/");
        });
    }, []);
    return <div>you must log in</div>;
  }
  const org = router.query.org || "";
  return (
    <Grommet theme={grommet}>
      <Box align="center">
        <Box width="medium" margin="large">
          <Box margin={{ top: "large" }}>
            <Formik
              initialValues={{
                org,
              }}
              validationSchema={validationSchema}
              onSubmit={async (data, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                const newOrg = data.org;
                console.log("creating org", newOrg);
                const orgRef = await db
                  .collection("organizations")
                  .add({ name: newOrg });
                console.log("org created");
                const creatorRef = await orgRef
                  .collection("members")
                  .add({ email: currentUser.email });
                console.log("user added");
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
                    label="Organization Name"
                    error={touched.org ? errors.email : null}
                  >
                    <TextInput
                      name="org"
                      value={values.org}
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
                    <Button type="submit" primary label="Create Org" />
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

export default withAuthUser()(CreateOrg);
