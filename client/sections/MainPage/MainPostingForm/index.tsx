import { EditOutlined } from "@ant-design/icons";
import EditorWithoutImage from "@components/PostingEditor/EditorWithoutImage";
import ImageDragger from "@components/PostingEditor/ImageDragger";
import useInput from "@hooks/useInput";
import { mainPostCreateAction, mainPostEditAction } from "actions/mainPost";
import { Select } from "antd";
import { toastErrorMessage } from "config";
import React, { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainPostingFormWrapper } from "./styles";
import router, { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { ICountry, IMainPost } from "@typings/db";
import AutoCompleteSearch from "@components/AutoCompleteSearch";
import { RootState } from "slices";
const { Option, OptGroup } = Select;
interface IProps {
  editPost?: IMainPost;
}

const MainPostingForm: FC<IProps> = ({ editPost }) => {
  const { data: countries } = useSWR<ICountry[]>("/country", fetcher);

  const { query } = useRouter();
  const dispatch = useDispatch();
  const [upImg, setUpImg] = useState<File[]>([]);
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [type, setType] = useState("키워드 선택");
  const [selectedCountry, setCountry] = useState("");
  const [onPostingForm, setOnPostingForm] = useState(false);
  const { mainPostCreateDone, mainPostEditDone } = useSelector(
    (state: RootState) => state.mainPost
  );
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (mainPostCreateDone) {
      setContent("");
      setUpImg([]);
      setType("키워드 선택");
      setOnPostingForm(false);
    }
  }, [mainPostCreateDone]);
  useEffect(() => {
    if (mainPostEditDone) {
      setContent("");
      setUpImg([]);
      setType("키워드 선택");
      setOnPostingForm(false);
    }
  }, [mainPostEditDone]);

  useEffect(() => {
    if (editPost) {
      setIsEdit(true);
      setContent(editPost?.content);
      setType(editPost?.type);
      setCountry(editPost?.country?.name);
    }
  }, [editPost]);
  const countryOptions = useMemo(
    () =>
      countries?.map((v, i) => {
        console.log("reva");
        return { value: v.name, code: v.code };
      }),
    [countries]
  );
  useEffect(() => {
    if (query?.code && countryOptions) {
      let pickCountry = countryOptions?.find((v) => v.code === query?.code);
      setCountry(pickCountry?.value as string);
    }
  }, [query, countryOptions]);

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

    let pickCountry = countryOptions?.find((v) => v.value === selectedCountry);
    if (pickCountry) {
      form.append("code", String(pickCountry.code));
    } else {
      toastErrorMessage("유효하지 않은 국가입니다. 다시 확인해주세요.");
      return;
    }
    if (isEdit) {
      form.append("mainPostId", String(editPost?.id));
      dispatch(mainPostEditAction(form));
    } else {
      dispatch(mainPostCreateAction(form));
    }
  }, [upImg, content, type, selectedCountry, isEdit, editPost]);

  const onClickOpenPostingForm = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    setOnPostingForm(true);
  }, [user]);
  const onClickPostingCancle = useCallback(() => {
    if (isEdit) {
      router.back();
    } else {
      setOnPostingForm(false);
    }
  }, [isEdit]);

  const handleTypeChange = useCallback((value: string) => {
    setType(value);
  }, []);

  return (
    <MainPostingFormWrapper>
      {!onPostingForm && !isEdit && (
        <div onClick={onClickOpenPostingForm} className="posting-form-preview">
          <span className="placeholder">당신의 여행은 어땠나요?</span>
          <a>
            <EditOutlined />
          </a>
        </div>
      )}
      {(onPostingForm || isEdit) && (
        <>
          <div className="posting-editor">
            <div className="selector-wrapper">
              <AutoCompleteSearch
                countryOptions={countryOptions}
                selectedCountry={selectedCountry}
                setCountry={setCountry}
                disabled={isEdit ? true : false}
              />
              <Select
                className="type-selector"
                value={type}
                disabled={isEdit ? true : false}
                onChange={handleTypeChange}
                style={{ width: "150px" }}
              >
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

export default memo(MainPostingForm);
