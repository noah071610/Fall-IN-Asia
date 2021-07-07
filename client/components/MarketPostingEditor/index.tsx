import React, { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { MarketPostingEditorWrapper } from "./styles";
import { Button, Input, Upload } from "antd";
import ReactCrop, { Crop } from "react-image-crop";
import useInput from "@hooks/useInput";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import {
  japanMapList,
  marketKeyword,
  NO_IMAGE_URL,
  quillModules,
  qullFormats,
  toastErrorMessage,
  toastSuccessMessage,
} from "config";
import dynamic from "next/dynamic";
import { marketPostCreateAction } from "actions/market";
const { Dragger } = Upload;
import { Radio } from "antd";
interface IProps {}

const QuillEditor = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const MarketPostingEditor: FC<IProps> = () => {
  const dispatch = useDispatch();
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, setContent] = useState("");
  const [upImg, setUpImg] = useState<ArrayBuffer | string | null>(null);
  const [area, setArea] = useState("kanto");
  const [keyword, setKeyword] = useState("direct");
  const [blob, setBlob] = useState<Blob | null>(null);
  const { user } = useSelector((state: RootState) => state.user);
  const { galleryPostCreateDone } = useSelector((state: RootState) => state.gallery);

  useEffect(() => {
    if (!user) {
      router.back();
    }
  }, []);

  useEffect(() => {
    if (galleryPostCreateDone) {
      router.push("/gallery");
      toastSuccessMessage("イメージをアップロード致しました！😆");
      setUpImg("");
      setTitle("");
      setBlob(null);
    }
  }, [galleryPostCreateDone]);

  const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const onChangeEditor = (content: string) => {
    setContent(content);
  };

  const handleChange = (info: any) => {
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl: any) => setUpImg(imageUrl));
    }
  };

  const onSubmitPost = useCallback(() => {
    if (!blob) {
      toastErrorMessage("イメージがありません！");
      return;
    }
    if (!title) {
      toastErrorMessage("タイトルを作成してください。");
      return;
    }
    if (!content) {
      toastErrorMessage("ポストの内容を作成してください。");
      return;
    }
    const form = new FormData();
    if (blob) {
      form.append("image", blob);
    }
    form.append("title", String(title));
    form.append("content", String(content));
    dispatch(marketPostCreateAction(form));
  }, [blob, title]);

  const onChangeArea = useCallback((e) => {
    setArea(e.target.value);
  }, []);
  const onChangeKeyword = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <MarketPostingEditorWrapper>
      <div className="upload-menu">
        <h3>1)&nbsp;タイトル作成</h3>
        <Input placeholder="タイトル入力" value={title} onChange={onChangeTitle} />
        <h3>2)&nbsp;地域とキーワード選択</h3>
        <span className="radio-title">地域 :</span>
        <Radio.Group defaultValue="kanto" onChange={onChangeArea} value={area}>
          {japanMapList.map((v, i: number) => {
            return <Radio value={v.eng}>{v.name}</Radio>;
          })}
        </Radio.Group>
        <br />
        <span className="radio-title">キーワード :</span>
        <Radio.Group defaultValue="direct" onChange={onChangeKeyword} value={keyword}>
          {marketKeyword.map((v, i: number) => {
            return <Radio value={v.eng}>{v.name}</Radio>;
          })}
        </Radio.Group>
        <h3>3)&nbsp;イメージアップロード</h3>
        <Dragger showUploadList={true} multiple={true} className="dragger" onChange={handleChange}>
          <div>
            <img
              src="https://user-images.githubusercontent.com/74864925/124657825-f38a5500-dedd-11eb-8de9-6ed70a512f24.png"
              alt="drag"
            />
            <p>ここにイメージドロップ</p>
          </div>
        </Dragger>
      </div>
      <h3>3)&nbsp;内容作成</h3>
      <QuillEditor
        style={{ height: "350px" }}
        theme="snow"
        modules={quillModules}
        formats={qullFormats}
        value={content || ""}
        onChange={(content, delta, source, editor) => onChangeEditor(editor.getHTML())}
      />
      <div className="submit-menu">
        <Button
          onClick={() => {
            router.back();
          }}
        >
          以前のページ
        </Button>
        <Button onClick={onSubmitPost} type="primary">
          投稿
        </Button>
      </div>
    </MarketPostingEditorWrapper>
  );
};

export default memo(MarketPostingEditor);
