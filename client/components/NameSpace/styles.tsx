import styled from "@emotion/styled";
import { FLEX_STYLE, RGB_BLACK } from "config";

export const NameSpaceWrapper = styled.div` 
  ${FLEX_STYLE("flex-start", "")};
  .icon {
    margin-right:.7rem;
    img {
      width: 2.5rem;
      height 2.5rem;
      border-radius:50%;
    }
  }
  span{
    display:block;
  }
  .date{
    padding-top:0.3rem;
    color:${RGB_BLACK(0.3)};
  }
`;
