import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import LGLayout from "@layout/LGLayout";
import Editor from "@components/Editor/Editor";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import {
  BORDER_THIN,
  FLEX_STYLE,
  noRevalidate,
  toastErrorMessage,
  toastSuccessMessage,
} from "config";
import { articleCreateAction, articleEditAction } from "actions/article";
import router, { useRouter } from "next/router";
import CountrySelectMap from "@components/Maps/CountrySelectMap";
import AutoCompleteForm from "@components/AutoCompleteForm";
import useSWR from "swr";
import { ICoordinate, ICountry, IArticle } from "@typings/db";
import fetcher from "utils/fetcher";
import ImageDragger from "@components/Editor/ImageDragger";
import useInput from "@hooks/useInput";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import { articleSlice } from "slices/article";
import tw from "twin.macro";
import { Select } from "antd";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
const { Option } = Select;

export const ArticlePostWrapper = styled.div`
  .title-input {
    padding: 0.63rem 1rem;
  }
  .option-input {
    ${tw`py-2 px-4 w-1/2`}
  }
  .autoComplete-form {
    width: 20%;
  }
  .editor-btn-wrapper {
    margin-top: 1rem;
    ${FLEX_STYLE("flex-end", "center")}
    button {
      ${tw`bg-white py-3 px-6 font-bold ml-2 rounded-xl hover:shadow-md`}
      ${BORDER_THIN("border")};
      transition: 0.3s all;
    }
  }
  .mapboxgl-ctrl-geocoder--button {
    ${tw`rounded-full`}
  }
`;
interface IProps {}

