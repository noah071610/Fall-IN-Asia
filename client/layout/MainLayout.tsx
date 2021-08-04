import React, { FC } from "react";
import styled from "@emotion/styled";
import { XLG_SIZE } from "config";
import tw from "twin.macro";
import MainAsideLeftNav from "@sections/MainPage/MainAsideLeftNav";
import MainAsideRightList from "@sections/MainPage/MainAsideRightList";
import MainPoster from "@sections/MainPage/MainPoster";

const MainLayoutWrapper = styled.div`
  ${tw`bg-gray-100`}
  .layout {
    width: ${XLG_SIZE};
    ${tw`mx-auto pt-8 pb-32 flex`}
    .layout-middle {
      ${tw`w-3/5 px-8`}
      .main-title {
        ${tw`text-base font-bold mt-8 mb-4`}
      }
      .main-title:first-of-type {
        ${tw`mt-0 mb-4`}
      }
    }
    @media (max-width: 900px) {
      ${tw`w-full`}
      .layout-middle {
        ${tw`w-full px-4`}
        .main-title {
          ${tw`text-sm mt-7 mb-3`}
        }
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
        <MainAsideLeftNav />
        <div className="layout-middle">{children}</div>
        <MainAsideRightList />
      </div>
    </MainLayoutWrapper>
  );
};

export default MainLayout;
