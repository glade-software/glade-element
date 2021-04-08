import Link from 'next/link';
import {useRouter} from 'next/router';

import {
  grommet,
  Box,
  Button,
  Grommet,
  TextInput,
  FormField,
  Text,
} from 'grommet';

import {Formik} from 'formik';
import * as yup from 'yup';

import {app} from '../firebase-app';
import SplashHeader from '../components/SplashHeader';
import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth';

const db = app.firestore();

const checkUsernameAvailability = async (username) => {
  let usernameAvailable = true;
  try {
    // check if there is a single user with this username
    const snapshot = await db
      .collection('users')
      .where('displayName', '==', username)
      .limit(1)
      .get();

    snapshot.forEach((snapshot) => {
      // username exists
      usernameAvailable = false;
    });
  } catch (error) {
    console.error(error);
  }
  return usernameAvailable;
};

const validationSchema = yup.object({
  username: yup
    .string()
    .required()
    .min(3)
    .max(50)
    .test(
      'username-unique',
      '${path} is already taken!',
      checkUsernameAvailability
    ),
});

const Profile = () => {
  const router = useRouter();
  const from = router.query?.from;
  const currentUser = useAuthUser();

  return (
    <Grommet theme={grommet}>
      <Box align="center">
        <Box width="medium" margin="large">
          <SplashHeader />
          <Box margin={{top: 'large'}}>
            {currentUser.firebaseUser ? (
              <Box align="center">
                <Text>
                  Your username is: {currentUser?.firebaseUser?.displayName} !
                </Text>
                <Button secondary label="logout" margin={{top:"medium"}} onClick={()=>{
                    currentUser.signOut();
                    router.replace('/');
                  }}/>
              </Box>
            ) : (
              <Formik
                initialValues={{
                  username: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(data, {setSubmitting, resetForm}) => {
                  setSubmitting(true);
                  const {username} = data;
                  app
                    .auth()
                    .currentUser.updateProfile({
                      displayName: username,
                    })
                    .then(() => {
                      console.log('displayName set');
                      resetForm();

                      db.collection('users')
                        .doc(app.auth().currentUser.uid)
                        .set({
                          displayName: username,
                        })
                        .then(router.reload);
                        
                      setSubmitting(false);
                      if(from){
                        console.log(`attempting redirect to`,from);
                        router.replace(decodeURIComponent(from))
                      }

                    })
                    .catch((userProfileError) => {
                      console.log(
                        'user profile failed to update\n',
                        userProfileError.code,
                        userProfileError.message
                      );
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
                      label="Username"
                      error={touched.username ? errors.username : null}
                    >
                      <TextInput
                        name="username"
                        value={values.username}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </FormField>
                    <Box
                      tag="footer"
                      margin={{top: 'medium'}}
                      direction="row"
                      justify="between"
                    >
                      <Link href="/">
                        <Button label="Cancel" />
                      </Link>
                      <Button type="submit" primary label="Reserve!" />
                    </Box>
                  </form>
                )}
              </Formik>
            )}
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

export default withAuthUser({whenUnauthedAfterInit:AuthAction.REDIRECT_TO_LOGIN})(Profile);