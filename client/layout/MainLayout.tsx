import React, { FC, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { FONT_STYLE, GRAY_COLOR, LG_SIZE, MD_SIZE, RGB_BLACK, XLG_SIZE } from "config";
import MainAsideMenu from "@sections/MainPage/MainAsideMenu";
const Wrapper = styled.div`
  background-color: ${GRAY_COLOR};
  .layout {
    width: ${LG_SIZE};
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    .layout_main {
      margin-left: 2rem;
      width: 75%;
      .main-title {
        ${FONT_STYLE(1, true)}
        margin-top: 1.8rem;
        margin-bottom: 1rem;
      }
      .main-title:first-of-type {
        margin: 0;
      }
    }
  }
`;

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <div className="layout">
        <MainAsideMenu />
        {children}
      </div>
    </Wrapper>
  );
};

export default MainLayout;
