import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { Button, Input, Upload } from "antd";
import router from "next/router";
import { FLEX_STYLE } from "config";

export const PostingLayoutWrapper = styled.div`
  h3 {
    margin: 2rem 0 1rem 0;
    font-weight: bold;
  }

  .submit-btn-wrapper {
    margin: 5rem 0 3rem 0;
    ${FLEX_STYLE("flex-end", "center")};
    .ant-btn {
      width: 20%;
      height: 2.5rem;
    }
  }
`;
interface IProps {
  title: string;
  onChangeTitle: () => void;
  onClickSubmit: () => void;
}

const PostingLayout: FC<IProps> = ({ children, title, onChangeTitle, onClickSubmit }) => {
  return (
    <PostingLayoutWrapper>
      <h3>タイトル作成</h3>
      <Input placeholder="タイトル入力" value={title} onChange={onChangeTitle} />
      {children}
      <div className="submit-btn-wrapper">
        <Button
          onClick={() => {
            router.back();
          }}
        >
          以前のページ
        </Button>
        <Button onClick={onClickSubmit} type="primary">
          投稿
        </Button>
      </div>
    </PostingLayoutWrapper>
  );
};

export default PostingLayout;
