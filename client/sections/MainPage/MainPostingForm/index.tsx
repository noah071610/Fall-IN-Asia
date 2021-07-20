import { EditOutlined } from "@ant-design/icons";
import EditorWithoutImage from "@components/PostingEditor/EditorWithoutImage";
import ImageDragger from "@components/PostingEditor/ImageDragger";
import useInput from "@hooks/useInput";
import { mainPostCreateAction } from "actions/mainPost";
import { Select } from "antd";
import { toastErrorMessage } from "config";
import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { MainPostingFormWrapper } from "./styles";
const { Option } = Select;
interface IProps {}

const MainPostingForm: FC<IProps> = () => {
  const dispatch = useDispatch();
  const [upImg, setUpImg] = useState<File[]>([]);
  const [content, setContent] = useState("");
  const [type, setType] = useState("키워드 선택");
  const [onPostingForm, setOnPostingForm] = useState(false);
  const onClickOpenPostingForm = useCallback(() => {
    setOnPostingForm(true);
  }, []);
  const onClickPostingCancle = useCallback(() => {
    setOnPostingForm(false);
  }, []);

  const onClickSubmit = useCallback(() => {
    if (type === "키워드 선택") {
      toastErrorMessage("키워드를 선택해주세요.");
      return;
    }
    if (!content) {
      toastErrorMessage("내용을 작성해주세요.");
      return;
    }
    let form = new FormData();
    upImg?.forEach((v) => {
      form.append("image", v);
    });
    form.append("content", String(content));
    form.append("type", String(type));
    form.append("code", String("KOR"));
    dispatch(mainPostCreateAction(form));
  }, [upImg, content, type]);
  function handleChange(value: string) {
    setType(value);
  }
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
            <div className="type-selector">
              <Select value={type} onChange={handleChange} style={{ width: "150px" }}>
                <Option value="관광지">관광지</Option>
                <Option value="음식">음식</Option>
                <Option value="숙박">숙박</Option>
                <Option value="사기경보">사기경보</Option>
              </Select>
            </div>
            <EditorWithoutImage content={content} setContent={setContent} />
            <ImageDragger setUpImg={setUpImg} />
            <div className="editor-btn-wrapper">
              <button onClick={onClickSubmit}>게시물 올리기</button>
              <button onClick={onClickPostingCancle}>취소</button>
            </div>
          </div>
        </>
      )}
    </MainPostingFormWrapper>
  );
};

export default MainPostingForm;
