import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { resetStyles } from "@styles/resetStyles";
import AOS from "aos";
import { useCallback, useEffect } from "react";
import { wrapper } from "configureStore";
import "antd/dist/antd.css";
import "swiper/swiper.min.css";
import "animate.css/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { ToastContainer } from "react-toastify";
import Header from "@sections/Header";
import Footer from "@sections/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainSlice } from "slices/main";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init({ startEvent: "load" });
  }, []);
  const { onProfilePopUp, onNoticePopUp, onSearchPopUp } = useSelector(
    (state: RootState) => state.main
  );
  const onClickBody = useCallback(
    (e) => {
      if (onProfilePopUp) {
        dispatch(mainSlice.actions.closeProfilePopUp());
      }
      if (onNoticePopUp) {
        dispatch(mainSlice.actions.closeNoticePopUp());
      }
      if (onSearchPopUp && e.target.nodeName !== "HEADER") {
        dispatch(mainSlice.actions.closeSearchPopUp());
      }
    },
    [onProfilePopUp, onNoticePopUp, onSearchPopUp]
  );

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div onClick={onClickBody}>
        <Global styles={resetStyles} />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default wrapper.withRedux(App);
