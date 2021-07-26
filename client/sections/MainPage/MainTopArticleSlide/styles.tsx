import styled from "@emotion/styled";
import { FLEX_STYLE, RGB_BLACK } from "config";
import { Swiper } from "swiper/react";
import tw from "twin.macro";

export const MainTopArticleSlideWrapper = styled(Swiper)`
  ${tw`rounded-2xl bg-white`}
  .more-card {
    ${tw`cursor-pointer`}
    height:272px;
    ${FLEX_STYLE("center", "center")};
    div {
      ${FLEX_STYLE("center", "center", "column")};
      color: ${RGB_BLACK(0.3)};
      .anticon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
    }
  }
  .article-card-wrapper {
    margin-bottom: 0;
  }
`;
