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
import { storyCreateAction, storyEditAction } from "actions/story";
import router, { useRouter } from "next/router";
import CountrySelectMap from "@components/Maps/CountrySelectMap";
import AutoCompleteForm from "@components/AutoCompleteForm";
import useSWR from "swr";
import { ICoordinate, ICountry, IStory } from "@typings/db";
import fetcher from "utils/fetcher";
import ImageDragger from "@components/Editor/ImageDragger";
import useInput from "@hooks/useInput";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import { storySlice } from "slices/story";
import tw from "twin.macro";
import { getUserInfoAction } from "actions/user";
import { wrapper } from "configureStore";
import axios from "axios";

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
  const { storyCreateDone, storyEditDone } = useSelector((state: RootState) => state.story);
  const { data: countries } = useSWR<ICountry[]>("/country", fetcher, noRevalidate);
  const { data: story } = useSWR<IStory>(
    query?.storyId ? `/story/${query?.code}/${query?.storyId}/0` : null,
    fetcher,
    noRevalidate
  );
  const dispatch = useDispatch();
  const [selectedCountry, setCountry] = useState("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const [region, setRegion] = useState("이름모를 어딘가");
  const [upImg, setUpImg] = useState("");
  const [content, setContent] = useState("");
  const [editPostId, setEditPostId] = useState<number | null>(null);
  const [marker, setMarker] = useState<ICoordinate>({
    latitude: story?.lat || 37.50529626491968,
    longitude: story?.lng || 126.98047832475031,
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
    if (story) {
      setRegion(story?.region);
      setTitle(story?.title);
      setContent(story?.content);
      setCountry(story?.country?.name);
      setEditPostId(story?.id);
    }
  }, [story]);

  useEffect(() => {
    if (storyCreateDone || storyEditDone) {
      if (storyCreateDone) {
        toastSuccessMessage("당신에 멋진 연대기가 올라갔어요🥰");
      }
      if (storyEditDone) {
        toastSuccessMessage("성공적으로 연대기를 수정했습니다.");
      }
      router.push("/story");
      setRegion("");
      setUpImg("");
      setTitle("");
      setContent("");
      setCountry("");
    }
  }, [storyCreateDone, storyEditDone]);

  useEffect(() => {
    if (!user) {
      router.back();
    }
  }, [user]);

  useEffect(() => {
    if (story) {
      if (user?.id !== story?.user?.id) {
        router.back();
      }
    }
  }, [user, story]);

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
    let form: FormData = new FormData();
    if (upImg) {
      form.append("image", upImg);
    }
    form.append("title", String(title));
    form.append("region", String(region));
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
      dispatch(storyEditAction(form));
    } else {
      dispatch(storyCreateAction(form));
    }
  }, [title, region, countryOptions, selectedCountry, content, upImg, marker, editPostId]);

  return (
    <StoryPostWrapper>
      <LGLayout>
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
        <CountrySelectMap
          lat={story?.lat}
          lng={story?.lng}
          marker={marker}
          setMarker={setMarker}
          setRegion={setRegion}
        />
        <h2 className="main-title">선택 지역</h2>
        <h3>{region}</h3>
        <h2 className="main-title">내용작성</h2>
        <Editor prevContent={story?.content} setContent={setContent} isStory={true} />
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
            {editPostId ? "연대기 수정" : "연대기 업로드"}
          </button>
        </div>
      </LGLayout>
    </StoryPostWrapper>
  );
};

export default post;
