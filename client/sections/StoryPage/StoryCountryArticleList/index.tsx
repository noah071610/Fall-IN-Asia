import SmallCard from "@components/Cards/SmallCard";
import { ICountry } from "@typings/db";
import { noRevalidate } from "config";
import React, { FC, useState } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { StoryCountryArticleListWrapper } from "./styles";

interface IProps {}

const StoryCountryArticleList: FC<IProps> = () => {
  const {
    data: countries,
    error,
    revalidate,
  } = useSWR<ICountry[], any>("/country", fetcher, noRevalidate);
  return (
    <StoryCountryArticleListWrapper>
      {countries?.slice(0, 3).map((v, i) => {
        return (
          <>
            <div style={{ backgroundImage: `url(${v.image_src})` }} className="country-image">
              <h3>{v.name}</h3>

              <div className="overlay" />
            </div>
          </>
        );
      })}
    </StoryCountryArticleListWrapper>
  );
};

export default StoryCountryArticleList;
