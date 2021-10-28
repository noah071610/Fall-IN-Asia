import React, { FC, memo, useState } from "react";
import { PostAsideNavWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import router, { useRouter } from "next/router";
import { IArticle, IStory } from "@typings/db";
import { useEffect } from "react";
import Scrollspy from "react-scrollspy";
import ReactHtmlParser from "react-html-parser";
import { noRevalidate } from "config";
import shortid from "shortid";
import { useTranslation } from "react-i18next";
interface IProps {}

const PostAsideNav: FC<IProps> = () => {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const [headers, setHeaders] = useState<string[]>([]);
  const [hdClassList, setHdClassList] = useState<string[]>([]);
  const { data: postData } = useSWR<IStory | IArticle>(
    query?.storyId
      ? `/story/${query?.code}/${query?.storyId}`
      : query?.articleId
      ? `/article/${query?.articleId}`
      : null,
    fetcher,
    noRevalidate
  );

  useEffect(() => {
    if (postData) {
      const headers =
        postData?.content
          ?.match(/<h1([^])*?.*?<\/h1>|<h2([^])*?.*?<\/h2>/g)
          ?.join(",")
          .split(",") || [];
      setHdClassList(Array.from({ length: headers.length }, (v, i) => "header_" + (i + 1)));
      setHeaders(headers);
    }
  }, [postData]);

  return (
    <PostAsideNavWrapper>
      <div className="aside-quick-viewer">
        <h3
          onClick={() => {
            scrollTo({ top: 0 });
          }}
          className="aside-story-title"
        >
          {postData?.title}
        </h3>
        <Scrollspy
          items={hdClassList?.concat(["main_post", "user_info", "comment", "article_list"])}
          className="aside-header-list"
          currentClassName="is-current"
          offset={100}
        >
          <a href="#main_post">
            <h1>{t("post.postTop")}</h1>
          </a>
          {headers?.map((v, i) => {
            return (
              <a key={shortid.generate()} href={`#header_${i + 1}`}>
                {ReactHtmlParser(v as string)}
              </a>
            );
          })}

          {query?.storyId && (
            <a href="#user_info">
              <h1>{t("post.storyInfo")}</h1>
            </a>
          )}
          {query?.storyId && (
            <a href="#user_info">
              <h2>{t("post.userProfile")}</h2>
            </a>
          )}
          {query?.storyId && (
            <a href="#comment">
              <h2>{t("post.commentView")}</h2>
            </a>
          )}
          <a href="#article_list">
            <h2>{t("post.anotherPost")}</h2>
          </a>
          <a
            onClick={() => {
              query?.storyId ? router.push(`/story`) : router.push(`/news`);
            }}
          >
            <h1>{t("main.back")}</h1>
          </a>
        </Scrollspy>
      </div>
    </PostAsideNavWrapper>
  );
};

export default memo(PostAsideNav);
