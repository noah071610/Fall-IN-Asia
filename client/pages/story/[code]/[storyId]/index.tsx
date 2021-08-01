import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { FLEX_STYLE, noRevalidate, toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import router, { useRouter } from "next/router";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import { IStory } from "@typings/db";
import { Divider } from "antd";
import StoryPost from "@sections/StoryPage/StoryPost";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { storySlice } from "slices/story";
import { commentSlice } from "slices/comment";
import StoryPostThubnail from "@sections/StoryPage/StoryPostThubnail";
import CountryMap from "@components/Maps/CountryMap";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import { storyDeleteAction } from "actions/story";
import tw from "twin.macro";
import StoryPostLayout from "@layout/StoryPostLayout";
import StoryArticleList from "@sections/StoryPage/StoryArticleList";

export const StoryPostWrapper = styled.div`
  padding-top: 6rem;
  .story-manage-wrapper {
    ${FLEX_STYLE("center", "center")};
    button {
      ${tw`py-2 px-4 hover:bg-gray-100 rounded-xl`}
      .anticon {
        ${tw`mb-2 text-2xl`}
        ${FLEX_STYLE("center", "center")};
      }
    }
  }
`;
interface IProps {}

const index: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [ip, setIP] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);
  const { user } = useSelector((state: RootState) => state.user);
  const { storyEditConfirmDone, storyDislikeDone, storyLikeDone } = useSelector(
    (state: RootState) => state.story
  );
  const {
    commentCreateDone,
    commentDeleteDone,
    subCommentCreateDone,
    subCommentDeleteDone,
    commentLikeDone,
    commentDislikeDone,
  } = useSelector((state: RootState) => state.comment);

  const { data: story, revalidate: revalidateStory } = useSWR<IStory>(
    ip ? `/story/${query?.code}/${query?.storyId}/${ip}` : null,
    fetcher,
    noRevalidate
  );
  const { data: stories, setSize } = useSWRInfinite<IStory[]>(
    (index) => `/story?page=${index + 1}&filter=${query?.filter || ""}`,
    fetcher,
    noRevalidate
  );

  const getClientIp = async () => {
    await fetch("https://jsonip.com", { mode: "cors" })
      .then((resp) => resp.json())
      .then((ip) => {
        setIP(ip.ip.replaceAll(".", "").slice(0, -3));
      })
      .catch(() => {
        setIP("00000000");
      });
  };

  useEffect(() => {
    getClientIp();
  }, []);

  useEffect(() => {
    if (user?.id === story?.user?.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, story]);

  useEffect(() => {
    if (storyEditConfirmDone) {
      router.push(`/club/${query?.group}/edit`);
    }
  }, [storyEditConfirmDone]);

  useEffect(() => {
    if (commentCreateDone) {
      toastSuccessMessage("댓글을 성공적으로 작성했습니다.");
      dispatch(commentSlice.actions.commentCreateClear());
      revalidateStory();
    }
  }, [commentCreateDone]);

  useEffect(() => {
    if (commentDeleteDone) {
      toastSuccessMessage("댓글을 성공적으로 삭제했습니다.");
      dispatch(commentSlice.actions.commentDeleteClear());
      revalidateStory();
    }
  }, [commentDeleteDone]);

  useEffect(() => {
    if (subCommentCreateDone) {
      toastSuccessMessage("답글을 성공적으로 작성했습니다.");
      dispatch(commentSlice.actions.subCommentCreateClear());
      revalidateStory();
    }
  }, [subCommentCreateDone]);

  useEffect(() => {
    if (subCommentDeleteDone) {
      toastSuccessMessage("답글을 성공적으로 삭제했습니다.");
      dispatch(commentSlice.actions.subCommentDeleteClear());
      revalidateStory();
    }
  }, [subCommentDeleteDone]);

  useEffect(() => {
    if (storyLikeDone) {
      toastSuccessMessage("좋아요!💓");
      dispatch(storySlice.actions.storyLikeClear());
      dispatch(getUserInfoAction());
      revalidateStory();
    }
  }, [storyLikeDone]);

  useEffect(() => {
    if (storyDislikeDone) {
      toastSuccessMessage("좋아요 취소💔");
      dispatch(storySlice.actions.storyDislikeClear());
      dispatch(getUserInfoAction());
      revalidateStory();
    }
  }, [storyDislikeDone]);

  useEffect(() => {
    if (commentLikeDone) {
      toastSuccessMessage("댓글 좋아요!💓");
      dispatch(commentSlice.actions.commentLikeClear());
      dispatch(getUserInfoAction());
      revalidateStory();
    }
  }, [commentLikeDone]);

  useEffect(() => {
    if (commentDislikeDone) {
      toastSuccessMessage("댓글 좋아요 취소💔");
      dispatch(commentSlice.actions.commentDislikeClear());
      dispatch(getUserInfoAction());
      revalidateStory();
    }
  }, [commentDislikeDone]);

  const onClickScrollDown = useCallback(() => {
    (postRef?.current as HTMLDivElement).scrollIntoView({ behavior: "smooth" });
  }, []);

  const onClickEditBtn = useCallback(() => {
    if (user && isOwner) {
      dispatch(storySlice.actions.storyEditSet({ story }));
      router.push("/story/post");
    }
  }, [user, isOwner]);
  const onClickConfirm = useCallback(() => {
    if (user && isOwner) {
      dispatch(storyDeleteAction(story?.id as number));
      router.push(`/story`);
      toastSuccessMessage("연대기를 삭제했습니다.");
    }
  }, [user, isOwner, story]);

  return (
    <StoryPostWrapper>
      <StoryPostLayout>
        <StoryPostThubnail story={story} />
        {isOwner && (
          <>
            <h2 className="main-title">연대기 관리 (작성자 전용)</h2>
            <div className="story-manage-wrapper">
              <button onClick={onClickEditBtn} className="edit-btn">
                <EditOutlined />
                연대기 수정
              </button>
              <button
                onClick={() =>
                  toastConfirmMessage(
                    onClickConfirm,
                    "정말 이 연대기를 삭제할까요?",
                    "삭제해주세요."
                  )
                }
                className="delete-btn"
              >
                <DeleteOutlined />
                연대기 삭제
              </button>
            </div>
          </>
        )}
        <h2 className="main-title">
          연대기 위치 <span>{story?.region}</span>
        </h2>
        {/* {story && <CountryMap lat={story?.lat} lng={story?.lng} />} */}
        <Divider />
        {story && <StoryPost story={story} />}
        <StoryArticleList grid={3} gap="1rem" setSize={setSize} stories={stories} />
      </StoryPostLayout>
    </StoryPostWrapper>
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

export default index;
