import { ICountry } from "@typings/db";
import router from "next/router";
import React, { FC, useCallback } from "react";
import styled from "@emotion/styled";
import { FLEX_STYLE, SM_SIZE } from "config";
import tw from "twin.macro";

const CountryImageCardWrapper = styled.div`
  ${tw`relative rounded-xl w-full h-full cursor-pointer`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  ${FLEX_STYLE("center", "center")};
  .overlay {
    ${tw`rounded-2xl`}
  }
  h3 {
    ${tw`z-10`}
    ${tw`text-lg font-bold text-white`}
  }
  &:hover {
    .overlay {
      ${tw`opacity-30`}
    }
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`rounded-md`}
    .overlay {
      ${tw`rounded-md`}
    }
    h3 {
      ${tw`text-sm`}
    }
  }
`;

interface IProps {
  country: ICountry;
  isMain?: boolean;
}

const CountryImageCard: FC<IProps> = ({ country, isMain }) => {
  const onClickArticleCountryImageCard = useCallback(() => {
    if (isMain) {
      router.push(`/country/${country?.code}`);
    } else {
      router.push(`/story?country=${country?.code}`);
    }
  }, [isMain]);
  return (
    <CountryImageCardWrapper
      onClick={onClickArticleCountryImageCard}
      style={{ backgroundImage: `url(${country.image_src})` }}
    >
      <h3>{country.name}</h3>
      <div className="overlay" />
    </CountryImageCardWrapper>
  );
};

export default CountryImageCard;
