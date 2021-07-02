import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";

export const CommonSocialListWrapper = styled.div`
  ${FLEX_STYLE("center", "center")};
  .icon-wrapper {
    margin: 0 0.2rem;
  }
`;
interface IProps {}

const CommonSocialList: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <CommonSocialListWrapper>
      <a className="icon-wrapper">
        <img src="https://img.icons8.com/color/32/000000/google-logo.png" alt="social_icon" />
      </a>
      <a className="icon-wrapper">
        <img src="https://img.icons8.com/color/36/000000/line-me.png" alt="social_icon" />
      </a>
      <a className="icon-wrapper">
        <img src="https://img.icons8.com/doodle/30/000000/yahoo--v1.png" alt="social_icon" />
      </a>
    </CommonSocialListWrapper>
  );
};

export default CommonSocialList;
