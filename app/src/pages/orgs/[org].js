// Organization Homepage
// List Dashboards?

import Head from "next/head";
import Link from "next/link";
import { Box, Button, Grommet } from "grommet";
import theme from "../../lib/theme";
import { useRouter } from "next/router";
import { app } from "../../firebase-app";
import Nav from "../../components/Nav";
import Page from "../../components/Page";

import { useContext, useEffect, useState } from "react";

const db = app.firestore();
const NO_ORG_ERROR = "ORG_FETCH_ERROR/NO_ORG_ERROR";

const OrgPage = () => {
  const router = useRouter();
  const orgName = router.query.org;

  const [loading, setLoading] = useState(false);
  const [orgFetchError, setOrgFetchError] = useState(null);
  const [orgData, setOrg] = useState(null);

  /**
   * Fetch org data
   */
  useEffect(() => {
    if (!orgName || !orgName.length) {
      console.error("oof: org page with no org name");
      return;
    }

    const fetch = async () => {
      const snapshots = await db
        .collection("organizations")
        .where("name", "==", orgName)
        .limit(1)
        .get();

      let org;
      snapshots.forEach((snap) => {
        org = snap.data();
      });
      if (org) {
        setOrg(org);
      } else {
        setOrgFetchError(NO_ORG_ERROR);
      }
    };
    fetch();
  }, [orgName]);

  return (
    <Page title={orgName}>
        <Nav />
        <Box align="center">
          <Box margin={{ top: "large" }} align="center">
            Organization: {orgName}
          </Box>
          <Box>{loading && "loading..."}</Box>
          <Box>
            {orgFetchError === NO_ORG_ERROR && (
              <Box>
                no org here!
                <Link href={`/orgs/create?org=${orgName}`} replace>
                  create one?
                </Link>
              </Box>
            )}
          </Box>
        </Box>
    </Page>
  );
};

export default OrgPage;
