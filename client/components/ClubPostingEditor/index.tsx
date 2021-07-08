import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { PostingEditorWrapper } from "./styles";
import { Button, Input } from "antd";
import { imageHandler, quillSetting, toastErrorMessage } from "config";
import router from "next/router";
import useInput from "@hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { clubPostCreateAction, clubPostEditAction } from "actions/club";
import { IPostForm } from "@typings/db";
import "react-quill/dist/quill.snow.css";

interface IProps {
  isEdit: boolean;
  groupData?: any;
}

const PostingEditor: FC<IProps> = ({ isEdit, groupData }) => {
  const Quill = typeof window == "object" ? require("quill") : () => false;
  const dispatch = useDispatch();
  const quillElement = useRef<any>(null);
  const quillInstance = useRef<any>(null);
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, setContent] = useState("");
  const { user } = useSelector((state: RootState) => state.user);
  const { editPost } = useSelector((state: RootState) => state.club);

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

  useEffect(() => {
    if (quillElement?.current) {
      quillInstance.current = new Quill(quillElement?.current, quillSetting(false));
    }
    if (isEdit) {
      setTitle(editPost?.title);
      if (quillInstance.current) {
        quillInstance.current.root.innerHTML = editPost?.content;
      }
    }

    const quill = quillInstance?.current;

    quill?.on("text-change", () => {
      onChangeEditor(quill?.root.innerHTML);
    });

    const toolbar = quill?.getModule("toolbar");
    toolbar.addHandler("image", () => imageHandler(quillInstance));
  }, [editPost]);

  return (
    <PostingEditorWrapper>
      <h2>タイトル</h2>
      <Input onChange={onChangeTitle} value={title} />
      <h2>ポスト作成</h2>
      <div ref={quillElement} />
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
