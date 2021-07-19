import type { AppProps } from "next/app";
import AppLayout from "sections/AppLayout";
import { Global } from "@emotion/react";
import { resetStyles } from "@styles/resetStyles";
import AOS from "aos";
import { useEffect } from "react";
import { wrapper } from "configureStore";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import { ToastContainer } from "react-toastify";
import Header from "@sections/Header";
import Footer from "@sections/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({ startEvent: "load" });
  }, []);
  return (
    <>
      <Header />
      <Global styles={resetStyles} />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default wrapper.withRedux(App);
