import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { LG_SIZE, MD_SIZE, RGB_BLACK } from "config";
import Header from "@layouts/Header/index";
import Footer from "@layouts/Footer/index";

const Wrapper = styled.div`
  width: ${LG_SIZE};
  box-shadow: 0px 0px 15px ${RGB_BLACK("0.1")};
  margin: 0 auto;
`;

interface AppLayoutProps {}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const [state, setstate] = useState();
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};

export default AppLayout;
