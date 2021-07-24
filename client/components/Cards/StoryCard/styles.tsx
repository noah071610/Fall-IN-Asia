import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, GRAY_COLOR, WHITE_COLOR, WHITE_STYLE } from "config";

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
    position: relative;
    img {
      transition: 0.3s all;
      border-radius: 10px;
      width: 100%;
      height: 250px;
    }
    .like-comment-list {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      background: ${WHITE_COLOR};
      padding: 0.25rem 0.5rem;
      opacity: 0.5;
      border-radius: 10px;
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

  .story-info {
    ${FLEX_STYLE("flex-start", "flex-end")};
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
    padding-bottom: 1rem;
  }
`;
