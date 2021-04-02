// import App from 'next/app'
import initAuth from "../lib/initAuth";
initAuth();

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
