import ArticleColumnCard from "@components/Cards/ArticleColumnCard";
import React, { FC, useRef, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { StoryTopArticleListWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { IStory } from "@typings/db";
import useHtmlConverter from "@hooks/useHtmlConverter";
import { slice } from "lodash";
import ArticleCard from "@components/Cards/ArticleCard";
import ArticleImageCard from "@components/Cards/ArticleImageCard";

interface IProps {}

const StoryTopArticleList: FC<IProps> = () => {
  const [state, setstate] = useState();
  const scrollbars = useRef(null);
  const { data: popularPosts } = useSWR<IStory[]>("/story/popular", fetcher);
  return (
    <StoryTopArticleListWrapper>
      {popularPosts && <ArticleCard story={popularPosts[0]} />}
      {/* {popularPosts && (
        <div className="popular-story-list">
          <ArticleImageCard story={popularPosts[0]} />
          <ArticleImageCard story={popularPosts[0]} />
          <ArticleImageCard story={popularPosts[0]} />
          <ArticleImageCard story={popularPosts[0]} />
          <ArticleImageCard story={popularPosts[0]} />
        </div>
      )} */}
      {/* <Scrollbars className="top-story-list" ref={scrollbars} autoHide>
        {popularPosts?.slice(1).map((v, i) => (
          <li key={i}>
            <div className="image-wrapper">
              <img src={v.thumbnail} alt="article-image" />
            </div>
            <div className="story-list-desc">
              <h4>{v.country.name}</h4>
              <p>{useHtmlConverter(v?.content)}</p>
            </div>
          </li>
        ))}
      </Scrollbars> */}
    </StoryTopArticleListWrapper>
  );
};

export default StoryTopArticleList;
