import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import LGLayout from "@layout/LGLayout";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import {
  BORDER_THIN,
  FLEX_STYLE,
  noRevalidate,
  toastErrorMessage,
  toastSuccessMessage,
} from "config";
import router, { useRouter } from "next/router";
import AutoCompleteForm from "@components/AutoCompleteForm";
import useSWR from "swr";
import { DataResponse, ICoordinate, ICountry, IStory } from "@typings/db";
import fetcher from "utils/fetcher";
import ImageDragger from "@components/Editor/ImageDragger";
import useInput from "@hooks/useInput";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import tw from "twin.macro";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { wrapper } from "configureStore";
import { UploadFile } from "antd/lib/upload/interface";
import dynamic from "next/dynamic";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
const CountrySelectMap = dynamic(() => import("@components/Maps/CountrySelectMap"));
const Editor = dynamic(() => import("@components/Editor/Editor"));

export const StoryPostingWrapper = styled.div`
  .title-input {
    padding: 0.63rem 1rem;
  }
  .autoComplete-form {
    width: 200px;
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
interface IProps {}

const StoryPostingPage: FC<IProps> = () => {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const { data: countries } = useSWR<ICountry[]>("/country", fetcher, noRevalidate);
  const { data: editStory } = useSWR<IStory>(
    query?.storyId ? `/story/${query?.code}/${query?.storyId}` : null,
    fetcher,
    noRevalidate
  );
  const [selectedCountry, setCountry] = useState("");
  const [title, onChangeTitle, setTitle] = useInput("");
  // eslint-disable-next-line no-unused-vars
  const [prevThumbnail, setPrevThumbnail] = useState<string>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [region, setRegion] = useState((t("post.somewhere") as string) || "Somewhere");
  const [upImg, setUpImg] = useState("");
  const [content, setContent] = useState("");
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
    if (editStory) {
      setRegion(editStory?.region);
      setTitle(editStory?.title);
      setContent(editStory?.content);
      setCountry(editStory?.country?.name);
      setMarker({
        latitude: editStory?.lat,
        longitude: editStory?.lng,
      });
      if (editStory?.thumbnail) {
        setFileList([{ uid: `1`, name: `썸네일`, status: "done", url: editStory.thumbnail }]);
        setPrevThumbnail(editStory.thumbnail);
      }
    }
  }, [editStory]);

  useEffect(() => {
    if (!user) {
      router.back();
    }
    if (editStory) {
      if (user?.id !== editStory?.user?.id) {
        router.back();
      }
    }
  }, [user, editStory]);

  const onClickSubmit = useCallback(() => {
    if (!title) {
      toastErrorMessage(t("post.titlePlaceHolder"));
      return;
    }
    if (!region) {
      toastErrorMessage(t("post.noRegion"));
      return;
    }
    if (!content) {
      toastErrorMessage(t("post.writeContentPlaceHolder"));
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
      toastErrorMessage(t("post.wrongCountry"));
      return;
    }
    if (editStory) {
      form.append("storyId", String(editStory?.id));
    }
    axios
      .post(`/story/${editStory ? "edit" : ""}`, form)
      .then((res: DataResponse) => {
        const { storyId } = res.data.data;
        router.push(`/story/${pickCountry?.code}/${storyId}`);
        scrollTo({ top: 0 });
        setRegion("");
        setUpImg("");
        setTitle("");
        setContent("");
        setCountry("");
        if (editStory) {
          toastSuccessMessage(t("story.edit"));
        } else {
          toastSuccessMessage(t("story.done"));
        }
      })
      .catch((error) => {
        toastErrorMessage(error);
        throw error;
      });
  }, [title, region, countryOptions, selectedCountry, content, upImg, marker, editStory]);

  return (
    <StoryPostingWrapper>
      <LGLayout>
        <h2 className="main-title">{t("post.title")}</h2>
        <input
          value={title}
          onChange={onChangeTitle}
          placeholder={t("post.titlePlaceHolder")}
          className="basic-input title-input"
          type="text"
        />
        <h2 className="main-title">{t("post.selectCountry")}</h2>
        <AutoCompleteForm
          countryOptions={countryOptions}
          selectedCountry={selectedCountry}
          setCountry={setCountry}
        />
        <h2 className="main-title">{t("post.selectRegion")}</h2>
        <CountrySelectMap
          lat={editStory?.lat}
          lng={editStory?.lng}
          marker={marker}
          setMarker={setMarker}
          setRegion={setRegion}
        />
        <h2 className="main-title">{t("post.region")}</h2>
        <h3>{region}</h3>
        <h2 className="main-title">{t("post.writeContent")}</h2>
        <Editor prevContent={editStory?.content} setContent={setContent} isStory={true} />
        <h2 className="main-title">
          {editStory ? t("post.thumbnailChange") : t("post.thumbnailUpload")}
        </h2>
        <ImageDragger
          fileList={fileList}
          setFileList={setFileList}
          setPrevImageList={setPrevThumbnail}
          setUpImg={setUpImg}
          single={true}
        />
        <div className="editor-btn-wrapper">
          <button onClick={() => router.back()}>{t("main.back")}</button>
          <button
            onClick={() => {
              if (
                marker.latitude === 37.50529626491968 &&
                marker.longitude === 126.98047832475031
              ) {
                toastConfirmMessage(
                  onClickSubmit,
                  t("post.confirmWithoutRegion"),
                  t("main.yes"),
                  t("main.no")
                );
              } else {
                onClickSubmit();
              }
            }}
          >
            {editStory ? t("post.editStory") : t("post.uploadStory")}
          </button>
        </div>
      </LGLayout>
    </StoryPostingWrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, locale }: GetServerSidePropsContext) => {
      const cookie = req ? req.headers.cookie : "";
      if (axios.defaults.headers) {
        axios.defaults.headers.Cookie = "";
        if (req && cookie) {
          axios.defaults.headers.Cookie = cookie;
        }
      }
      await store.dispatch(getUserInfoAction());
      return {
        props: {
          ...(await serverSideTranslations(locale as string, ["common"])),
        },
      };
    }
);

export default StoryPostingPage;
