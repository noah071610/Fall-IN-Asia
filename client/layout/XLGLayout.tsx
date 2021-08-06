import { FC, RefObject } from "react";
import styled from "@emotion/styled/macro";
import { XLG_SIZE } from "config";
import tw from "twin.macro";
const XLGLayoutWrapper = styled.div`
  width: ${XLG_SIZE};
  ${tw`mx-auto py-8`};
  .main-title {
    ${tw`text-lg font-bold mt-12 mb-6`};
    span {
      ${tw`block text-sm mt-2`};
    }
  }
  .main-title:first-of-type {
    ${tw`mt-0 mb-6`}
  }
  @media (max-width: 1300px) {
    ${tw`w-full px-2`}
  }
`;

interface XLGLayoutProps {
  postRef?: RefObject<HTMLDivElement> | null;
}

const XLGLayout: FC<XLGLayoutProps> = ({ postRef, children }) => {
  return <XLGLayoutWrapper ref={postRef}>{children}</XLGLayoutWrapper>;
};

export default XLGLayout;
