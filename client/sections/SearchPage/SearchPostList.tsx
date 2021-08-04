import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import ArticleColumnCard from "@components/Cards/ArticleColumnCard";
import MomentSmallCard from "@components/Cards/ArticleSmallCard";
import { IMoment, IStory } from "@typings/db";
import { Divider } from "antd";
import React, { FC, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { GRID_STYLE } from "config";

const SearchPostListWrapper = styled.div`
  .searched-post-wrapper {
    ${GRID_STYLE("1rem", "repeat(4,1fr)")}
    @media (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }
  }
`;

interface IProps {
  stories?: IStory[];
  moments?: IMoment[];
}

const SearchPostList: FC<IProps> = ({ stories, moments }) => {
  const [onMoreStories, setOnMoreStories] = useState(false);
  const onClickMoreStories = useCallback(() => {
    setOnMoreStories((prev) => !prev);
  }, []);
  return (
    <SearchPostListWrapper>
      <div className="searched-post-wrapper">
        {stories?.length! > 0 &&
          stories?.slice(0, 9).map((v, i) => <ArticleColumnCard key={i} story={v} />)}
        {moments?.length! > 0 &&
          moments
            ?.slice(0, 9)
            .map((v, i) => <MomentSmallCard isSearchPage={true} moment={v} key={i} />)}
      </div>
      {stories?.length! > 8 ||
        (moments?.length! > 8 && (
          <Divider orientation="center">
            <a onClick={onClickMoreStories} className="more-icon">
              {onMoreStories ? <MinusCircleOutlined /> : <PlusCircleOutlined />}
            </a>
          </Divider>
        ))}
    </SearchPostListWrapper>
  );
};

export default SearchPostList;
