import { EditOutlined } from "@ant-design/icons";
import ImageDragger from "@components/Editor/ImageDragger";
import { Select } from "antd";
import { noRevalidate, toastErrorMessage, toastSuccessMessage } from "config";
import React, { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MomentPostingFormWrapper } from "./styles";
import router, { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { ICountry, IMoment } from "@typings/db";
import AutoCompleteForm from "@components/AutoCompleteForm";
import { RootState } from "slices";
import dynamic from "next/dynamic";
import axios, { AxiosResponse } from "axios";
import { UploadFile } from "antd/lib/upload/interface";
import { mainSlice } from "slices/main";
import { useTranslation } from "react-i18next";
const { Option } = Select;

const EditorWithoutImage = dynamic(import("@components/Editor/EditorWithoutImage"));

interface IProps {
  editMoment?: IMoment;
}

const MomentPostingForm: FC<IProps> = ({ editMoment }) => {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { data: countries } = useSWR<ICountry[]>("/country", fetcher, noRevalidate);
  const [upImg, setUpImg] = useState<File[]>([]);
  const [content, setContent] = useState("");
  const [type, setType] = useState(t("post.selectKeyword") as string);
  const [selectedCountry, setCountry] = useState("");
  const [prevImageList, setPrevImageList] = useState<string[]>([]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [onPostingForm, setOnPostingForm] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (editMoment) {
      setContent(editMoment?.content);
      setType(editMoment?.type);
      setCountry(editMoment?.country?.name);
      if (editMoment?.images.length > 0) {
        const editMomentImageList: UploadFile[] = editMoment.images.map((v, i) => {
          return { uid: `${i + 1}`, name: `이미지 ${i + 1}번`, status: "done", url: v.image_src };
        });
        setFileList(editMomentImageList);
        setPrevImageList(editMoment?.images.map((v) => v.image_src));
      }
    }
  }, [editMoment]);

  const countryOptions = useMemo(
    () =>
      countries?.map((v) => {
        return { value: t(`country.${v.name}`), code: v.code };
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
    if (type === t("post.selectKeyword")) {
      toastErrorMessage(t("post.noKeyword"));
      return;
    }
    if (!content) {
      toastErrorMessage("post.writeContentPlaceHolder");
      return;
    }
    let form: FormData = new FormData();
    upImg?.forEach((v) => {
      form.append("image", v);
    });
    prevImageList?.forEach((v) => {
      form.append("prevImage", String(v));
    });
    form.append("content", String(content));
    form.append("type", String(type));

    let pickCountry = countryOptions?.find((v) => v.value === selectedCountry);
    if (pickCountry) {
      form.append("code", String(pickCountry.code));
    } else {
      toastErrorMessage(t("post.wrongCountry"));
      return;
    }
    if (editMoment) {
      form.append("momentId", String(editMoment?.id));
    }
    axios
      .post(`/moment/${editMoment ? "edit" : ""}`, form)
      .then((res: AxiosResponse<any>) => {
        const { momentId } = res.data.data;
        router.push(`/country/${pickCountry?.code}/${momentId}`);
        scrollTo({ top: 0 });
        setContent("");
        setUpImg([]);
        setFileList([]);
        setType(t("post.selectKeyword"));
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
  }, [upImg, content, type, selectedCountry, editMoment, prevImageList]);

  const onClickOpenPostingForm = useCallback(() => {
    if (!user) {
      toastErrorMessage(t("message.needToLogin"));
      dispatch(mainSlice.actions.toggleLoginModal());
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
          <span className="placeholder">{t("main.postingMention") + "🛫"}</span>
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
                onChange={handleTypeChange}
                style={{ width: "180px" }}
              >
                <Option value="community">{t("nav.community")}</Option>
                <Option value="travelInfo">{t("nav.travelInfo")}</Option>
                <Option value="scam">{t("nav.scam")}</Option>
                <Option value="accompany">{t("nav.accompany")}</Option>
              </Select>
            </div>
            <EditorWithoutImage content={content} setContent={setContent} />{" "}
            <ImageDragger
              fileList={fileList}
              setUpImg={setUpImg}
              setFileList={setFileList}
              setPrevImageList={setPrevImageList}
            />
            <div className="editor-btn-wrapper">
              <button onClick={onClickSubmit}>{t("post.uploadMoment")}</button>
              <button onClick={onClickPostingCancle}>{t("post.cancel")}</button>
            </div>
          </div>
        </>
      )}
    </MomentPostingFormWrapper>
  );
};

export default memo(MomentPostingForm);
