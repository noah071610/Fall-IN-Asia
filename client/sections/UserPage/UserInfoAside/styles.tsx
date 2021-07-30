import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, RGB_BLACK, WHITE_COLOR } from "config";
import tw from "twin.macro";

export const UserInfoAsideWrapper = styled.aside`
  .user-info-aside {
    ${tw`w-full py-8 px-10 bg-white rounded-2xl`}
    .icon-wrapper {
      ${tw`w-full mb-2 `}
      ${FLEX_STYLE("center", "center")};
      .icon {
        ${tw`w-2/3 relative rounded-full cursor-pointer`}
        img {
          ${tw`w-full h-full rounded-full`}
        }
        .icon-changer {
          ${tw`w-full h-full absolute top-0 left-0 text-white cursor-pointer opacity-0 rounded-full text-4xl`}
          ${FLEX_STYLE("center", "center")};
          transition: 0.3s all;
        }
        &:hover {
          .icon-changer {
            opacity: 1;
            background: ${RGB_BLACK(0.3)};
          }
        }
      }
    }
    .user-intro-wrapper {
      ${tw`mt-3`}
      .user-name {
        ${tw`text-2xl font-bold mb-2 `}
        ${FLEX_STYLE("space-between", "center")};
      }
      .user-introduce {
        ${tw`leading-6`}
      }
    }
    h3 {
      ${tw`text-sm font-bold mb-2`}
    }
    .follow-wrapper {
      ${tw`mb-4`}
      .follow-icon-wrapper {
        ${tw`mb-2 mt-3`}
        img {
          ${tw`w-6 h-6 rounded-full border-solid border border-gray-100 mr-2`}
        }
      }
      span {
        ${tw`leading-5`}
      }
    }
    .post-len {
      ${tw`mb-4`}
    }
    .btn-wrapper {
      ${tw`mt-8`}
      button {
        ${tw`w-full mt-2 py-3 rounded-md hover:shadow-md font-bold`}
        transition:0.3s all;
        ${BORDER_THIN("border")};
      }
    }

    .edit-input {
      ${tw`py-2 px-3 rounded-md hover:shadow-md focus:shadow-md`}
      ${BORDER_THIN("border")};
    }
    .edit-textarea {
      ${tw`text-xs py-2 px-3 rounded-md hover:shadow-md focus:shadow-md`}
      ${BORDER_THIN("border")};
    }
    .edit-title {
      ${tw`my-3 font-bold`}
    }
  }
`;
