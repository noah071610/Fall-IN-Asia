import React, { FC } from "react";
import { GRAY_COLOR, quillModules, qullFormats } from "config";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { memo } from "react";

const EditorWrapper = styled.div`
  margin-bottom: 2rem;
  .ql-container {
    height: 250px;
  }
  button {
    &:hover {
      border-radius: 5px;
      background: ${GRAY_COLOR};
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
        modules={quillModules(true)}
        formats={qullFormats}
        value={content || ""}
        onChange={(content, delta, source, editor) => onChangeEditor(editor.getHTML())}
      />
    </EditorWrapper>
  );
};

export default memo(EditorWithoutImage);
