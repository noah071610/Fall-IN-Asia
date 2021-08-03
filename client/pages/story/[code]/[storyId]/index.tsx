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
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { storySlice } from "slices/story";
import { commentSlice } from "slices/comment";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import { storyDeleteAction } from "actions/story";
import tw from "twin.macro";
import PostLayout from "@layout/PostLayout";
import StoryArticleList from "@sections/StoryPage/StoryArticleList";
import ReactHtmlParser from "react-html-parser";
import PostThubnail from "@components/Post/PostThubnail";
import CountryMap from "@components/Maps/CountryMap";
import PostProfile from "@components/Post/PostProfile";
import PostPagination from "@components/Post/PostPagination";
import PostComment from "@components/Post/PostComment";

const StoryPostWrapper = styled.div`
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
  .post-content {
    ${tw`pb-16 relative`}
  }
`;

interface IProps {
  initialStories: IStory[][];
  initialStory: IStory;
}

const index: FC<IProps> = ({ initialStories, initialStory }) => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [ip, setIP] = useState("");
  const [isOwner, setIsOwner] = useState(false);
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
    {
      initialData: initialStory,
      ...noRevalidate,
    }
  );
  const { data: stories, setSize } = useSWRInfinite<IStory[]>(
    (index) => `/story?page=${index + 1}&filter=${query?.filter || ""}`,
    fetcher,
    {
      initialData: initialStories,
      ...noRevalidate,
    }
  );

  const getClientIp = async () => {
    await fetch("https://jsonip.com", { mode: "cors" })
      .then((resp) => resp.json())
      .then((ip) => {
        localStorage.setItem("client_ip", ip.ip.replaceAll(".", "").slice(3));
        setIP(ip.ip.replaceAll(".", "").slice(3));
      })
      .catch(() => {
        setIP("00000000");
      });
  };

  useEffect(() => {
    if (story) {
      let contentHeaders = document.querySelectorAll(
        ".post-content > h1 , .post-content > h2 ,.post-content > h3"
      );
      contentHeaders.forEach((v, i) => {
        const span = document.createElement("span");
        span.setAttribute("id", `header_${i + 1}`);
        span.classList.add("anchor-offset-controller");
        v.classList.add("anchor-offset-parent");
        v.appendChild(span);
      });
    }
  }, [story]);

  useEffect(() => {
    if (localStorage.getItem("client_ip")) {
      setIP(JSON.parse(localStorage.getItem("client_ip")!));
    } else {
      getClientIp();
    }
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

  const onClickEditBtn = useCallback(() => {
    if (user && isOwner) {
      router.push(`/story/post?code=${query?.code}&storyId=${query?.storyId}`);
    }
  }, [user, isOwner, query]);
  const onClickConfirm = useCallback(() => {
    if (user && isOwner) {
      dispatch(storyDeleteAction(story?.id as number));
      router.push(`/story`);
      toastSuccessMessage("연대기를 삭제했습니다.");
    }
  }, [user, isOwner, story]);

  return (
    <StoryPostWrapper>
      <PostLayout>
        {story && (
          <>
            <PostThubnail story={story} />
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
            <CountryMap lat={story?.lat} lng={story?.lng} />
            <Divider />
            <div className="post-content">
              <span id="main_post" className="anchor-offset-controller" />
              {ReactHtmlParser(story?.content as string)}
            </div>
            <PostProfile story={story} />
            <PostPagination userId={story?.user.id} />
            <PostComment story={story} />
          </>
        )}
        <StoryArticleList grid={3} gap="1rem" setSize={setSize} stories={stories} />
      </PostLayout>
    </StoryPostWrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(getUserInfoAction());
      const initialStory = await fetcher(`/story/${params?.code}/${params?.storyId}/0`);
      let initialStories = await fetcher(`/story?code=${params?.code}&page=1`);
      initialStories = [initialStories];
      return {
        props: { initialStory, initialStories },
      };
    }
);

export default index;
