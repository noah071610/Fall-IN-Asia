import React, { FC } from "react";
import styled from "@emotion/styled";
import { FONT_STYLE, GRAY_COLOR, XLG_SIZE } from "config";
import tw from "twin.macro";
import MainNavMenu from "@sections/MainPage/MainNavMenu";
import MainAside from "@sections/MainPage/MainAside";
import MainPoster from "@sections/MainPage/MainPoster";
const MainLayoutWrapper = styled.div`
  background: ${GRAY_COLOR};
  padding-top: 6rem;
  .layout {
    width: ${XLG_SIZE};
    ${tw`mx-auto py-8 flex`}
    .layout-middle {
      ${tw`w-3/5 px-8`}
      .main-title {
        ${FONT_STYLE(1, true)}
        ${tw`mt-8 mb-4`}
      }
      .main-title:first-of-type {
        ${tw`mt-0 mb-4`}
      }
    }
  }
`;

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainLayoutWrapper>
      <MainPoster />
      <div className="layout">
        <MainNavMenu />
        <div className="layout-middle">{children}</div>
        <MainAside />
      </div>
    </MainLayoutWrapper>
  );
};

export default MainLayout;
