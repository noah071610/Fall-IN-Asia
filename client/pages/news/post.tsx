import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import LGLayout from "@layout/LGLayout";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import {
  BORDER_THIN,
  FLEX_STYLE,
  getUserCookieWithServerSide,
  noRevalidate,
  toastErrorMessage,
  toastSuccessMessage,
} from "config";
import router, { useRouter } from "next/router";
import AutoCompleteForm from "@components/AutoCompleteForm";
import useSWR from "swr";
import { ICoordinate, ICountry, IArticle, DataResponse } from "@typings/db";
import fetcher from "utils/fetcher";
import ImageDragger from "@components/Editor/ImageDragger";
import useInput from "@hooks/useInput";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import tw from "twin.macro";
import { Select } from "antd";
import { wrapper } from "configureStore";
import axios from "axios";
import { UploadFile } from "antd/lib/upload/interface";
import dynamic from "next/dynamic";
import { GetServerSidePropsContext } from "next";
const { Option } = Select;
const CountrySelectMap = dynamic(() => import("@components/Maps/CountrySelectMap"));
const Editor = dynamic(() => import("@components/Editor/Editor"));

export const NewsPostingWrapper = styled.div`
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
  .dragger {
    height: 40vh;
  }
`;

const NewsPostingPage = () => {
  const { query } = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const { data: editArticle } = useSWR<IArticle>(
    query?.articleId ? `/article/${query?.articleId}` : null,
    fetcher,
    noRevalidate
  );
  const { data: countries } = useSWR<ICountry[]>("/country", fetcher, noRevalidate);
  const [type, setType] = useState("?????? ??????");
  const [selectedCountry, setCountry] = useState("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const [label, onChangeLabel, setLabel] = useInput<Number | string>("");
  // eslint-disable-next-line no-unused-vars
  const [prevThumbnail, setPrevThumbnail] = useState<string>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [ranking, onChangeRanking, setRanking] = useInput("");
  const [region, setRegion] = useState("???????????? ?????????");
  const [upImg, setUpImg] = useState("");
  const [content, setContent] = useState("");
  const [editPostId, setEditPostId] = useState<number | null>(null);
  const [marker, setMarker] = useState<ICoordinate>({
    latitude: 37.50529626491968,
    longitude: 126.98047832475031,
  });

  const countryOptions = useMemo(
    () =>
      countries?.map((v) => {
        return { value: v.name, code: v.code };
      }),
    [countries]
  );

  useEffect(() => {
    if (editArticle) {
      setRegion(editArticle?.region);
      setTitle(editArticle?.title);
      setType(editArticle?.type);
      setContent(editArticle?.content);
      setCountry(editArticle?.country?.name);
      setEditPostId(editArticle?.id);
      setMarker({
        latitude: editArticle?.lat,
        longitude: editArticle?.lng,
      });
      setLabel(editArticle?.label || "");
      setRanking(editArticle?.ranking || "");
      if (editArticle?.thumbnail) {
        setFileList([{ uid: `1`, name: `?????????`, status: "done", url: editArticle.thumbnail }]);
        setPrevThumbnail(editArticle.thumbnail);
      }
    }
  }, [editArticle, setLabel, setRanking, setTitle]);

  useEffect(() => {
    if (user?.name !== "Fall IN Asia") {
      router.back();
    }
    if (editArticle) {
      if (user?.id !== editArticle?.user?.id) {
        router.back();
      }
    }
  }, [user, editArticle]);

  const onClickSubmit = useCallback(() => {
    if (!title) {
      toastErrorMessage("????????? ??????????????????.");
      return;
    }
    if (!region) {
      toastErrorMessage("???????????? ????????? ??????????????????.");
      return;
    }
    if (!content) {
      toastErrorMessage("????????? ??????????????????.");
      return;
    }
    if (type === "?????? ??????") {
      toastErrorMessage("????????? ??????????????????.");
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
      toastErrorMessage("???????????? ?????? ???????????????. ?????? ??????????????????.");
      return;
    }
    if (editArticle) {
      form.append("articleId", String(editArticle?.id));
    }
    axios
      .post(`/article/${editArticle ? "edit" : ""}`, form)
      .then((res: DataResponse) => {
        const { articleId } = res.data.data;
        router.push(`/news/${articleId}`);
        setRegion("");
        setUpImg("");
        setTitle("");
        setType("?????? ??????");
        setContent("");
        setCountry("");
        setLabel("");
        setRanking("");
        if (editArticle) {
          toastSuccessMessage("????????? ??????????????????.");
        } else {
          toastSuccessMessage("????????? ??????????????? ??????????????????.");
        }
      })
      .catch((error) => {
        toastErrorMessage(error);
        throw error;
      });
  }, [
    title,
    region,
    countryOptions,
    selectedCountry,
    content,
    upImg,
    marker,
    editArticle,
    type,
    label,
    ranking,
  ]);

  const handleTypeChange = useCallback((value: string) => {
    setType(value);
  }, []);

  return (
    <NewsPostingWrapper>
      <LGLayout>
        <h2 className="main-title">??????</h2>
        <input
          value={title}
          onChange={onChangeTitle}
          placeholder="?????? ?????? ??????"
          className="basic-input title-input"
          type="text"
        />
        <h2 className="main-title">?????? ??????</h2>
        <AutoCompleteForm
          countryOptions={countryOptions}
          selectedCountry={selectedCountry}
          setCountry={setCountry}
        />
        <h2 className="main-title">?????? ??????(????????????)</h2>
        <input
          value={label}
          onChange={onChangeLabel}
          placeholder="?????? ?????? ??????"
          className="basic-input option-input"
          type="text"
        />
        <h2 className="main-title">?????? ??????(????????????)</h2>
        <input
          value={ranking}
          onChange={onChangeRanking}
          placeholder="????????? ???????????????"
          className="basic-input option-input"
          type="number"
        />
        <h2 className="main-title">?????? ??????</h2>
        <Select
          className="type-selector"
          value={type}
          onChange={handleTypeChange}
          style={{ width: "180px" }}
        >
          <Option value="travelNews">travelNews</Option>
          <Option value="trand">trand</Option>
          <Option value="shopping">shopping</Option>
          <Option value="experience">experience</Option>
          <Option value="event">event</Option>
        </Select>
        <h2 className="main-title">?????? ??????</h2>
        <CountrySelectMap
          lat={editArticle?.lat}
          lng={editArticle?.lng}
          marker={marker}
          setMarker={setMarker}
          setRegion={setRegion}
        />
        <h2 className="main-title">?????? ??????</h2>
        <h3>{region}</h3>
        <h2 className="main-title">????????????</h2>
        <Editor prevContent={editArticle?.content} setContent={setContent} isStory={true} />
        <h2 className="main-title">
          {editPostId ? "????????? ?????? (???????????? ?????? ????????? ??????)" : "????????? ?????????"}
        </h2>
        <ImageDragger
          fileList={fileList}
          setFileList={setFileList}
          setPrevImageList={setPrevThumbnail}
          setUpImg={setUpImg}
          single={true}
        />
        <div className="editor-btn-wrapper">
          <button onClick={() => router.back()}>????????????</button>
          <button
            onClick={() => {
              if (
                marker.latitude === 37.50529626491968 &&
                marker.longitude === 126.98047832475031
              ) {
                toastConfirmMessage(
                  onClickSubmit,
                  "?????? ????????? ???????????? ???????????????, ???????????? ???????????????? (?????? ?????? : ???????????? ?????? , ???????????? ?????????)",
                  "???",
                  "?????????"
                );
              } else {
                onClickSubmit();
              }
            }}
          >
            {editPostId ? "?????? ??????" : "?????? ?????????"}
          </button>
        </div>
      </LGLayout>
    </NewsPostingWrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, locale }: GetServerSidePropsContext) => {
      getUserCookieWithServerSide(req, store);
      return {
        props: {},
      };
    }
);

export default NewsPostingPage;
