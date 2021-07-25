import React, { FC } from "react";
import styled from "@emotion/styled";
import { FONT_STYLE, GRAY_COLOR, LG_SIZE } from "config";
import MainAsideMenu from "@sections/MainPage/MainAsideMenu";
import tw from "twin.macro";
const Wrapper = styled.div`
  background-color: ${GRAY_COLOR};
  .layout {
    width: ${LG_SIZE};
    ${tw`mx-auto py-8 flex`}
    .layout_main {
      ${tw`w-3/4 ml-8`}
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
    <Wrapper>
      <div className="layout">
        <MainAsideMenu />
        <div className="layout_main">{children}</div>
      </div>
    </Wrapper>
  );
};

export default MainLayout;
