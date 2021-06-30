import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THICK, BORDER_THIN, FLEX_STYLE } from "config";

const CommonTitleWrapper = styled.div`
  ${FLEX_STYLE("space-between", "center")};
  ${BORDER_THICK("border-bottom")};
  .title-name {
    ${FLEX_STYLE("flex-start", "center")};
    h2 {
      font-weight: bold;
      font-size: 1.5rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
      border-bottom: 5px solid ${BLUE_COLOR};
      .point {
        margin-right: 0.5rem;
      }
    }
    .title-desc {
      ${BORDER_THIN("border-left")};
      padding-left: 1rem;
      margin-bottom: 1rem;
    }
  }
  button {
    margin-bottom: 1rem;
  }
`;
interface IProps {
  title: string;
  subtitle?: string;
  point?: string;
}

const CommonTitle: FC<IProps> = ({ point, title, subtitle, children }) => {
  const [state, setstate] = useState();
  return (
    <CommonTitleWrapper>
      <div className="title-name">
        <h2>
          <span className="point">{point}</span>
          {title}
        </h2>
        <span className="title-desc">{subtitle}</span>
      </div>
      <div className="title-button">{children}</div>
    </CommonTitleWrapper>
  );
};

export default CommonTitle;
