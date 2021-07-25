import styled from "@emotion/styled/macro";
import { FLEX_STYLE } from "config";
import tw from "twin.macro";

export const StoryPostPaginationWrapper = styled.div`
  ${tw`w-3/5 mx-auto mt-4 mb-20`}
  .pagination {
    ${FLEX_STYLE("center", "center")};
    button {
      ${tw`rounded-md p-4 hover:bg-gray-100`}
      .image-wrapper {
        ${tw`p-2`}
        img {
          ${tw`w-full h-40  rounded-md`}
        }
      }
      .btn-desc {
        ${tw`w-full p-2`}
        div {
          h4 {
            ${tw`mb-1`}
          }
        }
        .anticon {
          ${tw`text-2xl`}
        }
      }
    }
    .btn-left {
      .btn-desc {
        ${FLEX_STYLE("flex-start", "center")};
        h4 {
          ${tw`text-left`}
        }
        .anticon {
          ${tw`mr-3`}
        }
      }
    }
    .btn-right {
      .btn-desc {
        ${FLEX_STYLE("flex-end", "center")};
        h4 {
          ${tw`text-right`}
        }
        .anticon {
          ${tw`ml-3`}
        }
      }
    }
  }
`;
