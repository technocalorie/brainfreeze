import "../styles/globals.css";
import "../styles/swiper.css";
import Layout from "../components/Layout";
// import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      {/* <AnimatePresence exitBeforeEnter> */}
      <Component {...pageProps} key={router.route} />
      {/* </AnimatePresence> */}
    </Layout>
  );
}

export default MyApp;
