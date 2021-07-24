import styled from "@emotion/styled";
import { imageHandler, quillSetting } from "config";
import React, { FC, useEffect, useRef } from "react";
import { memo } from "react";

const EditorWrapper = styled.div`
  .ql-editor {
    height: 450px;
    padding: 1rem;
    img {
      width: 50%;
    }
  }
`;

interface IProps {
  setContent: (value: string) => void;
  prevContent?: string;
  isStory?: boolean;
}

const Editor: FC<IProps> = ({ setContent, prevContent, isStory }) => {
  const Quill = typeof window == "object" ? require("quill") : () => false;
  const quillElement = useRef<any>(null);
  const quillInstance = useRef<any>(null);

  useEffect(() => {
    if (quillElement?.current) {
      quillInstance.current = new Quill(quillElement?.current, quillSetting(false));
    }

    const quill = quillInstance?.current;

    if (prevContent) {
      quill.root.innerHTML = prevContent;
    }
    quill?.on("text-change", () => {
      onChangeEditor(quill?.root.innerHTML);
    });

    const toolbar = quill?.getModule("toolbar");
    toolbar.addHandler("image", () => imageHandler(quillInstance, isStory));
  }, []);

  const onChangeEditor = (content: string) => {
    setContent(content);
  };

  return (
    <EditorWrapper>
      <div ref={quillElement} />
    </EditorWrapper>
  );
};

export default memo(Editor);
