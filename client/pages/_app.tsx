import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyle } from "@styles/styles";
import { wrapper } from "configureStore";
import "antd/dist/antd.css";
import "swiper/swiper.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "react-quill/dist/quill.snow.css";
import { ToastContainer } from "react-toastify";
import Header from "@layout/Header";
import Footer from "@layout/Footer";
import MobileSlideMenu from "@layout/MobileSlideMenu";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Global styles={globalStyle} />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
      <MobileSlideMenu />
    </>
  );
};
export default wrapper.withRedux(App);
