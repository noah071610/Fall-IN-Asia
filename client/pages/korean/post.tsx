import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { wrapper } from "configureStore";
import PostingLayout from "@components/PostingEditor/PostingLayout";
import { useDispatch, useSelector } from "react-redux";
import useInput from "@hooks/useInput";
import { useCallback, useEffect, useState } from "react";
import { RootState } from "slices";
import router from "next/router";
import { japanMapList, studyPostTypeList, toastErrorMessage } from "config";
import { studyPostCreateAction } from "actions/study";
import ImageDragger from "@components/PostingEditor/ImageDragger";
import EditorWithoutImage from "@components/PostingEditor/EditorWithoutImage";
import RadioSelector from "@components/PostingEditor/RadioSelector";

export const KoreanPostWrapper = styled.div`
  padding: 2rem;
`;

const post = () => {
  const dispatch = useDispatch();
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, setContent] = useState("");
  const [upImg, setUpImg] = useState<File[]>([]);
  const [area, setArea] = useState("関東(東京)");
  const [type, setType] = useState("レッスン");
  const { user } = useSelector((state: RootState) => state.user);
  const { studyPostCreateDone } = useSelector((state: RootState) => state.study);

  useEffect(() => {
    if (studyPostCreateDone) {
      router.push(`/korean`);
      setUpImg([]);
      setTitle("");
      setContent("");
    }
  }, [studyPostCreateDone]);
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  const onClickSubmit = useCallback(() => {
    if (title === "" || !title?.trim()) {
      toastErrorMessage("タイトルを作成してください");
      return;
    }
    if (content === "" || !content?.trim()) {
      toastErrorMessage("内容を作成してください");
      return;
    }
    if (!user) {
      router.back();
      return;
    }
    let form = new FormData();
    upImg?.forEach((v) => {
      form.append("image", v);
    });
    form.append("title", String(title));
    form.append("content", String(content));
    form.append("area", String(area));
    form.append("type", String(type));
    dispatch(studyPostCreateAction(form));
  }, [title, content, type, area]);
  return (
    <KoreanPostWrapper>
      <CommonTitle title="韓国語" subtitle="スターディやレッスンを登録" />
      <PostingLayout title={title} onChangeTitle={onChangeTitle} onClickSubmit={onClickSubmit}>
        <RadioSelector title="地域" value={area} setValue={setArea} lists={japanMapList} />
        <RadioSelector
          title="掲示タイプ"
          value={type}
          setValue={setType}
          lists={studyPostTypeList}
        />
        <ImageDragger setUpImg={setUpImg} />
        <EditorWithoutImage content={content} setContent={setContent} />
      </PostingLayout>
    </KoreanPostWrapper>
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
