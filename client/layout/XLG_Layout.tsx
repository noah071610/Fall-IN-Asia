import { FC, RefObject } from "react";
import styled from "@emotion/styled/macro";
import { FONT_STYLE, XLG_SIZE } from "config";
import tw from "twin.macro";
const Wrapper = styled.div`
  .layout {
    width: ${XLG_SIZE};
    ${tw`mx-auto p-8`};
  }
  .main-title {
    ${tw`text-center mt-12 mb-6`};
    ${FONT_STYLE(1.3, true)}
  }
`;

interface XLG_LayoutProps {
  postRef: RefObject<HTMLDivElement> | null;
}

const XLG_Layout: FC<XLG_LayoutProps> = ({ postRef, children }) => {
  return (
    <Wrapper>
      <div ref={postRef} className="layout">
        {children}
      </div>
    </Wrapper>
  );
};

export default XLG_Layout;
