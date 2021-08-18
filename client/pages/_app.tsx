import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyle } from "@styles/styles";
import { useCallback } from "react";
import { wrapper } from "configureStore";
import { ToastContainer } from "react-toastify";
import Header from "@layout/Header";
import Footer from "@layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainSlice } from "slices/main";
import MobileSlideMenu from "@layout/MobileSlideMenu";
import Overlay from "@components/Modals/Overlay";
import Head from "next/head";

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
      <Global styles={globalStyle} />
      <div onClick={onClickClosePopup}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default wrapper.withRedux(App);
