import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, RGB_BLACK, SKY_COLOR, WHITE_COLOR } from "config";

export const LessonSectionWrapper = styled.div`
  ${FLEX_STYLE("flex-start", "flex-start")};
  margin-top: 2rem;
  padding: 1rem;
  ${BORDER_THIN("border")};
  aside {
    width: 20%;
    ${BORDER_THIN("border")};
    border-radius: 5px;
    position: sticky;
    top: 70px;
    .lesson-type {
      padding: 1rem;
      background: ${SKY_COLOR};
      cursor: pointer;
      ${FLEX_STYLE("space-between", "center")};
      ${BORDER_THIN("border-bottom", 4)};
      h3 {
        color: ${WHITE_COLOR};
      }
      .anticon {
        color: ${WHITE_COLOR};
      }
    }
    .lesson-list {
      overflow: hidden;
      ul {
        li {
          display: block;
          padding: 1rem;
          cursor: pointer;
          &:hover {
            background: ${RGB_BLACK(0.05)};
          }
        }
      }
    }
  }
  .lesson-card-wrapper {
    padding-left: 1rem;
    width: 80%;
  }
`;
