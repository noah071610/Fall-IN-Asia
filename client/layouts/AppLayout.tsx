import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { MD_SIZE, RGB_BLACK } from "config";
import Header from "@layouts/Header/index";

const Wrapper = styled.div`
  width: ${MD_SIZE};
  margin: 0 auto;
  padding: 1rem 1.5rem;
  box-shadow: 3px 3px 10px ${RGB_BLACK("0.07")};
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
