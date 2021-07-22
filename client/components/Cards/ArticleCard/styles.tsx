import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRAY_COLOR, RED_COLOR } from "config";

export const ArticleCardWrapper = styled.div`
  margin: 0 1.5rem;
  padding: 1.5rem 0;
  ${BORDER_THIN("border-bottom")};
  .article-header {
    a {
      &:hover {
        font-weight: bold;
      }
    }
  }
  .article-top {
    ${FLEX_STYLE("space-between", "flex-start")};
    padding-bottom: 1rem;
  }
  .article {
    .content {
      cursor: pointer;
      line-height: 1.8;
      font-weight: bold;
      padding-left: 0.3rem;
      padding-bottom: 1rem;
      &:hover {
        text-decoration: underline;
      }
    }
    .one-image {
      cursor: pointer;
      padding-bottom: 1rem;
      img {
        border-radius: 15px;
        width: 50%;
        height: 300px;
      }
    }
    .two-images {
      cursor: pointer;
      ${FLEX_STYLE("flex-start", "center")};
      padding-bottom: 1rem;
      img {
        border-radius: 15px;
        width: 50%;
        height: 300px;
        margin-right: 0.2rem;
      }
      img:first-of-type {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      img:last-of-type {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }
  }
  .article-footer {
    li {
      padding: 0.3rem;
      cursor: pointer;
      .count {
        margin: 0 0.23rem;
      }
      .anticon {
        font-size: 1rem;
      }
      &:hover {
        background: ${GRAY_COLOR};
        border-radius: 5px;
      }
    }
  }
  .liked {
    .anticon {
      color: ${RED_COLOR};
    }
  }
`;
