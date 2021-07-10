import React, { FC, useState } from "react";
import { quillModules, qullFormats } from "config";
import dynamic from "next/dynamic";
const QuillEditor = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

interface IProps {
  content: string;
  setContent: (content: string) => void;
}

const EditorWithoutImage: FC<IProps> = ({ content, setContent }) => {
  const onChangeEditor = (content: string) => {
    setContent(content);
  };
  return (
    <div>
      <h3>内容作成</h3>
      <QuillEditor
        style={{ height: "350px" }}
        modules={quillModules(true)}
        formats={qullFormats}
        value={content || ""}
        onChange={(content, delta, source, editor) => onChangeEditor(editor.getHTML())}
      />
    </div>
  );
};

export default EditorWithoutImage;
