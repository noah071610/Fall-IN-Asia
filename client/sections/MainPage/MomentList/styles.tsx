import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";
import tw from "twin.macro";

export const MomentListWrapper = styled.div`
  .content-wrapper {
    ${tw`mt-4 pb-4 rounded-2xl bg-white`}
    .content-filter {
      padding: 1rem;
      ${FLEX_STYLE("flex-end", "center")}
      button {
        ${FLEX_STYLE("center", "center")}
        &:hover {
          font-weight: bold;
        }
      }
    }
    .no-post {
      ${FLEX_STYLE("center", "center", "column")}
      ${tw`py-8`}
      img {
        ${tw`w-1/5 opacity-30`}
      }
    }
  }
`;
