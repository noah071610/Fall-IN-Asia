import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRAY_COLOR, HOVER_GRAY, RGB_BLACK } from "config";

export const CommentFormWrapper = styled.div`
  padding: 1rem 2rem;
  .comment-wrapper{
    transition:0.25s all;
    border-radius: 15px;
    padding:0.3rem 0.5rem;
    background:${GRAY_COLOR};
  }
  .comment-input{
    display:flex;
    .icon {
      margin-right:.7rem;
      img {
        width: 2.5rem;
        height 2.5rem;
        border-radius:50%;
      }
    }
    textarea{
      cursor:pointer;
      &:focus{
      cursor:inherit;
      }
    }
    
  }
  .comment-submit-wrapper{
    overflow:hidden;
    div{
      ${FLEX_STYLE("flex-end", "center")};
      button{
        padding:0.5rem 0.8rem;
        ${HOVER_GRAY(5)};
        margin-left:0.5rem;
      }
    }
  }
`;
