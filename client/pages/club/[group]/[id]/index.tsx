import React, { FC, useState } from "react";
import ClubLayout from "@sections/ClubLayout";
import ClubPostTitle from "@sections/ClubPostPage/ClubPostTitle";
import ClubPostContent from "@sections/ClubPostPage/ClubPostContent";
import CommentForm from "@components/CommentForm/";
import Comment from "@components/Comment";
import styled from "@emotion/styled";
import { RGB_BLACK } from "config";

const CommentsWrapper = styled.div`
  padding: 1rem;
  margin: 0 2rem;
  border-top: 2px solid ${RGB_BLACK("0.1")};
`;

interface IProps {}

const ClubPost: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <ClubLayout>
      <ClubPostTitle />
      <ClubPostContent />
      <CommentForm />
      <CommentsWrapper>
        <Comment />
      </CommentsWrapper>
    </ClubLayout>
  );
};

export default ClubPost;
