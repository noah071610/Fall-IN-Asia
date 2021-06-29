import React, { FC, useState } from "react";
import ClubLayout from "@sections/ClubLayout";
import ClubPostTitle from "@sections/ClubPostPage/ClubPostTitle";
import ClubPostContent from "@sections/ClubPostPage/ClubPostContent";
import CommentForm from "@components/CommentForm/";
import Comment from "@components/Comment";
import styled from "@emotion/styled";

const CommentsWrapper = styled.div`
  margin: 0 2rem 4rem 2rem;
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
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </CommentsWrapper>
    </ClubLayout>
  );
};

export default ClubPost;
