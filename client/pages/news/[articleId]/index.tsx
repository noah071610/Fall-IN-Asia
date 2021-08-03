import React, { FC, useEffect } from "react";
import styled from "@emotion/styled";
import ReactHtmlParser from "react-html-parser";
import { FLEX_STYLE, noRevalidate } from "config";
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
import CountryMap from "@components/Maps/CountryMap";
import tw from "twin.macro";

export const NewsArticleWrapper = styled.div`
  padding-top: 6rem;
  .post-content {
    ${tw`pb-16 relative`}
  }
`;

interface IProps {
  initialArticles: IArticle[][];
  initialArticle: IArticle;
}
const index: FC<IProps> = ({ initialArticle, initialArticles }) => {
  const { query } = useRouter();
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
    if (article) {
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
  }, [article]);

  return (
    <NewsArticleWrapper>
      <PostLayout>
        {article && (
          <>
            <PostThubnail article={article} />
            <h2 className="main-title">
              연대기 위치 <span>{article?.region}</span>
            </h2>
            <CountryMap lat={article?.lat} lng={article?.lng} />
            <Divider />
            <div className="post-content">
              <span id="main_post" className="anchor-offset-controller" />
              {ReactHtmlParser(article?.content as string)}
            </div>
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
    async ({ req, res, params }) => {
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

export default index;
