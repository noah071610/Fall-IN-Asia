import React, { FC } from "react";
import { BLACK_COLOR, GRAY_COLOR, quillModules, qullFormats } from "config";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { memo } from "react";

const EditorWrapper = styled.div`
  margin-bottom: 2rem;
  button {
    &:hover {
      border-radius: 5px;
      background: ${GRAY_COLOR};
    }
  }
`;

const QuillEditor = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>에디터 불러오는중 ...</p>,
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
