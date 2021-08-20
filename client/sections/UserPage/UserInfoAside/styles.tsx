import styled from "@emotion/styled";
import { BORDER_THIN, GRID_STYLE, MD_SIZE, SM_SIZE } from "config";
import tw from "twin.macro";

export const UserInfoAsideWrapper = styled.aside`
  .user-info-aside-inner {
    ${tw`w-full py-8 px-10 bg-white rounded-2xl`}
    h3 {
      ${tw`text-sm font-bold mb-2`}
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
    .submit-btn-wrapper {
      ${tw`mt-8`}
      button {
        ${tw`w-full mt-2 py-3 rounded-md hover:shadow-md font-bold`}
        transition:0.3s all;
        ${BORDER_THIN("border")};
      }
    }
  }
  @media (max-width: ${MD_SIZE}) {
    ${tw`mb-8`}
    .user-info-aside-main {
      ${GRID_STYLE("2rem", "1fr 1fr")};
    }
    .edit-title:first-of-type {
      ${tw`mt-0`}
    }
    .submit-btn-wrapper {
      ${tw`mt-0`}
      button:first-of-type {
        ${tw`m-0`}
      }
    }
  }

  @media (max-width: ${SM_SIZE}) {
    .user-info-aside {
      ${tw`px-6`}
    }
    .user-info-aside-main {
      ${tw`block`};
    }
    .edit-title:first-of-type {
      ${tw`mt-3`}
    }
    .submit-btn-wrapper {
      ${tw`mt-4`}
      button:first-of-type {
        ${tw`mt-2`}
      }
    }
  }
`;
