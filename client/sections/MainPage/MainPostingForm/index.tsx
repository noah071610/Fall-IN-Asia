import { EditOutlined } from "@ant-design/icons";
import EditorWithoutImage from "@components/PostingEditor/EditorWithoutImage";
import ImageDragger from "@components/PostingEditor/ImageDragger";
import useInput from "@hooks/useInput";
import React, { FC, useCallback, useState } from "react";
import { MainPostingFormWrapper } from "./styles";

interface IProps {}

const MainPostingForm: FC<IProps> = () => {
  const [upImg, setUpImg] = useState<File[]>([]);
  const [content, setContent] = useState("");
  const [onPostingForm, setOnPostingForm] = useState(false);
  const onClickOpenPostingForm = useCallback(() => {
    setOnPostingForm(true);
  }, []);
  const onClickPostingCancle = useCallback(() => {
    setOnPostingForm(false);
  }, []);
  return (
    <MainPostingFormWrapper>
      {!onPostingForm && (
        <div onClick={onClickOpenPostingForm} className="posting-form-preview">
          <span className="placeholder">당신의 여행은 어땠나요?</span>
          <a>
            <EditOutlined />
          </a>
        </div>
      )}
      {onPostingForm && (
        <>
          <div className="posting-editor">
            <EditorWithoutImage content={content} setContent={setContent} />
            <ImageDragger setUpImg={setUpImg} />
            <div className="editor-btn-wrapper">
              <button>게시물 올리기</button>
              <button onClick={onClickPostingCancle}>취소</button>
            </div>
          </div>
        </>
      )}
    </MainPostingFormWrapper>
  );
};

export default MainPostingForm;
