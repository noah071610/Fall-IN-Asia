import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { BLUE_COLOR, FLEX_STYLE, RGB_BLACK } from "config";
import { Divider } from "antd";

const CommonTitleWrapper = styled.div`
  ${FLEX_STYLE("space-between", "center")};
  border-bottom: 2px solid ${RGB_BLACK("0.1")};
  .title-name {
    ${FLEX_STYLE("flex-start", "center")};
    h2 {
      font-weight: bold;
      font-size: 1.5rem;
      margin-right: 1rem;
      padding-bottom: 1rem;
      border-bottom: 5px solid ${BLUE_COLOR};
      .point {
        margin-right: 0.5rem;
      }
    }
    .title-desc {
      border-left: 1px solid ${RGB_BLACK("0.1")};
      padding-left: 1rem;
      margin-bottom: 1rem;
    }
  }

  .title-buttons {
    button {
      margin-left: 0.7rem;
      &:hover {
        color: ${BLUE_COLOR};
      }
    }
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
      <div className="title-buttons">{children}</div>
    </CommonTitleWrapper>
  );
};

export default CommonTitle;
