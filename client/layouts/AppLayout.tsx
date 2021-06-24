import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { MD_SIZE, RGB_BLACK } from "config";
import Header from "@layouts/Header/index";

const Wrapper = styled.div`
  width: ${MD_SIZE};
  margin: 0 auto;
  padding: 1rem;
  box-shadow: 0px 0px 15px ${RGB_BLACK("0.1")};
`;

interface AppLayoutProps {}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const [state, setstate] = useState();
  return (
    <>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </>
  );
};

export default AppLayout;
