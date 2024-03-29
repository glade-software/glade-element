import Head from "next/head";
import Link from "next/link";
import { grommet, Box, Button, Grommet } from "grommet";
import { withAuthUser, useAuthUser, AuthAction } from "next-firebase-auth";
const theme = grommet;
const gladeGreen = "#1A535C";

import { useContext } from "react";
import SplashHeader from "../components/SplashHeader";

// personalize
theme.global.colors.brand = gladeGreen;

const Landing = () => {
  const currentUser = useAuthUser();
  return (
    <div className="container">
      <Head>
        <title>Glade</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="an Open Source web annotation platform"
        />
      </Head>
      <Grommet theme={grommet}>
        <Box align="center">
          <Box width="medium" margin="large">
            <SplashHeader />
            <Box margin={{ top: "large" }} align="center">
              <Link href="/signup">
                <Button
                  label="Reserve your username!"
                  fill
                  primary
                  size="large"
                />
              </Link>
              <Box>or</Box>
              <Link href="/login">
                <Button label="Login!" secondary size="large" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Grommet>
    </div>
  );
};

export default withAuthUser()(Landing);
