import type { AppProps } from "next/app";
import { useCallback } from "react";
import { wrapper } from "configureStore";
import "../styles/styles.css";
import "swiper/swiper.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "react-quill/dist/quill.snow.css";
import "antd/dist/antd.css";
import { ToastContainer } from "react-toastify";
import Header from "@layout/Header";
import Footer from "@layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainSlice } from "slices/main";
import MobileSlideMenu from "@layout/MobileSlideMenu";
import Overlay from "@components/Modals/Overlay";
import Head from "next/head";
import { css, Global } from "@emotion/react";

const resetStyle = css`
  body {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
  a {
    color: black;
    &:hover {
      color: black;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
  }

  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch();
  const { onProfilePopUp, onNoticePopUp, onSearchPopUp, onSlideMenu } = useSelector(
    (state: RootState) => state.main
  );
  const onClickClosePopup = useCallback(
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
        <meta charSet="utf-8" />
      </Head>
      <Header />
      <Global styles={resetStyle} />
      <div onClick={onClickClosePopup}>
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
        <MobileSlideMenu />
        {onSlideMenu && <Overlay isMobile={true} />}
      </div>
    </>
  );
};
export default wrapper.withRedux(App);
