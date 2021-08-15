import { css } from "@emotion/react";
import { BORDER_THIN, FLEX_STYLE, MD_SIZE } from "config";
import tw from "twin.macro";

export const HeaderWrapper = (headerDownSize: boolean) => css`
  ${tw`w-full bg-white fixed`}
  ${headerDownSize ? tw`py-2 px-6` : tw`py-4 px-8`}
  z-index:60;
  transition: 0.3s all;
  ${BORDER_THIN("border-bottom")};
  ${FLEX_STYLE("space-between", "center")};

  .header-logo {
    ${tw`w-40 h-8 mr-6`}
    transition: 0.3s all;
    ${headerDownSize && `transform:scale(0.8);`}
    img {
      ${tw`w-full h-full`}
    }
  }
  .header-list {
    transition: 0.3s all;
    ${tw`ml-3 relative`}
    padding: 0.3rem 0.5rem;

    &-anchor {
      transition: 0.3s all;
      ${tw`font-bold`}
      ${headerDownSize ? tw`text-sm` : "font-size:1.05rem"}
    }
  }

  .notice-icon,
  .search-icon {
    ${headerDownSize ? tw`text-base` : tw`text-2xl`}
  }
  .user-icon {
    ${headerDownSize && `transform:scale(0.8)`}
  }

  @media (max-width: ${MD_SIZE}) {
    ${tw`px-4`}
  }
`;
