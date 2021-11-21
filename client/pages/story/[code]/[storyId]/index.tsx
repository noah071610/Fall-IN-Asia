import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  FLEX_STYLE,
  getUserCookieWithServerSide,
  noRevalidate,
  SM_SIZE,
  toastErrorMessage,
  toastSuccessMessage,
  WORLD_IMAGE,
} from "config";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import router, { useRouter } from "next/router";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import fetcher from "utils/fetcher";
import { IStory } from "@typings/db";
import { Divider } from "antd";
import { wrapper } from "configureStore";
import axios from "axios";
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
import { GetServerSidePropsContext } from "next";
import html2textConverter from "utils/html2textConverter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
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

const StoryPostPage: FC<IProps> = ({ initialStories, initialStory }) => {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const [isOwner, setIsOwner] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  const { data: story, mutate: revalidateStory } = useSWR<IStory>(
    `/story/${query?.code}/${query?.storyId}`,
    fetcher,
    {
      fallbackData: initialStory,
      ...noRevalidate,
    }
  );
  const { data: stories, setSize } = useSWRInfinite<IStory[]>(
    (index) => `/story?page=${index + 1}`,
    fetcher,
    {
      fallbackData: initialStories,
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
          toastSuccessMessage(t("message.story.remove"));
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
        <title>
          {story?.title} - {story?.country?.name}/{story?.id}
          {t("post.counting") + t("post.story")} | Fall IN Asia
        </title>
        <meta name="description" content={html2textConverter(story?.content).slice(0, 100)} />
        <meta
          property="og:title"
          content={`${story?.title}... - ${story?.country?.name}/
          ${story?.id}${t("post.counting") + t("post.story")} | Fall IN Asia`}
        />
        <meta
          property="og:description"
          content={html2textConverter(story?.content).slice(0, 100)}
        />
        <meta property="og:image" content={story?.thumbnail || WORLD_IMAGE} />
        <meta
          property="og:url"
          content={`https://fallinasia.com/country/${story?.code}/${story?.id}`}
        />
      </Head>
      <StoryPostWrapper>
        <PostLayout>
          {story && (
            <>
              <PostThubnail story={story} />
              {isOwner && (
                <>
                  <h2 className="main-title">{t("post.storyManagement")}</h2>
                  <div className="story-manage-wrapper">
                    <button onClick={onClickEditBtn} className="edit-btn">
                      <EditOutlined />
                      {t("post.storyEdit")}
                    </button>
                    <button
                      onClick={() =>
                        toastConfirmMessage(
                          onClickConfirmDelete,
                          t("message.story.confirmRemove"),
                          `${t("main.yes")} ${t("message.removeIt")}`,
                          t("main.no")
                        )
                      }
                      className="delete-btn"
                    >
                      <DeleteOutlined />
                      {t("post.storyDelete")}
                    </button>
                  </div>
                </>
              )}
              <h2 className="main-title">
                {t("post.storyRegion")} <span>{story?.region}</span>
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params, locale }: GetServerSidePropsContext) => {
      getUserCookieWithServerSide(req, store);
      const initialStory = await fetcher(
        `/story/${params?.code}/${params?.storyId}?viewCount=true`
      );
      let initialStories = await fetcher(`/story?page=1`);
      initialStories = [initialStories];
      return {
        props: {
          initialStory,
          initialStories,
          ...(await serverSideTranslations(locale as string, ["common"])),
        },
      };
    }
);

export default StoryPostPage;
