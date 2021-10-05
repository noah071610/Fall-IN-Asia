import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import ReactHtmlParser from "react-html-parser";
import { FLEX_STYLE, noRevalidate, SM_SIZE, toastErrorMessage, toastSuccessMessage } from "config";
import router, { useRouter } from "next/router";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import { IArticle } from "@typings/db";
import { Divider } from "antd";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import PostLayout from "@layout/PostLayout";
import NewsArticleList from "@sections/NewsPage/NewsArticleList";
import PostThubnail from "@components/Post/PostThubnail";
import tw from "twin.macro";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import dynamic from "next/dynamic";
import { GetServerSidePropsContext } from "next";

const CountryMap = dynamic(() => import("@components/Maps/CountryMap"));

export const NewsArticleWrapper = styled.div`
  padding-top: 6rem;
  .post-content {
    user-select: none;
    ${tw`pb-16 relative`}
    @media (max-width: ${SM_SIZE}) {
      p {
        line-height: 2.3;
      }
      img {
        width: 100%;
      }
    }
  }
  .article-manage-wrapper {
    ${FLEX_STYLE("center", "center")};
  }
`;

interface IProps {
  initialArticles: IArticle[][];
  initialArticle: IArticle;
}
const NewsPostPage: FC<IProps> = ({ initialArticle, initialArticles }) => {
  const { query } = useRouter();
  const [isOwner, setIsOwner] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  const { data: article } = useSWR<IArticle>(`/article/${query?.articleId}`, fetcher, {
    initialData: initialArticle,
    ...noRevalidate,
  });

  const { data: articles, setSize } = useSWRInfinite<IArticle[]>(
    (index) => `/article?page=${index + 1}`,
    fetcher,
    {
      initialData: initialArticles,
      ...noRevalidate,
    }
  );

  useEffect(() => {
    if (user?.id === article?.user?.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, article]);

  useEffect(() => {
    if (article) {
      let contentHeaders = document.querySelectorAll(".post-content > h1 , .post-content > h2");
      contentHeaders.forEach((v, i) => {
        const span = document.createElement("span");
        span.setAttribute("id", `header_${i + 1}`);
        span.classList.add("anchor-offset-controller");
        v.classList.add("anchor-offset-parent");
        v.appendChild(span);
      });
    }
  }, [article]);

  const onClickConfirmDelete = useCallback(() => {
    if (user && isOwner) {
      axios
        .delete(`/article/${article?.id}`)
        .then(() => {
          toastSuccessMessage("연대기를 성공적으로 삭제했습니다.");
          router.push(`/news`);
        })
        .catch((error) => {
          toastErrorMessage(error);
          throw error;
        });
    }
  }, [user, isOwner, article]);

  const onClickEditBtn = useCallback(() => {
    if (user && isOwner) {
      router.push(`/news/post?articleId=${query?.articleId}`);
    }
  }, [user, isOwner, query]);

  return (
    <NewsArticleWrapper>
      <PostLayout>
        {article && (
          <>
            <PostThubnail article={article} />
            {isOwner && (
              <>
                <h2 className="main-title">관리 (운영자 전용)</h2>
                <div className="article-manage-wrapper">
                  <button onClick={onClickEditBtn} className="edit-btn">
                    <EditOutlined />
                    기사 수정
                  </button>
                  <button
                    onClick={() =>
                      toastConfirmMessage(
                        onClickConfirmDelete,
                        "정말 이 기사를 삭제할까요?",
                        "삭제해주세요."
                      )
                    }
                    className="delete-btn"
                  >
                    <DeleteOutlined />
                    기사 삭제
                  </button>
                </div>
              </>
            )}
            <h2 className="main-title">
              위치 <span>{article?.region}</span>
            </h2>
            <CountryMap lat={article?.lat} lng={article?.lng} />
            <Divider />
            <article className="post-content">
              <span id="main_post" className="anchor-offset-controller" />
              {ReactHtmlParser(article?.content)}
            </article>
          </>
        )}
        <div style={{ marginBottom: "2rem" }} />
        <NewsArticleList setSize={setSize} articles={articles} />
      </PostLayout>
    </NewsArticleWrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }: GetServerSidePropsContext) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(getUserInfoAction());
      let initialArticles = await fetcher(`/article?page=1`);
      initialArticles = [initialArticles];
      const initialArticle = await fetcher(`/article/${params?.articleId}`);
      return {
        props: { initialArticles, initialArticle },
      };
    }
);

export default NewsPostPage;
