import CountryMap from "@components/CountryMap";
import CountrySelectMap from "@components/CountrySelectMap";
import { ICountry } from "@typings/db";
import React, { FC, LegacyRef, RefObject, useState } from "react";
import { StoryPostInfoWrapper } from "./styles";

interface IProps {
  country: ICountry;
}

const StoryPostInfo: FC<IProps> = ({ country }) => {
  const [state, setstate] = useState();
  return (
    <StoryPostInfoWrapper>
      <CountryMap />
    </StoryPostInfoWrapper>
  );
};

export default StoryPostInfo;
