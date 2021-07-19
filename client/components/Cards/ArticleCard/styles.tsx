import styled from "@emotion/styled";
import {
  BLUE_COLOR,
  BORDER_THICK,
  BORDER_THIN,
  FLEX_STYLE,
  GRAY_COLOR,
  GRID_STYLE,
  RGB_BLACK,
} from "config";

export const ArticleCardWrapper = styled.div`
  margin: 0 1.5rem;
  padding: 1.5rem 0;
  ${BORDER_THIN("border-bottom")};
  .article-top{
    ${FLEX_STYLE("space-between", "flex-start")};
    padding-bottom:1rem;
  } 
  .name-space {
    ${FLEX_STYLE("flex-start", "")};
    .icon {
      margin-right:.7rem;
      img {
        width: 2.5rem;
        height 2.5rem;
        border-radius:50%;
      }
    }
    .date{
      padding-top:0.3rem;
      color:${RGB_BLACK(0.3)};
    }
  }
  .article{
    p {
      cursor: pointer;
      line-height: 1.8;
      font-weight:bold;
      margin-bottom:1rem;
      &:hover{
        text-decoration:underline;
      }
    }
    .image-list{

    }
  }
  .article-footer{
    li{
      padding:0.3rem;
      cursor:pointer;
      .count{
        margin:0 .3rem;
      }
      .anticon {
        font-size:1.2rem;
      }
      &:hover{
        background:${GRAY_COLOR};
        border-radius:5px;
      }
    }
  }
`;
