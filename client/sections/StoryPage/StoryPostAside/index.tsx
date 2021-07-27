import React, { FC, useState } from "react";
import { StoryPostAsideWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import router, { useRouter } from "next/router";
import { IStory } from "@typings/db";
import { useEffect } from "react";
import Scrollspy from "react-scrollspy";
import ReactHtmlParser from "react-html-parser";
interface IProps {}

const StoryPostAside: FC<IProps> = () => {
  const { query } = useRouter();
  const [headers, setHeaders] = useState<string[]>([]);
  const [hdClassList, setHdClassList] = useState<string[]>([]);
  const { data: story } = useSWR<IStory>(`/story/${query?.code}/${query?.storyId}/0`, fetcher);

  useEffect(() => {
    if (story) {
      const headers =
        story?.content
          ?.match(/<h1([^])*?.*?<\/h1>|<h2([^])*?.*?<\/h2>|<h3([^])*?.*?<\/h3>/g)
          ?.join(",")
          .split(",") || [];
      setHdClassList(Array.from({ length: headers.length }, (v, i) => "header_" + (i + 1)));
      setHeaders(headers);
    }
  }, [story]);

  return (
    <StoryPostAsideWrapper>
      <div className="aside-quick-viewer">
        <h3
          onClick={() => {
            scrollTo({ top: 0 });
          }}
          className="aside-story-title"
        >
          {story?.title}
        </h3>
        <Scrollspy
          items={hdClassList?.concat(["main_post", "user_info", "comment", "article_list"])}
          className="aside-header-list"
          currentClassName="is-current"
        >
          <a href="#main_post">
            <h1>본문</h1>
          </a>
          {headers?.map((v, i) => {
            return (
              <a key={i} href={`#header_${i + 1}`}>
                {ReactHtmlParser(v as string)}
              </a>
            );
          })}
          <a href="#user_info">
            <h1>연대기 정보</h1>
          </a>
          <a href="#user_info">
            <h2>작성자 프로필</h2>
          </a>
          <a href="#comment">
            <h2>댓글 보기</h2>
          </a>
          <a href="#article_list">
            <h2>다른 연대기</h2>
          </a>
        </Scrollspy>
      </div>
    </StoryPostAsideWrapper>
  );
};

export default StoryPostAside;
