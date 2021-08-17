import { FC } from "react";
import styled from "@emotion/styled/macro";
import {
  BORDER_THIN,
  FLEX_STYLE,
  GRAY_COLOR,
  GRID_STYLE,
  MD_SIZE,
  SM_SIZE,
  XLG_SIZE,
} from "config";
import tw from "twin.macro";
import UserInfoAside from "@sections/UserPage/UserInfoAside";
const UserInfoLayoutWrapper = styled.main`
  background: ${GRAY_COLOR};
  padding: 6.5rem 0;
  .layout {
    width: ${XLG_SIZE};
    ${tw`mx-auto`};
    ${GRID_STYLE("3rem", "1fr 3fr")};
    .layout-middle {
      ${tw`px-4 py-8 rounded-2xl bg-white`}
      .main-title {
        ${tw`text-sm font-bold mt-6 mb-3 mx-4`};
        span {
          ${tw`block text-sm mt-2`};
        }
      }
      .main-title:first-of-type {
        ${tw`mt-0 mb-3`}
      }
    }
  }

  .moment-list,
  .no-countries,
  .notice-list,
  .route-map-wrapper,
  .post-slider,
  .no-notice-wrapper,
  .no-post-wrapper {
    ${tw`p-4`}
    @media (max-width: 1000px) {
      ${tw`px-0`}
    }
  }
  .post-slider {
    ${GRID_STYLE("1rem", "repeat(3,1fr)")};
    @media (max-width: 1000px) {
      ${tw`px-2`}
    }
    @media (max-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }
    @media (max-width: ${SM_SIZE}) {
      display: block;
    }
  }
  .route-map-wrapper {
    width: 100%;
    div {
      width: 100%;
    }
  }
  .notice-list {
    .anticon {
      ${tw`text-xl`}
    }
  }
  .notice-more-btn {
    ${FLEX_STYLE("center", "center")};
    ${tw`text-sm font-bold`}
    span {
      ${tw`mr-2`}
    }
  }
  .more-btn-wrapper {
    ${tw`px-4`}
  }
  .no-post-wrapper {
    ${tw`h-60 rounded-xl select-none p-4 m-4`}
    ${BORDER_THIN("border")};
    ${FLEX_STYLE("center", "center", "column")};
    img {
      ${tw`w-20 h-20 opacity-30 mb-4`}
    }
  }
  @media (max-width: ${MD_SIZE}) {
    .layout {
      ${tw`w-full block px-4`}
      .layout-middle {
        .main-title {
          ${tw`mx-0`};
        }
      }
    }
    .more-btn-wrapper {
      ${tw`px-2`}
    }
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`pt-20`}
    .layout {
      ${tw`px-2`}
    }
  }
`;

interface UserInfoLayoutProps {}

const UserInfoLayout: FC<UserInfoLayoutProps> = ({ children }) => {
  return (
    <UserInfoLayoutWrapper>
      <div className="layout">
        <UserInfoAside />
        <div className="layout-middle">{children}</div>
      </div>
    </UserInfoLayoutWrapper>
  );
};

export default UserInfoLayout;
