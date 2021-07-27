import styled from "@emotion/styled/macro";
import { FLEX_STYLE, GRID_STYLE } from "config";
import tw from "twin.macro";

export const StoryPostPaginationWrapper = styled.div`
  ${tw`w-2/3 mx-auto mt-4 mb-20`}
  .ant-divider {
    margin: 1rem 0;
  }
  .pagination {
    ${GRID_STYLE("1rem", "1fr 1fr")};
    .side-post {
      ${tw`rounded-md p-4 hover:bg-gray-100 cursor-pointer`}
      .image-wrapper {
        ${tw`p-2`}
        img {
          ${tw`w-full h-40  rounded-md`}
        }
      }
      .post-desc {
        ${tw`w-full p-2`}
        div {
          h4 {
            ${tw`mb-1`}
          }
        }
        .anticon {
          ${tw`text-base`}
        }
      }
    }
    .prev-post {
      .post-desc {
        ${FLEX_STYLE("flex-start", "center")};
        h4 {
          ${tw`text-left`}
        }
        .anticon {
          ${tw`mr-3`}
        }
      }
    }
    .next-post {
      .post-desc {
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
