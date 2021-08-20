import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { FLEX_STYLE, noRevalidate, SM_SIZE, toastErrorMessage, toastSuccessMessage } from "config";
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
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import tw from "twin.macro";
import PostLayout from "@layout/PostLayout";
import StoryArticleList from "@sections/StoryPage/StoryArticleList";
import ReactHtmlParser from "react-html-parser";
import PostThubnail from "@components/Post/PostThubnail";
import PostProfile from "@components/Post/PostProfile";
import PostPagination from "@components/Post/PostPagination";
import PostComment from "@components/Post/PostComment";
import Head from "next/head";
import dynamic from "next/dynamic";
const CountryMap = dynamic(() => import("@components/Maps/CountryMap"));
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
    user-select: none;
    @media (max-width: ${SM_SIZE}) {
      p {
        line-height: 2.3;
      }
      img {
        width: 100%;
      }
    }
  }
`;

interface IProps {
  initialStories: IStory[][];
  initialStory: IStory;
}

const index: FC<IProps> = ({ initialStories, initialStory }) => {
  const { query } = useRouter();
  const [isOwner, setIsOwner] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  const { data: story, revalidate: revalidateStory } = useSWR<IStory>(
    `/story/${query?.code}/${query?.storyId}`,
    fetcher,
    {
      initialData: initialStory,
      ...noRevalidate,
    }
  );
  const { data: stories, setSize } = useSWRInfinite<IStory[]>(
    (index) => `/story?page=${index + 1}`,
    fetcher,
    {
      initialData: initialStories,
      ...noRevalidate,
    }
  );

  useEffect(() => {
    if (story) {
      let contentHeaders = document.querySelectorAll(".post-content > h1 , .post-content > h2");
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
    if (user?.id === story?.user?.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, story]);

  const onClickEditBtn = useCallback(() => {
    if (user && isOwner) {
      router.push(`/story/post?code=${story?.code}&storyId=${story?.id}`);
    }
  }, [user, isOwner]);

  const onClickConfirmDelete = useCallback(() => {
    if (user && isOwner) {
      axios
        .delete(`/story/${story?.id}`)
        .then(() => {
          toastSuccessMessage("연대기를 성공적으로 삭제했습니다.");
          router.push(`/story`);
        })
        .catch((error) => {
          toastErrorMessage(error);
          throw error;
        });
    }
  }, [user, isOwner, story]);

  return (
    <>
      <Head>
        <title>{story?.title} - Fall IN Asia</title>
      </Head>
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
                          onClickConfirmDelete,
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
              {story?.lat && story?.lng && <CountryMap lat={story.lat} lng={story.lng} />}
              <Divider />
              <article className="post-content">
                <span id="main_post" className="anchor-offset-controller" />
                {ReactHtmlParser(story?.content as string)}
              </article>
              <PostProfile story={story} />
              <PostPagination userId={story?.user.id} />
              <PostComment revalidateStory={revalidateStory} story={story} />
            </>
          )}
          <div style={{ height: "3rem" }} />
          <StoryArticleList grid={3} gap="1rem" setSize={setSize} stories={stories} />
        </PostLayout>
      </StoryPostWrapper>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  await store.dispatch(getUserInfoAction());
  const initialStory = await fetcher(`/story/${params?.code}/${params?.storyId}?viewCount=true`);
  let initialStories = await fetcher(`/story?page=1`);
  initialStories = [initialStories];
  return {
    props: { initialStory, initialStories },
  };
});

export default index;
