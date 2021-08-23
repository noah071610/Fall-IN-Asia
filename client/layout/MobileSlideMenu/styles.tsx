import styled from "@emotion/styled";
import { BORDER_THIN, ELLIPSIS_STYLE, FLEX_STYLE, GRAY_COLOR, GRID_STYLE, MD_SIZE } from "config";
import tw from "twin.macro";

export const MobileSlideMenuWrapper = styled.nav`
  ${tw`fixed top-0 left-0 h-screen bg-white w-5/6 p-4 hidden`}
  z-index:100;
  transition: 0.15s all;
  .slide-menu {
    ${tw`w-full px-1 h-full overflow-y-auto`}
    ${FLEX_STYLE("space-between", "flex-start", "column")};
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &-main {
      ${tw`w-full`}
    }
    &-logo {
      ${tw`w-40 h-8 mb-4`}
      transition: 0.3s all;
    }
    &-divider {
      ${tw`mt-0 mb-4`}
      span {
        ${tw`text-sm font-bold`}
      }
    }
    &-sub-title {
      ${tw`pl-1 text-xs font-bold`}
    }
  }
  .user-profile-wrapper {
    ${GRID_STYLE("1rem", "1fr 2fr")}
    ${tw`my-4`}
    .icon-wrapper {
      img {
        ${tw`w-full rounded-full`}
      }
    }
    h2 {
      ${tw`text-sm font-bold`}
    }
    p {
      ${tw`text-xs mt-2 `}
      ${ELLIPSIS_STYLE(1.4, 2, "auto")};
    }
  }
  .user-menu-list {
    ${tw`mb-4`}
    ${GRID_STYLE("", "repeat(3,1fr)")};
    li {
      ${tw`block px-2 py-3`}
      ${FLEX_STYLE("center", "center", "column")};
      ${BORDER_THIN("border")};
      .list-icon {
        ${tw`w-6 h-6`}
      }
      h4 {
        ${tw`text-xs mt-2`}
      }
    }
    .middle-list {
      border-left: none;
      border-right: none;
    }
  }
  .login-btn {
    ${tw`w-full rounded-md block p-3 font-bold text-sm mt-4 mb-6 shadow-md`}
    ${FLEX_STYLE("flex-start", "center")};
    .social-icon-wrapper {
      ${tw`ml-3`}
      li {
        ${tw`-mr-2 rounded-full shadow-md`}
        img {
          ${tw`w-7 h-7 p-2`}
        }
      }
      li:last-of-type {
        ${tw`mr-0`}
      }
    }
  }
  .link-menu-wrapper {
    ${tw`pt-2`}
    .link-menu-list {
      ${tw`block py-3 font-bold pl-3 text-base `}
      ${FLEX_STYLE("space-between", "center")};
      border-left: 3px solid ${GRAY_COLOR};
      .direct-link {
        ${tw`w-full`}
      }
      .anticon {
        transition: 0.3s all;
        ${tw`text-lg pl-4`}
      }
    }
    .moment-link-wrapper {
      ${tw`py-2 pl-6`}
      li {
        ${tw`block py-3`}
      }
    }
  }
  .slide-menu-footer {
    ${tw`pt-16 pb-4 pr-16`}
    h4 {
      ${tw`leading-7 text-xs mb-3`}
    }
    a {
      ${tw`mr-4`}
    }
  }
  @media (max-width: ${MD_SIZE}) {
    ${tw`block`}
  }
`;
