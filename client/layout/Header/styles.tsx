import { css } from "@emotion/react";
import { BORDER_THIN, FLEX_STYLE, MD_SIZE } from "config";
import tw from "twin.macro";

export const HeaderWrapper = (headerDownSize: boolean) => css`
  ${tw`w-full bg-white fixed`}
  ${headerDownSize ? tw`py-2 px-10` : tw`py-4 px-8`}
  z-index:60;
  transition: 0.3s all;
  ${BORDER_THIN("border-bottom")};
  ${FLEX_STYLE("space-between", "center")};
  .header-anchor {
    transition: 0.3s all;
    ${tw`font-bold`}
    ${headerDownSize ? tw`text-sm` : "font-size:1.05rem"}
  }
  .header-logo-anchor {
    ${tw`w-40 h-8 mr-6`}
    transition: 0.3s all;
    ${headerDownSize && `transform:scale(0.8);`}
    .logo {
      ${tw`w-full h-full`}
    }
  }
  .header-left {
    ${FLEX_STYLE("flex-start", "center")};
    li {
      transition: 0.3s all;
      ${tw`mr-6`}
    }
  }
  .header-right {
    ${FLEX_STYLE("", "center")};
    .header-list {
      transition: 0.3s all;
      ${tw`ml-3 relative`}
      padding: 0.3rem 0.5rem;
    }
  }
  .user-icon {
    ${tw`w-10 h-10 rounded-full`}
    transition: 0.3s all;
    ${headerDownSize && `transform:scale(0.8)`}
  }
  .list-icon {
    ${tw`rounded-full hover:bg-gray-100`}
  }
  .icon {
    transition: 0.3s all;
    ${headerDownSize ? tw`text-base` : tw`text-2xl`}
  }
  .notice-icon {
    ${tw`relative`}
    .circle {
      ${tw`absolute bottom-0 right-0 text-xs text-green-300`}
    }
  }
  .header-small {
    display: none;
  }
  @media (max-width: ${MD_SIZE}) {
    ${tw`px-4`}
    .header-right,
    .header-left {
      display: none;
    }
    .header-small {
      ${tw`w-full`}
      ${FLEX_STYLE("space-between", "center")};
      li {
        ${FLEX_STYLE("center", "center")};
      }
      .header-logo-anchor {
        ${tw`m-0`}
      }
    }
  }
`;
