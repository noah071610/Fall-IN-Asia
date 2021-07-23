import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, GRAY_COLOR } from "config";

export const StoryCardWrapper = styled.div`
  cursor: pointer;
  padding: 1rem 0;
  display: flex;
  &:hover {
    .image-wrapper {
      img {
        transform: scale(1.05);
      }
    }
  }
  .image-wrapper {
    border-radius: 10px;
    overflow: hidden;
    width: 40%;
    img {
      transition: 0.3s all;
      border-radius: 10px;
      width: 100%;
      height: 250px;
    }
  }

  .story-info {
    ${FLEX_STYLE("flex-start", "center")};
    ul {
      margin-left: 1rem;
      li {
        padding: 0.3rem;
        cursor: pointer;
        .count {
          margin: 0 0.3rem;
        }
        .anticon {
          font-size: 1.2rem;
        }
      }
    }
  }
  .story-content {
    padding: 1rem 0;
    line-height: 1.7;
  }
  .story-main {
    padding-left: 2rem;
    width: 60%;
  }
  h2 {
    ${FONT_STYLE(1.2, true)};
    padding-bottom: 0.5rem;
  }
`;
