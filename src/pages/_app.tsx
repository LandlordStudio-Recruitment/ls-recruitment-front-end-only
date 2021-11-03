import "../../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // This the app component of the NextJs web application.
  // You're not expected to modify this to complete the test, but you can do so to include things like global layouts, styles, config, etc
  // e.g. <Layout><Component {...pageProps} /></Layout>
  // If you are just looking to make changes to the root page of the webapp, look at ~/src/pages/index.tsx.
  return <Component {...pageProps} />;
}
export default MyApp;
