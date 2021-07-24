import React, { FC, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { FONT_STYLE, XLG_SIZE } from "config";
const Wrapper = styled.div`
  .layout {
    width: ${XLG_SIZE};
    margin: 0 auto;
    padding: 2rem;
  }
`;

interface XLG_LayoutProps {}

const XLG_Layout: FC<XLG_LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <div className="layout">{children}</div>
    </Wrapper>
  );
};

export default XLG_Layout;
