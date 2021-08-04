import { FC, RefObject } from "react";
import styled from "@emotion/styled/macro";
import { GRID_STYLE, LG_SIZE, XLG_SIZE } from "config";
import tw from "twin.macro";
import PostAsideNav from "@components/Post/PostAsideNav";
const PostLayoutWrapper = styled.div`
  width: ${XLG_SIZE};
  ${tw`mx-auto p-8`};
  ${GRID_STYLE("2rem", "4fr 1fr")};
  .layout {
    .main-title {
      ${tw`text-center mt-12 mb-6 text-lg font-bold`};
      span {
        ${tw`block text-sm mt-2`};
      }
    }
    .main-title:first-of-type {
      ${tw`mt-0 mb-6`}
    }
  }
  @media (max-width: ${LG_SIZE}) {
    ${tw`block w-full p-2`}
  }
`;

interface IProps {
  postRef?: RefObject<HTMLDivElement> | null;
}

const PostLayout: FC<IProps> = ({ postRef, children }) => {
  return (
    <PostLayoutWrapper>
      <div ref={postRef} className="layout">
        {children}
      </div>
      <PostAsideNav />
    </PostLayoutWrapper>
  );
};

export default PostLayout;