const post: FC<IProps> = () => {
  const { query } = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const { articleCreateDone, articleEditDone } = useSelector((state: RootState) => state.article);
  const { data: article } = useSWR<IArticle>(
    (query?.articleId as string) && `/article/${query?.articleId}`,
    fetcher,
    noRevalidate
  );
  const { data: countries } = useSWR<ICountry[]>("/country", fetcher, noRevalidate);
  const [type, setType] = useState("타입 선택");
  const dispatch = useDispatch();
  const [selectedCountry, setCountry] = useState("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const [label, onChangeLabel, setLabel] = useInput<Number | string>("");
  const [ranking, onChangeRanking, setRanking] = useInput("");
  const [region, setRegion] = useState("이름모를 어딘가");
  const [upImg, setUpImg] = useState("");
  const [content, setContent] = useState("");
  const [editPostId, setEditPostId] = useState<number | null>(null);
  const [marker, setMarker] = useState<ICoordinate>({
    latitude: article?.lat || 37.50529626491968,
    longitude: article?.lng || 126.98047832475031,
  });

  const countryOptions = useMemo(
    () =>
      countries?.map((v, i) => {
        return { value: v.name, code: v.code };
      }),
    [countries]
  );

  useEffect(() => {
    dispatch(getUserInfoAction());
  }, []);

  useEffect(() => {
    if (article) {
      setRegion(article?.region);
      setTitle(article?.title);
      setType(article?.type);
      setContent(article?.content);
      setCountry(article?.country?.name);
      setEditPostId(article?.id);
      setLabel(article?.label || "");
      setRanking(article?.ranking || "");
    }
  }, [article]);

  useEffect(() => {
    if (!user) {
      router.back();
    }
  }, [user]);

  useEffect(() => {
    if (article) {
      if (user?.id !== article?.user?.id) {
        router.back();
      }
    }
  }, [user, article]);

  useEffect(() => {
    if (articleCreateDone || articleEditDone) {
      if (articleCreateDone) {
        toastSuccessMessage("당신에 멋진 기사가 올라갔어요🥰");
      }
      if (articleEditDone) {
        toastSuccessMessage("성공적으로 기사를 수정했습니다.");
      }
      router.push("/news");
      setRegion("");
      setUpImg("");
      setTitle("");
      setType("타입 선택");
      setContent("");
      setCountry("");
      setLabel("");
      setRanking("");
    }
  }, [articleCreateDone, articleEditDone]);

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
    if (type === "타입 선택") {
      toastErrorMessage("타입을 선택해주세요.");
      return;
    }
    let form: FormData = new FormData();
    if (upImg) {
      form.append("image", upImg);
    }
    if (label) {
      form.append("label", String(label));
    }
    if (ranking) {
      form.append("ranking", String(ranking));
    }
    form.append("title", String(title));
    form.append("region", String(region));
    form.append("type", String(type));
    form.append("content", String(content));
    form.append("lat", String(marker.latitude));
    form.append("lng", String(marker.longitude));

    let pickCountry = countryOptions?.find((v) => v.value === selectedCountry);
    if (pickCountry) {
      form.append("code", String(pickCountry.code));
    } else {
      toastErrorMessage("유효하지 않은 국가입니다. 다시 확인해주세요.");
      return;
    }
    if (editPostId) {
      form.append("id", String(editPostId));
      dispatch(articleEditAction(form));
    } else {
      dispatch(articleCreateAction(form));
    }
  }, [
    title,
    region,
    countryOptions,
    selectedCountry,
    content,
    upImg,
    marker,
    editPostId,
    type,
    label,
    ranking,
  ]);

  const handleTypeChange = useCallback((value: string) => {
    setType(value);
  }, []);

  return (
    <ArticlePostWrapper>
      <LGLayout>
        <h2 className="main-title">제목</h2>
        <input
          value={title}
          onChange={onChangeTitle}
          placeholder="기사 제목 입력"
          className="basic-input title-input"
          type="text"
        />
        <h2 className="main-title">국가 지정</h2>
        <AutoCompleteForm
          countryOptions={countryOptions}
          selectedCountry={selectedCountry}
          setCountry={setCountry}
        />
        <h2 className="main-title">라벨 설정(선택사항)</h2>
        <input
          value={label}
          onChange={onChangeLabel}
          placeholder="라벨 내용 입력"
          className="basic-input option-input"
          type="text"
        />
        <h2 className="main-title">순위 설정(선택사항)</h2>
        <input
          value={ranking}
          onChange={onChangeRanking}
          placeholder="숫자를 입력하세요"
          className="basic-input option-input"
          type="number"
        />
        <h2 className="main-title">타입 지정</h2>
        <Select
          className="type-selector"
          value={type}
          onChange={handleTypeChange}
          style={{ width: "180px" }}
        >
          <Option value="관광뉴스">관광뉴스</Option>
          <Option value="트렌드">트렌드</Option>
          <Option value="쇼핑">쇼핑</Option>
          <Option value="이색체험">이색체험</Option>
          <Option value="이벤트">이벤트</Option>
        </Select>
        <h2 className="main-title">지역 지정</h2>
        <CountrySelectMap
          lat={article?.lat}
          lng={article?.lng}
          marker={marker}
          setMarker={setMarker}
          setRegion={setRegion}
        />
        <h2 className="main-title">선택 지역</h2>
        <h3>{region}</h3>
        <h2 className="main-title">내용작성</h2>
        <Editor prevContent={article?.content} setContent={setContent} isStory={true} />
        <h2 className="main-title">
          {editPostId ? "썸네일 변경 (미선택시 기존 썸네일 사용)" : "썸네일 업로드"}
        </h2>
        <ImageDragger setUpImg={setUpImg} single={true} />
        <div className="editor-btn-wrapper">
          <button onClick={() => router.back()}>뒤로가기</button>
          <button
            onClick={() => {
              if (
                marker.latitude === 37.50529626491968 &&
                marker.longitude === 126.98047832475031
              ) {
                toastConfirmMessage(
                  onClickSubmit,
                  "지역 좌표를 입력하지 않으셨어요, 이상태로 진행할까요? (현재 좌표 : 대한민국 서울 , 이름모를 어딘가)",
                  "진행해주세요"
                );
              } else {
                onClickSubmit();
              }
            }}
          >
            {editPostId ? "기사 수정" : "기사 업로드"}
          </button>
        </div>
      </LGLayout>
    </ArticlePostWrapper>
  );
};

export default post;
