import { FC } from "react";
import styled from "@emotion/styled/macro";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRAY_COLOR, GRID_STYLE, XLG_SIZE } from "config";
import tw from "twin.macro";
import UserInfoAside from "@sections/UserPage/UserInfoAside";
const UserInfoLayoutWrapper = styled.div`
  background: ${GRAY_COLOR};
  padding-top: 2rem;
  .layout {
    width: ${XLG_SIZE};
    ${tw`mx-auto`};
    ${GRID_STYLE("3rem", "1fr 3fr")};
    .layout-middle {
      ${tw`p-8 rounded-2xl bg-white`}
      .main-title {
        ${tw`text-sm font-bold mt-6 mb-3`};
        span {
          ${tw`block text-sm mt-2`};
        }
      }
      .main-title:first-of-type {
        ${tw`mt-0 mb-3`}
      }
      .post-list-wrapper {
        ${tw`mt-6`}
        ${GRID_STYLE("1rem", "1fr 1fr")};
      }
    }
  }
  .no-post-wrapper {
    ${tw`w-full h-80 rounded-xl select-none`}
    ${BORDER_THIN("border")};
    ${FLEX_STYLE("center", "center", "column")};
    img {
      ${tw`w-20 h-20 opacity-30 mb-4`}
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
