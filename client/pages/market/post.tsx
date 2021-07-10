import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import PostingLayout from "@components/PostingEditor/PostingLayout";
import RadioSelector from "@components/PostingEditor/RadioSelector";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import CommonTitle from "@components/Common/CommonTitle";
import { marketPostCreateAction } from "actions/market";
import { japanMapList, marketKeyword, toastErrorMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import useInput from "@hooks/useInput";
import ImageDragger from "@components/PostingEditor/ImageDragger";
import EditorWithoutImage from "@components/PostingEditor/EditorWithoutImage";
import { RootState } from "slices";
import router from "next/router";
export const PostWrapper = styled.div`
  padding: 2rem;
`;
interface IProps {}

const post: FC<IProps> = () => {
  const dispatch = useDispatch();
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, setContent] = useState("");
  const [upImg, setUpImg] = useState<File[]>([]);
  const [area, setArea] = useState("関東(東京)");
  const [keyword, setKeyword] = useState("直取引");
  const { marketPostCreateDone } = useSelector((state: RootState) => state.market);
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (marketPostCreateDone) {
      router.push("/market");
      setUpImg([]);
      setTitle("");
      setContent("");
    }
  }, [marketPostCreateDone]);
  useEffect(() => {
    if (!user) {
      router.back();
    }
  }, []);

  const onClickSubmit = useCallback(() => {
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
  return (
    <PostWrapper>
      <CommonTitle title="マーケット" subtitle="グッズ投稿" />
      <PostingLayout title={title} onChangeTitle={onChangeTitle} onClickSubmit={onClickSubmit}>
        <RadioSelector title="地域" value={area} setValue={setArea} lists={japanMapList} />
        <RadioSelector
          title="キーワード"
          value={keyword}
          setValue={setKeyword}
          lists={marketKeyword}
        />
        <ImageDragger setUpImg={setUpImg} />
        <EditorWithoutImage content={content} setContent={setContent} />
      </PostingLayout>
    </PostWrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(getUserInfoAction());
      return {
        props: {},
      };
    }
);
export default post;
