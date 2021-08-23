import styled from "@emotion/styled";
import { FLEX_STYLE, GRID_STYLE, MD_SIZE, RGB_BLACK, SM_SIZE } from "config";
import tw from "twin.macro";

export const UserProfileWrapper = styled.div`
  .icon-wrapper {
    ${tw`w-full mb-2 `}
    ${FLEX_STYLE("center", "center")};
    .icon {
      ${tw`w-2/3 relative rounded-full cursor-pointer`}
      aspect-ratio: 1/1;
      img {
        ${tw` w-full h-full rounded-full`}
        aspect-ratio: 1/1;
      }
      .icon-change-btn {
        ${tw`w-full h-full absolute top-0 left-0 text-white cursor-pointer opacity-0 rounded-full text-4xl`}
        ${FLEX_STYLE("center", "center")};
        transition: 0.3s all;
      }
      &:hover {
        .icon-change-btn {
          opacity: 1;
          background: ${RGB_BLACK(0.3)};
        }
      }
    }
  }
  .profile-container {
    ${tw`mt-3`}
    .user-name {
      ${tw`text-2xl font-bold mb-2 `}
      ${FLEX_STYLE("space-between", "center")};
    }
    .user-introduce {
      ${tw`leading-6`}
    }
  }
  @media (max-width: ${MD_SIZE}) {
    ${GRID_STYLE("2rem", "1fr 1.5fr")};
    .profile-container,
    .icon-wrapper {
      ${tw`m-0`}
      .icon {
        ${tw`w-full h-full`}
      }
    }
  }
  @media (max-width: ${SM_SIZE}) {
    display: block;
    .icon-wrapper {
      .icon {
        ${tw`w-1/2 h-1/2`}
      }
    }
    .user-name {
      ${tw`mt-3 mb-5 text-center w-full`}
    }
  }
`;
