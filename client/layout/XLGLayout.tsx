import { FC, RefObject } from "react";
import styled from "@emotion/styled/macro";
import { FONT_STYLE, XLG_SIZE } from "config";
import tw from "twin.macro";
const XLGLayoutWrapper = styled.div`
  .layout {
    width: ${XLG_SIZE};
    ${tw`mx-auto p-8`};
  }
  .main-title {
    ${tw`text-center mt-12 mb-6`};
    ${FONT_STYLE(1.1, true)}
    span {
      ${tw`block text-sm mt-2`};
    }
  }
  .main-title:first-of-type {
    ${tw`mt-0 mb-6`}
  }
`;

interface XLGLayoutProps {
  postRef?: RefObject<HTMLDivElement> | null;
}

const XLGLayout: FC<XLGLayoutProps> = ({ postRef, children }) => {
  return (
    <XLGLayoutWrapper>
      <div ref={postRef} className="layout">
        {children}
      </div>
    </XLGLayoutWrapper>
  );
};

export default XLGLayout;
