import "../../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // This the app component of the NextJs web application.
  // To complete the test, you don't need to edit this (the test is just a single page), however you can use it to edit it to include things like global layout,
  // config, styles etc.
  // e.g. <Layout><Component {...pageProps} /></Layout>
  // If you are just looking to make changes to the root page of the webapp, look at ~/src/pages/index.tsx.
  return <Component {...pageProps} />;
}
export default MyApp;
