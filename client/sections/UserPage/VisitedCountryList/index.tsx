import ImageCard from "@components/Cards/ImageCard";
import React, { FC, useMemo, useState } from "react";
import { VisitedCountryListWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { ICountry, IStory } from "@typings/db";
import { noRevalidate } from "config";

interface IProps {
  stories: IStory[];
}

const VisitedCountryList: FC<IProps> = ({ stories }) => {
  return (
    <VisitedCountryListWrapper>
      {stories?.map((v, i) => (
        <li key={i}>
          <div className="image-wrapper">
            <img src={v.country.flag_src} alt="flag_image" />
          </div>
          <span>{v.country.name}</span>
        </li>
      ))}
    </VisitedCountryListWrapper>
  );
};

export default VisitedCountryList;
