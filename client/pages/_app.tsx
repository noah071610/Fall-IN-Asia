import type { AppProps } from "next/app";
import { useCallback, useEffect, useMemo } from "react";
import { wrapper } from "configureStore";
import "../styles/font.css";
import "swiper/css/bundle";
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
import { Global } from "@emotion/react";
import { resetStyle } from "../styles/global";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";

const App = appWithTranslation(({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const dispatch = useDispatch();
  const { onProfilePopUp, onNoticePopUp, onSearchPopUp, onSlideMenu, onLanguageSelectPopUp } =
    useSelector((state: RootState) => state.main);
  const onClickClosePopup = useCallback(
    (e) => {
      if (onSearchPopUp && e.target.nodeName !== "HEADER") {
        dispatch(mainSlice.actions.closeSearchPopUp());
      }
      if (onProfilePopUp) {
        dispatch(mainSlice.actions.closeProfilePopUp());
      }
      if (onNoticePopUp) {
        dispatch(mainSlice.actions.closeNoticePopUp());
      }
      if (onLanguageSelectPopUp) {
        dispatch(mainSlice.actions.closeLanguageSelectPopUp());
      }
    },
    [onProfilePopUp, onNoticePopUp, onSearchPopUp, onLanguageSelectPopUp]
  );
  const lan = useMemo(() => {
    return locale === "jp" ? `"Kosugi Maru", sans-serif` : `"Spoqa Han Sans Neo", "sans-serif"`;
  }, [locale]);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {locale === "jp" ? (
          <link href="/font/jp.css" rel="stylesheet" />
        ) : (
          <link href="/font/ko.css" rel="stylesheet" />
        )}
      </Head>
      <Header />
      <Global styles={() => resetStyle(lan)} />
      <div onClick={onClickClosePopup}>
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
        <MobileSlideMenu />
        {onSlideMenu && <Overlay isMobile={true} />}
      </div>
    </>
  );
});

export default wrapper.withRedux(App);
