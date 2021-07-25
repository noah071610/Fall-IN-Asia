import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, WHITE_COLOR } from "config";

export const StoryMainPosterWrapper = styled.div`
  position: relative;
  .story-thumbnail {
    ${FLEX_STYLE("center", "center")};
    padding-bottom: 10%;
    height: calc(100vh - 63px);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: bottom 100%;
    background-size: 100% 100%;
    .story-title {
      backgroud: rgba(255, 255, 255, 0.5);
      position: relative;
      ${FLEX_STYLE("center", "center")};
      flex-direction: column;
      width: 100%;
      padding: 5rem 0;
      border-radius: 15px;
      .overlay {
        width: 100%;
        opacity: 0.6;
        cursor: default;
      }
      .name-space-wrapper {
        z-index: 1;
      }
      .user-info,
      .date {
        color: ${WHITE_COLOR};
      }
      h1 {
        ${FONT_STYLE(2.5, true, WHITE_COLOR)};
        z-index: 1;
        margin-bottom: 2rem;
      }
    }
  }
  .scroll-down-btn {
    cursor: pointer;
    width: 100%;
    position: absolute;
    height: 250px;
    left: 0;
    bottom: 0;
    ${FLEX_STYLE("center", "flex-start")};
    a {
      animation: fadeOutDown 2.7s infinite;
      .anticon {
        transform: rotate(90deg);
        color: ${WHITE_COLOR};
        font-size: 120px;
        opacity: 0.5;
      }
    }
  }
`;
