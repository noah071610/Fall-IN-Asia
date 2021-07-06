import React, { FC, useCallback, useEffect, useState } from "react";
import { PostingEditorWrapper } from "./styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Button, Input } from "antd";
import { quillModules, qullFormats, toastErrorMessage } from "config";
import router from "next/router";
import useInput from "@hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { clubPostCreateAction, clubPostEditAction } from "actions/club";
import { IPostForm } from "@typings/db";

const QuillEditor = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

interface IProps {
  isEdit: boolean;
  groupData: any;
}

const PostingEditor: FC<IProps> = ({ isEdit, groupData }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const { user } = useSelector((state: RootState) => state.user);
  const { editPost } = useSelector((state: RootState) => state.club);

  useEffect(() => {
    if (!user) {
      router.push("/");
      return;
    }
    if (isEdit) {
      setTitle(editPost.title);
      setContent(editPost.content);
    }
  }, []);

  const onChangeEditor = (content: string) => {
    setContent(content);
  };

  const onClickGoback = useCallback(() => {
    router.back();
  }, []);

  const onClickSubmit = useCallback(() => {
    if (title === "" || !title?.trim()) {
      toastErrorMessage("タイトルを作成してください");
      return;
    }
    if (content === "" || !content?.trim()) {
      toastErrorMessage("内容を作成してください");
      return;
    }
    if (!user) {
      router.back();
      return;
    }
    let form: IPostForm = {
      title,
      postId: editPost?.id,
      groupId: groupData?.id,
      key_name: groupData?.key_name,
      content,
      userId: user?.id,
    };
    if (isEdit) {
      dispatch(clubPostEditAction(form));
    } else {
      dispatch(clubPostCreateAction(form));
      setTitle("");
      setContent("");
    }
  }, [title, content, user?.id, groupData?.id, isEdit, editPost?.id]);
  return (
    <PostingEditorWrapper>
      <h2>タイトル</h2>
      <Input onChange={onChangeTitle} value={title} />
      <h2>ポスト作成</h2>
      <QuillEditor
        style={{ height: "450px" }}
        theme="snow"
        modules={quillModules}
        formats={qullFormats}
        value={content || ""}
        onChange={(content, delta, source, editor) => onChangeEditor(editor.getHTML())}
      />
      <div className="post-submit">
        <Button onClick={onClickGoback}>以前のページ</Button>
        <Button onClick={onClickSubmit} type="primary">
          {isEdit ? "修正" : "投稿"}
        </Button>
      </div>
    </PostingEditorWrapper>
  );
};

export default PostingEditor;
