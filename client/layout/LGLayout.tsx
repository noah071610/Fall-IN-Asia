import React, { FC, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { FONT_STYLE, GRAY_COLOR, LG_SIZE } from "config";
import tw from "twin.macro";
const Wrapper = styled.div`
  background-color: ${GRAY_COLOR};
  .layout {
    width: ${LG_SIZE};
    ${tw`mx-auto py-8`}
    .main-title {
      ${FONT_STYLE(1, true)}
      ${tw`mt-8 mb-4`}
    }
    .main-title:first-of-type {
      ${tw`mt-0 mb-4`}
    }
  }
`;

interface LGLayout {}

const LGLayout: FC<LGLayout> = ({ children }) => {
  return (
    <Wrapper>
      <div className="layout">{children}</div>
    </Wrapper>
  );
};

export default LGLayout;
