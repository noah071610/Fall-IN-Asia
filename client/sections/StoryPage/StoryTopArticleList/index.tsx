import BoxCard from "@components/Cards/BoxCard";
import React, { FC, useRef, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { StoryTopArticleListWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { IStory } from "@typings/db";
import useHtmlConverter from "@hooks/useHtmlConverter";

interface IProps {}

const StoryTopArticleList: FC<IProps> = () => {
  const [state, setstate] = useState();
  const scrollbars = useRef(null);
  const { data: popularPosts } = useSWR<IStory[]>("/story/popular", fetcher);
  return (
    <StoryTopArticleListWrapper>
      <BoxCard />
      <Scrollbars className="top-story-list" ref={scrollbars} autoHide>
        {popularPosts?.map((v, i) => (
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
      </Scrollbars>
    </StoryTopArticleListWrapper>
  );
};

export default StoryTopArticleList;
