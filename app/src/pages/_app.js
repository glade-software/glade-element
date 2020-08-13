// import App from 'next/app'
import { AuthProvider } from "../components/AuthProvider";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
