import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import LG_Layout from "@layout/LG_Layout";
import Editor from "@components/PostingEditor/Editor";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import {
  BORDER_THIN,
  FLEX_STYLE,
  FONT_STYLE,
  HOVER_GRAY,
  noRevalidate,
  RGB_BLACK,
  toastErrorMessage,
  WHITE_COLOR,
} from "config";
import { storyCreateAction } from "actions/story";
import router from "next/router";
import CountrySelectMap from "@components/CountrySelectMap";
import AutoCompleteForm from "@components/AutoCompleteForm";
import useSWR from "swr";
import { ICountry } from "@typings/db";
import fetcher from "utils/fetcher";
import ImageDragger from "@components/PostingEditor/ImageDragger";
import useInput from "@hooks/useInput";

export const StoryPostWrapper = styled.div`
  .title-input {
    padding: 0.63rem 1rem;
  }
  .autoComplete-form {
    width: 20%;
  }
  .editor-btn-wrapper {
    margin-top: 1rem;
    ${FLEX_STYLE("flex-end", "center")}
    button {
      background: ${WHITE_COLOR};
      padding: 0.7rem 1.3rem;
      font-weight: bold;
      margin-left: 0.5rem;
      border-radius: 10px;
      ${BORDER_THIN("border")};
      transition: 0.3s all;
      &:hover {
        box-shadow: 0px 0px 5px ${RGB_BLACK(0.15)};
      }
    }
  }
`;
interface IProps {}

const post: FC<IProps> = () => {
  const { data: countries } = useSWR<ICountry[]>("/country", fetcher, noRevalidate);
  const dispatch = useDispatch();
  const [selectedCountry, setCountry] = useState("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const [region, setRegion] = useState("");
  const [upImg, setUpImg] = useState("");
  const [content, setContent] = useState("");
  const { user } = useSelector((state: RootState) => state.user);
  const { storyCreateDone } = useSelector((state: RootState) => state.story);

  const countryOptions = useMemo(
    () =>
      countries?.map((v, i) => {
        return { value: v.name, code: v.code };
      }),
    [countries]
  );

  useEffect(() => {
    if (storyCreateDone) {
      router.push("/story");
      setRegion("");
      setUpImg("");
      setTitle("");
      setContent("");
      setCountry("");
    }
  }, [storyCreateDone]);

  const onClickSubmit = useCallback(() => {
    if (!title) {
      toastErrorMessage("제목을 작성해주세요.");
      return;
    }
    if (!region) {
      toastErrorMessage("지도에서 지역을 선택해주세요.");
      return;
    }
    if (!content) {
      toastErrorMessage("내용을 작성해주세요.");
      return;
    }
    console.log(upImg);
    let form: FormData = new FormData();
    if (upImg) {
      form.append("image", upImg[0]);
    }
    form.append("title", String(title));
    form.append("region", String(region));
    form.append("content", String(content));

    let pickCountry = countryOptions?.find((v) => v.value === selectedCountry);
    if (pickCountry) {
      form.append("code", String(pickCountry.code));
    } else {
      toastErrorMessage("유효하지 않은 국가입니다. 다시 확인해주세요.");
      return;
    }
    dispatch(storyCreateAction(form));
  }, [title, region, countryOptions, selectedCountry, content, upImg]);

  return (
    <StoryPostWrapper>
      <LG_Layout>
        <h2 className="main-title">제목</h2>
        <input
          value={title}
          onChange={onChangeTitle}
          placeholder="연대기 제목 입력"
          className="basic-input title-input"
          type="text"
        />
        <h2 className="main-title">국가 지정</h2>
        <AutoCompleteForm
          countryOptions={countryOptions}
          selectedCountry={selectedCountry}
          setCountry={setCountry}
        />
        <h2 className="main-title">지역 지정</h2>
        <CountrySelectMap setRegion={setRegion} />
        <h2 className="main-title">내용작성</h2>
        <Editor setContent={setContent} isStory={true} />
        <h2 className="main-title">썸네일 업로드</h2>
        <ImageDragger setUpImg={setUpImg} single={true} />
        <div className="editor-btn-wrapper">
          <button onClick={() => router.back()}>뒤로가기</button>
          <button onClick={onClickSubmit}>연대기 업로드</button>
        </div>
      </LG_Layout>
    </StoryPostWrapper>
  );
};

export default post;
