import { css } from "@emotion/react";
import { BORDER_THIN, FLEX_STYLE } from "config";
import tw from "twin.macro";

export const HeaderWrapper = (headerDownSize: boolean) => css`
  ${tw`w-full bg-white fixed`}
  ${headerDownSize ? tw`py-2 px-10` : tw`py-3 px-8`}
  z-index:60;
  transition: 0.3s all;
  ${BORDER_THIN("border-bottom")};
  ${FLEX_STYLE("space-between", "center")};
  a {
    transition: 0.3s all;
    ${tw`font-bold`}
    ${headerDownSize ? tw`text-sm` : "font-size:1.05rem"}
  }
  .header-left {
    img {
      width: 8.5rem;
      height: 2.5rem;
      margin-right: 2rem;
      transition: 0.3s all;
      ${headerDownSize && `transform:scale(0.8)`}
    }
    .header-list {
      transition: 0.3s all;
      ${tw`mr-6`}
      .icon {
        ${tw`w-10 h-10 rounded-full`}
      }
    }
  }
  .header-right {
    ${FLEX_STYLE("", "center")};
    .header-list {
      transition: 0.3s all;
      ${tw`ml-3 relative`}
      padding: 0.3rem 0.5rem;
      .user-icon {
        ${tw`w-10 h-10 rounded-full`}
        transition: 0.3s all;
        ${headerDownSize && `transform:scale(0.8)`}
      }
      .anticon {
        transition: 0.3s all;
        ${headerDownSize ? tw`text-base` : tw`text-2xl`}
      }
    }
    .list-icon {
      ${tw`rounded-full hover:bg-gray-100`}
    }
  }
`;
