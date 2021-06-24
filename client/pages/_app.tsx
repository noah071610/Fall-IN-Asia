import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import AppLayout from "@layouts/AppLayout";
import { Global } from "@emotion/react";
import { resetStyles } from "@styles/resetStyles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={resetStyles} />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};
export default App;
