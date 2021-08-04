import React, { FC } from "react";
import styled from "@emotion/styled";
import { GRAY_COLOR, LG_SIZE } from "config";
import tw from "twin.macro";
const Wrapper = styled.div`
  ${tw`pt-16`}
  background-color: ${GRAY_COLOR};
  .layout {
    width: ${LG_SIZE};
    ${tw`mx-auto py-8`}
    .main-title {
      ${tw`text-base font-bold mt-8 mb-4`}
    }
    .main-title:first-of-type {
      ${tw`mt-0 mb-4`}
    }
    @media (max-width: ${LG_SIZE}) {
      ${tw`w-full px-4 pt-8 pb-16`}
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
