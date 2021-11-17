import Head from "next/head";
import { Grommet } from "grommet";
import theme from "../lib/theme";

const Page = ({ children, title }) => {
  return (
    <div className="container">
      <Head>
        <title>Glade | {title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="an Open Source web annotation platform"
        />
        <style> 
          {`
            /* reset css */
            body {
              margin: 0px;
              padding: 0px;
            }
            `}
        </style>
      </Head>
      <Grommet theme={theme}>{children}</Grommet>
    </div>
  );
};

export default Page;
