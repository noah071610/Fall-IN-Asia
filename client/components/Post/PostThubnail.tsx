import NameSpace from "@components/NameSpace";
import { IArticle, IStory } from "@typings/db";
import { Divider } from "antd";
import React, { FC, memo } from "react";
import styled from "@emotion/styled";
import { FLEX_STYLE, NO_IMAGE_URL, SM_SIZE } from "config";
import tw from "twin.macro";

export const PostThubnailWrapper = styled.section`
  ${FLEX_STYLE("center", "center", "column")};
  ${tw`mb-16`}
  .thumbnail {
    ${tw`mt-8 w-3/4`}
  }
  .story-title {
    ${FLEX_STYLE("center", "center", "column")};
    ${tw`my-8`}
    h1 {
      ${tw`mb-8 font-bold leading-10 text-center`}
    }
  }
  @media (max-width: ${SM_SIZE}) {
    .story-title {
      ${tw`my-4`}
      h1 {
        ${tw`text-xl mb-4`}
      }
    }
    .thumbnail {
      ${tw`w-full`}
    }
  }
`;
interface IProps {
  story?: IStory;
  article?: IArticle;
}

const PostThubnail: FC<IProps> = ({ story, article }) => {
  return (
    <PostThubnailWrapper>
      <div className="story-title">
        <h1>{(story || article)?.title}</h1>
        <NameSpace date={(story || article)?.createdAt!} user={(story || article)?.user!} />
      </div>
      <Divider />
      <img
        className="thumbnail"
        src={
          story?.thumbnail || article?.thumbnail
            ? (story || article)?.thumbnail.replace(/\/thumb\//, "/original/")
            : NO_IMAGE_URL
        }
      />
    </PostThubnailWrapper>
  );
};

export default memo(PostThubnail);
