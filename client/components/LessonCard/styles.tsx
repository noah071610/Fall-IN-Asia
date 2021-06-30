import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRID_STYLE } from "config";

export const LessonCardWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
`;

export const CardMainContent = styled.div`
  ${FLEX_STYLE("flex-start", "center")};
  img {
    border-radius: 50%;
    width: 7rem;
  }
  .lesson-desc {
    padding-left: 2rem;
    a {
      font-size: 1rem;
      font-weight: bold;
    }
    h4 {
      margin: 0.5rem 0 0.3rem 0;
    }
    .ant-rate {
      span {
        font-size: 1rem;
      }
    }
    p {
      ${FLEX_STYLE("flex-start", "center")};
      margin-top: 0.5rem;
      .anticon {
        font-size: 1.5rem;
        margin-right: 0.7rem;
      }
      .name {
        font-weight: bold;
        margin-right: 0.5rem;
      }
    }
  }
`;

export const CardBtn = styled.div`
  ${GRID_STYLE("1rem", "repeat(2,1fr)")};
  margin-top: 1.5rem;
  button {
    padding: 1rem 0;
    width: 100%;
    ${BORDER_THIN("border")};
    &:hover {
      border: 1px solid ${BLUE_COLOR};
    }
  }
`;
