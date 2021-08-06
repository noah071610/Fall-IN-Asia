import { EditOutlined } from "@ant-design/icons";
import ImageDragger from "@components/Editor/ImageDragger";
import { Select } from "antd";
import { noRevalidate, toastErrorMessage, toastSuccessMessage } from "config";
import React, { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { MomentPostingFormWrapper } from "./styles";
import router, { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { ICountry, IMoment } from "@typings/db";
import AutoCompleteForm from "@components/AutoCompleteForm";
import { RootState } from "slices";
import dynamic from "next/dynamic";
import axios from "axios";
const { Option } = Select;

const EditorWithoutImage = dynamic(import("@components/Editor/EditorWithoutImage"));

interface IProps {
  editMoment?: IMoment;
}

const MomentPostingForm: FC<IProps> = ({ editMoment }) => {
  const { query } = useRouter();
  const { data: countries } = useSWR<ICountry[]>("/country", fetcher, noRevalidate);
  const [upImg, setUpImg] = useState<File[]>([]);
  const [content, setContent] = useState("");
  const [type, setType] = useState("키워드 선택");
  const [selectedCountry, setCountry] = useState("");
  const [onPostingForm, setOnPostingForm] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (editMoment) {
      setContent(editMoment?.content);
      setType(editMoment?.type);
      setCountry(editMoment?.country?.name);
    }
  }, [editMoment]);

  const countryOptions = useMemo(
    () =>
      countries?.map((v, i) => {
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
    let form: FormData = new FormData();
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
    if (editMoment) {
      form.append("momentId", String(editMoment?.id));
    }
    axios
      .post(`/moment/${editMoment && "edit"}`, form)
      .then((res) => {
        const { momentId } = res.data.data;
        router.push(`/country/${pickCountry?.code}/${momentId}`);
        setContent("");
        setUpImg([]);
        setType("키워드 선택");
        setOnPostingForm(false);
        if (editMoment) {
          toastSuccessMessage("모멘트를 수정했습니다.");
        } else {
          toastSuccessMessage("모멘트를 성공적으로 작성했습니다.");
        }
      })
      .catch((error) => {
        toastErrorMessage(error);
        throw error;
      });
  }, [upImg, content, type, selectedCountry, editMoment]);

  const onClickOpenPostingForm = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    setOnPostingForm(true);
  }, [user]);

  const onClickPostingCancle = useCallback(() => {
    if (editMoment) {
      router.back();
    } else {
      setOnPostingForm(false);
    }
  }, [editMoment]);

  const handleTypeChange = useCallback((value: string) => {
    setType(value);
  }, []);

  return (
    <MomentPostingFormWrapper>
      {!onPostingForm && !editMoment && (
        <div onClick={onClickOpenPostingForm} className="posting-form-preview">
          <span className="placeholder">당신의 여행은 어땠나요?</span>
          <a>
            <EditOutlined />
          </a>
        </div>
      )}
      {(onPostingForm || editMoment) && (
        <>
          <div className="posting-editor">
            <div className="selector-wrapper">
              <AutoCompleteForm
                countryOptions={countryOptions}
                selectedCountry={selectedCountry}
                setCountry={setCountry}
                disabled={editMoment ? true : false}
              />
              <Select
                className="type-selector"
                value={type}
                disabled={editMoment ? true : false}
                onChange={handleTypeChange}
                style={{ width: "180px" }}
              >
                <Option value="한인 커뮤니티">한인 커뮤니티</Option>
                <Option value="여행정보 공유">여행정보 공유</Option>
                <Option value="사기 경보">사기 경보</Option>
                <Option value="동행자 모집">동행자 모집</Option>
              </Select>
            </div>
            <EditorWithoutImage content={content} setContent={setContent} />
            <ImageDragger setUpImg={setUpImg} />
            <div className="editor-btn-wrapper">
              <button onClick={onClickSubmit}>모멘트 올리기</button>
              <button onClick={onClickPostingCancle}>취소</button>
            </div>
          </div>
        </>
      )}
    </MomentPostingFormWrapper>
  );
};

export default memo(MomentPostingForm);
