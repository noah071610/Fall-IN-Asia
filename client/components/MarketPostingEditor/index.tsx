import React, { createRef, FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { MarketPostingEditorWrapper } from "./styles";
import { Button, Input, Upload } from "antd";
import useInput from "@hooks/useInput";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import {
  japanMapList,
  marketKeyword,
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
import ReactQuill from "react-quill";

const MarketPostingEditor: FC<IProps> = () => {
  const dispatch = useDispatch();
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, setContent] = useState("");
  const [upImg, setUpImg] = useState<any[]>([]);
  const [area, setArea] = useState("関東(東京)");
  const [keyword, setKeyword] = useState("直取引");
  const { marketPostCreateDone } = useSelector((state: RootState) => state.market);

  useEffect(() => {
    if (marketPostCreateDone) {
      router.push("/market");
      toastSuccessMessage("ポストを投稿致しました！😆");
      setUpImg([]);
      setTitle("");
      setContent("");
    }
  }, [marketPostCreateDone]);

  const handleChange = (info: any) => {
    if (info.file.status === "done") {
      setUpImg((prev: any) => [...prev, info.file.originFileObj]);
    }
  };

  const onSubmitPost = useCallback(() => {
    if (!title) {
      toastErrorMessage("タイトルを作成してください。");
      return;
    }
    if (!content) {
      toastErrorMessage("ポストの内容を作成してください。");
      return;
    }
    let form = new FormData();
    upImg?.forEach((v) => {
      form.append("image", v);
    });
    form.append("title", String(title));
    form.append("content", String(content));
    form.append("area", String(area));
    form.append("keyword", String(keyword));
    dispatch(marketPostCreateAction(form));
  }, [upImg, title, content, area, keyword]);

  const onChangeArea = useCallback((e) => {
    setArea(e.target.value);
  }, []);
  const onChangeKeyword = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);
  const onChangeEditor = (content: string) => {
    setContent(content);
  };
  return (
    <MarketPostingEditorWrapper>
      <div className="upload-menu">
        <h3>1)&nbsp;タイトル作成</h3>
        <Input placeholder="タイトル入力" value={title} onChange={onChangeTitle} />
        <h3>2)&nbsp;地域とキーワード選択</h3>
        <span className="radio-title">地域 :</span>
        <Radio.Group defaultValue="関東(東京)" onChange={onChangeArea} value={area}>
          {japanMapList.map((v, i: number) => {
            return (
              <Radio key={i} value={v.name}>
                {v.name}
              </Radio>
            );
          })}
        </Radio.Group>
        <br />
        <span className="radio-title">キーワード :</span>
        <Radio.Group defaultValue="直取引" onChange={onChangeKeyword} value={keyword}>
          {marketKeyword.map((v, i: number) => {
            return (
              <Radio key={i} value={v.name}>
                {v.name}
              </Radio>
            );
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
      <ReactQuill
        ref={}
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
