import styled from "@emotion/styled/macro";
import { BORDER_THIN, FLEX_STYLE, FONT_STYLE, HOVER_GRAY } from "config";
import tw from "twin.macro";

export const StoryPaginationWrapper = styled.div`
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
  .another-stories {
    ${tw`my-8 overflow-hidden rounded-2xl`}
    li {
      ${tw`flex w-full cursor-pointer p-4 hover:bg-gray-100`}
      img {
        ${tw`w-20 h-16 mr-4 rounded-md`}
      }
      h4 {
        margin-bottom: 0.5rem;
      }
      p {
        ${FONT_STYLE(0.94, true)}
      }
    }
  }
`;
