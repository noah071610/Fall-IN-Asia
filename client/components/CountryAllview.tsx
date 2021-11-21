import React, { FC, useCallback } from "react";
import { ICountry } from "@typings/db";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE, MD_SIZE, SM_SIZE, XLG_SIZE } from "config";
import shortid from "shortid";
import { useTranslation } from "react-i18next";
import router from "next/router";
import { TFunction } from "next-i18next";

const CountryAllviewWrapper = styled.div`
  ${tw`w-full rounded-2xl bg-white p-4 pb-8 mt-4`}
  .country-card-wrapper {
    ${tw`flex flex-wrap`}
  }
  h3 {
    ${tw`text-sm font-bold`}
    ${tw`mb-4 mt-6`}
  }
  h3:first-of-type {
    ${tw`mt-4`}
  }
  @media (max-width: ${XLG_SIZE}) {
    ${tw`px-0`}
    h3 {
      ${tw`pl-4`}
    }
  }
`;

const CountryList = styled.li`
  ${tw`py-2 pr-8 pl-4 cursor-pointer rounded-md w-auto hover:bg-gray-100 mb-2 mr-2`}
  ${FLEX_STYLE("center", "center")};
  img {
    ${tw`rounded-md w-16 h-16`}
  }
  .country-desc {
    ${tw`text-xs ml-4`}
    h4 {
      ${tw`pb-1`}
    }
  }
  @media (max-width: ${MD_SIZE}) {
    ${tw`pr-4`}
    img {
      ${tw`w-12 h-12`}
    }
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`m-0`}
    .country-desc {
      ${tw`ml-2`}
    }
  }
`;

const CountryListCard = ({
  isMain,
  country,
  t,
}: {
  isMain: boolean | undefined;
  country: ICountry;
  t: TFunction;
}) => {
  const onClickCountryListCard = useCallback(
    (country: ICountry) => {
      router.push(`${isMain ? "/country/" : "/story?country="}${country?.code}`);
    },
    [isMain]
  );
  return (
    <CountryList onClick={() => onClickCountryListCard(country)}>
      <img
        src={country?.image_src.replace("&w=200", "&w=80").replace("&p=80", "&p=100")}
        alt={country?.name + "_card_image"}
      />
      <div className="country-desc">
        <h4>{t(`country.${country?.name}`)}</h4>
        <span className="count">
          {t("main.postCount")}: {country?.moments?.length + country?.stories?.length}
        </span>
      </div>
    </CountryList>
  );
};

interface IProps {
  countries: ICountry[] | undefined;
  isMain?: boolean;
}

const CountryAllview: FC<IProps> = ({ countries, isMain }) => {
  const { t } = useTranslation("common");
  return (
    <CountryAllviewWrapper style={isMain ? {} : { marginTop: 0, paddingTop: 0 }}>
      <h3>{t("country.northEastAsia")}</h3>
      <div className="country-card-wrapper">
        {countries
          ?.filter((v) => v.continent === "northEastAsia")
          .map((v) => {
            return <CountryListCard t={t} isMain={isMain} country={v} key={shortid.generate()} />;
          })}
      </div>
      <h3>{t("country.southEastAsia")}</h3>
      <div className="country-card-wrapper">
        {countries
          ?.filter((v) => v.continent === "southEastAsia")
          .map((v) => {
            return <CountryListCard t={t} isMain={isMain} country={v} key={shortid.generate()} />;
          })}
      </div>
      <h3>{t("country.southAsia")}</h3>
      <ul className="country-card-wrapper">
        {countries
          ?.filter((country) => country.continent === "southAsia")
          .map((v) => (
            <CountryListCard t={t} isMain={isMain} country={v} key={shortid.generate()} />
          ))}
      </ul>
    </CountryAllviewWrapper>
  );
};

export default CountryAllview;
