import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRAY_COLOR, RGB_BLACK } from "config";
import tw from "twin.macro";

export const MomentPostingFormWrapper = styled.div`
  ${tw`rounded-2xl bg-white p-2 w-full`}
  .selector-wrapper {
    ${FLEX_STYLE("flex-start", "center")};
    margin-bottom: 1rem;
  }

  .autoComplete-form {
    margin-right: 1rem;
    width: 200px;
  }
  .country-selector {
    margin-right: 1rem;
  }
  .posting-form-preview {
    ${tw`rounded-2xl cursor-pointer py-2 px-4`}
    ${FLEX_STYLE("space-between", "center")}
    transition: 0.3s all;
    .anticon {
      ${tw`text-xl p-2`}
      transition: 0.3s all;
    }
    &:hover {
      background: ${GRAY_COLOR};
      .anticon {
        transform: scale(1.15);
      }
    }
  }
  .title-wrapper {
    ${tw`m-4 rounded-2xl`}
    ${BORDER_THIN("border")};
    input {
      ${tw`py-3 px-4 rounded-2xl`}
    }
  }
  .posting-editor {
    padding: 1rem;
    .editor-btn-wrapper {
      margin-top: 1rem;
      ${FLEX_STYLE("flex-end", "center")}
      button {
        ${tw`py-3 px-5 font-bold rounded-xl hover:bg-gray-100`}
      }
    }
  }
`;
