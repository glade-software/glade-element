import { useRouter } from "next/router";

import {
  Box,
  Button,
  Spinner,
} from "grommet";
import Page from "../components/Page";
import Nav from "../components/Nav";

import { app } from "../firebase-app";
import { AuthAction, useAuthUser, withAuthUser } from "next-firebase-auth";
import { useState } from "react";

const Account = () => {
  const router = useRouter();
  const currentUser = useAuthUser();
  const [freeAPIKey, setFreeAPIKey] = useState(null);
  const [freeAPIKeyError, setFreeAPIKeyError] = useState(null);
  const [loadingAPIKey, setLoadingAPIKey] = useState(false);
  const getFreeAPIKey = app.functions().httpsCallable("getFreeAPIKeyForUser");

  const doGetFreeAPIKey = async () => {
    try {
      setLoadingAPIKey(true);
      const getFreeAPIKeyResponse = await getFreeAPIKey({});
      setLoadingAPIKey(false);
      setFreeAPIKey(getFreeAPIKeyResponse.data);
      console.debug(`apiKey="${getFreeAPIKeyResponse.data}"`);
    } catch (errorGettingFreeAPIKey) {
      setFreeAPIKeyError(errorGettingFreeAPIKey);
    }
  };

  return (
    <Page title="Account">
      <Nav currentUser={currentUser}/>
      <Box align="center" margin="large">
        <h2>
          hey <span style={{ color: "#1A535C" }}>@{currentUser.firebaseUser.displayName}</span>,
          welcome to the discussion 🌲
        </h2>
        <p>
          Glade is a library generally installed on other websites instead of
          this one
        </p>
        <h4>
          If you have a website and want to learn how to do that check out the
          docs at{" "}
          <a href="https://docs.glade.app/docs/getting-started">
            docs.glade.app/getting-started
          </a>
        </h4>
        <p>
          If you want to moderate the annotations on your site, you'll need a
          key
        </p>

        <Button secondary label="Get API Key 🔑" onClick={doGetFreeAPIKey}/>
        {loadingAPIKey ? <Spinner style={{margin:'2rem'}}/> : null}
        <pre>
          {freeAPIKey ? `apiKey="${freeAPIKey}"` : freeAPIKeyError || null}
        </pre>
      </Box>
    </Page>
  );
};

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: Spinner,
})(Account);
