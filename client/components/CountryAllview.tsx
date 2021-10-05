import React, { FC } from "react";
import { ICountry } from "@typings/db";
import CountryListCard from "@components/Cards/CountryListCard";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { SM_SIZE, XLG_SIZE } from "config";
import shortid from "shortid";
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

interface IProps {
  countries: ICountry[] | undefined;
  isMain?: boolean;
}

const CountryAllview: FC<IProps> = ({ countries, isMain }) => {
  return (
    <CountryAllviewWrapper style={isMain ? {} : { marginTop: 0, paddingTop: 0 }}>
      <h3>동북아시아</h3>
      <div className="country-card-wrapper">
        {countries
          ?.filter((v) => v.continent === "동북아시아")
          .map((v) => {
            return <CountryListCard isMain={isMain} country={v} key={shortid.generate()} />;
          })}
      </div>
      <h3>동남아시아</h3>
      <div className="country-card-wrapper">
        {countries
          ?.filter((v) => v.continent === "동남아시아")
          .map((v) => {
            return <CountryListCard isMain={isMain} country={v} key={shortid.generate()} />;
          })}
      </div>
      <h3>남아시아</h3>
      <div className="country-card-wrapper">
        {countries
          ?.filter((v) => v.continent === "남아시아")
          .map((v) => {
            return <CountryListCard isMain={isMain} country={v} key={shortid.generate()} />;
          })}
      </div>
    </CountryAllviewWrapper>
  );
};

export default CountryAllview;
