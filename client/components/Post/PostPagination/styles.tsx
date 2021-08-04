import styled from "@emotion/styled/macro";
import { ELLIPSIS_STYLE, FLEX_STYLE, GRID_STYLE, MD_SIZE } from "config";
import tw from "twin.macro";

export const PostPaginationWrapper = styled.div`
  ${tw`w-2/3 mx-auto mt-4 mb-20`}
  .ant-divider {
    margin: 1rem 0;
  }
  .pagination {
    ${GRID_STYLE("1rem", "1fr 1fr")};
    .side-post {
      transition: 0.3s all;
      ${tw`cursor-pointer shadow-md`}
      &:hover {
        ${tw`shadow-lg`}
        img {
          transform: scale(1.1);
        }
      }
      .image-wrapper {
        ${tw`overflow-hidden`}
        img {
          transition: 0.3s all;
          ${tw`w-full`}
          height:180px;
        }
      }
      .post-desc {
        ${tw`w-full p-5`}
        div {
          h3 {
            ${tw`text-xs mb-2`}
          }
          h4 {
            ${ELLIPSIS_STYLE(1.7, 2, "46px")}
            ${tw`mb-1 font-bold`}
          }
        }
      }
    }
    .prev-post {
      .post-desc {
        ${FLEX_STYLE("flex-start", "center")};
        h3,
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
        h3,
        h4 {
          ${tw`text-right`}
        }
        .anticon {
          ${tw`ml-3`}
        }
      }
    }
  }
  @media (max-width: 750px) {
    ${tw`w-full`}
    .pagination {
      gap: 0.5rem;
    }
  }
  @media (max-width: 480px) {
    .pagination {
      ${tw`block`}
      .side-post {
        ${GRID_STYLE("", "1fr 1.5fr")};
        .post-desc {
          ${tw`p-2`}
        }
        .image-wrapper {
          img {
            ${tw`h-32`}
          }
        }
      }
      .prev-post {
        ${tw`mb-2`}
        direction: rtl;
        .post-desc {
          flex-direction: row-reverse;
        }
      }
    }
  }
`;
