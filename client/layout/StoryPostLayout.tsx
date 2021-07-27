import { FC, RefObject } from "react";
import styled from "@emotion/styled/macro";
import { FONT_STYLE, GRID_STYLE, XLG_SIZE } from "config";
import tw from "twin.macro";
import StoryPostAside from "@sections/StoryPage/StoryPostAside";
const StoryPostLayoutWrapper = styled.div`
  width: ${XLG_SIZE};
  ${tw`mx-auto p-8`};
  ${GRID_STYLE("2rem", "4fr 1fr")};
  .layout {
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
  }
`;

interface StoryPostLayoutProps {
  postRef?: RefObject<HTMLDivElement> | null;
}

const StoryPostLayout: FC<StoryPostLayoutProps> = ({ postRef, children }) => {
  return (
    <StoryPostLayoutWrapper>
      <div ref={postRef} className="layout">
        {children}
      </div>
      <StoryPostAside />
    </StoryPostLayoutWrapper>
  );
};

export default StoryPostLayout;
