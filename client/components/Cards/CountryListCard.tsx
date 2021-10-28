import { ICountry } from "@typings/db";
import router from "next/router";
import React, { FC, memo, useCallback } from "react";
import styled from "@emotion/styled";
import { FLEX_STYLE, MD_SIZE, SM_SIZE } from "config";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

const CountryListCardWrapper = styled.div`
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

interface IProps {
  country: ICountry;
  isMain?: boolean;
}

const CountryListCard: FC<IProps> = ({ country, isMain }) => {
  const { t } = useTranslation("common");
  const onClickCountryListCard = useCallback(() => {
    if (isMain) {
      router.push(`/country/${country?.code}`);
    } else {
      router.push(`/story?country=${country?.code}`);
    }
  }, []);
  return (
    <CountryListCardWrapper onClick={onClickCountryListCard}>
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
    </CountryListCardWrapper>
  );
};

export default memo(CountryListCard);
