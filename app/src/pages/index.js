import Head from "next/head";
import Link from "next/link";
import { grommet, Box, Button, Grommet } from "grommet";

const theme = grommet;
const gladeGreen = "#1A535C";

import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import Header from '../components/Header'

// personalize
theme.global.colors.brand = gladeGreen;

const Landing = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="container">
      <Head>
        <title>Glade</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="an Open Source web annotation platform"/>
      </Head>
      <Grommet theme={grommet}>
        <Box align="center">
          <Box width="medium" margin="large">
            <Header/>
            <Box margin={{ top: "large" }} align="center">
              {currentUser ? (
                <Link href="/profile">
                  <Button label="Show profile!" fill primary size="large" />
                </Link>
              ) : (
                <Link href="/signup">
                  <Button label="Reserve your username!" fill primary size="large" />
                </Link>
              )}
            </Box>
          </Box>
        </Box>
      </Grommet>
    </div>
  );
};

export default Landing;
