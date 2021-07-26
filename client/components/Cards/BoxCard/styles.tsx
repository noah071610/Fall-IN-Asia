import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, GRAY_COLOR } from "config";
import tw from "twin.macro";

export const BoxCardWrapper = styled.div`
  ${tw`rounded-2xl bg-white cursor-pointer pt-4`}
  &:hover {
    .image-wrapper {
      img {
        transform: scale(1.05);
      }
    }
  }
  .image-wrapper {
    ${tw`rounded-xl mx-4 mb-4 overflow-hidden`}
    img {
      ${tw`rounded-xl w-full h-60`}
      transition: 0.3s all;
    }
  }
  .box-card-info {
    padding: 0 1rem;
    ${FLEX_STYLE("space-between", "center")};
    .box-card-list {
      li {
        padding: 0.3rem;
        cursor: pointer;
        .count {
          margin: 0 0.3rem;
        }
        .anticon {
          font-size: 1.2rem;
        }
        &:hover {
          background: ${GRAY_COLOR};
          border-radius: 5px;
        }
      }
    }
  }
  h2 {
    padding: 1rem;
    ${FONT_STYLE(0.93, false)};
  }
`;
