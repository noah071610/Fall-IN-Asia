import React, { FC, useState } from "react";
import { BLACK_COLOR, GRAY_COLOR, HOVER_GRAY, quillModules, qullFormats, RGB_BLACK } from "config";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

const EditorWrapper = styled.div`
  height: 250px;
  margin-bottom: 4rem;
  .ql-toolbar {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: none;
    border: 1px solid ${RGB_BLACK(0.15)};
  }
  .ql-container {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid ${RGB_BLACK(0.15)};
  }
  button {
    &:hover {
      border-radius: 5px;
      background: ${GRAY_COLOR};
      color: ${BLACK_COLOR};
    }
  }
`;

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
    <EditorWrapper>
      <QuillEditor
        style={{ height: "100%" }}
        modules={quillModules(true)}
        formats={qullFormats}
        value={content || ""}
        onChange={(content, delta, source, editor) => onChangeEditor(editor.getHTML())}
      />
    </EditorWrapper>
  );
};

export default EditorWithoutImage;
