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
import "animate.css/animate.css";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({ startEvent: "load" });
  }, []);
  return (
    <>
      <Global styles={resetStyles} />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default wrapper.withRedux(App);
