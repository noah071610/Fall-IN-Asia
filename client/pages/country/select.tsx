import React, { FC, useCallback, useMemo, useState } from "react";
import AutoCompleteForm from "@components/AutoCompleteForm";
import CountryList from "@components/CountryPreviewSlide";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { FLEX_STYLE, noRevalidate, toastErrorMessage } from "config";
import { ICountry } from "@typings/db";
import styled from "@emotion/styled";
import router from "next/router";
import LGLayout from "@layout/LGLayout";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import MainCountryAllview from "@components/CountryAllview";
import tw from "twin.macro";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

const GobackBtn = styled.div`
  ${FLEX_STYLE("flex-end", "center")};
  margin-bottom: 2rem;
  button {
    ${tw`bg-white w-28 rounded-xl px-4 py-2 hover:shadow-md`}
  }
`;

const AutoCompleteWrapper = styled.div`
  ${tw`bg-white flex p-2 rounded-2xl`}
  .search-bar {
    width: 100%;
  }
  .autoComplete-form {
    width: 100%;
    .ant-select-selector {
      border: none;
      &:focus {
        border: none !important;
      }
      &:hover {
        border: none !important;
      }
    }
  }
  .search-btn {
    ${tw`w-20 ml-4 rounded-xl cursor-pointer bg-gray-100 hover:bg-gray-300`}
  }
`;

interface IProps {
  initialCountries: ICountry[];
}

const CountrySelectPage: FC<IProps> = ({ initialCountries }) => {
  const { t } = useTranslation("common");
  const { data: countries } = useSWR<ICountry[]>("/country", fetcher, {
    fallbackData: initialCountries,
    ...noRevalidate,
  });
  const [selectedCountry, setCountry] = useState("");
  const countryOptions = useMemo(
    () =>
      countries?.map((v) => {
        return { value: v.name, code: v.code };
      }),
    [countries]
  );
  const onClickGotoCountryPage = useCallback(() => {
    let pickCountry = countryOptions?.find((v) => v.value === selectedCountry);
    if (pickCountry) {
      router.push(`/country/${pickCountry.code}`);
    } else {
      toastErrorMessage(t("post.wrongCountry"));
      return;
    }
  }, [selectedCountry, countryOptions]);
  return (
    <LGLayout>
      <GobackBtn>
        <button onClick={() => router.back()}>{t("post.back")}</button>
      </GobackBtn>
      <h2 className="main-title">{t("main.popularCountry")}</h2>
      <CountryList isMain={true} slidesPerView={4.7} />
      <h2 className="main-title">{t("nav.selectCountry")}</h2>
      <AutoCompleteWrapper>
        <div className="search-bar">
          <AutoCompleteForm
            countryOptions={countryOptions}
            selectedCountry={selectedCountry}
            setCountry={setCountry}
          />
        </div>
        <button className="search-btn" onClick={onClickGotoCountryPage}>
          {t("nav.move")}
        </button>
      </AutoCompleteWrapper>
      <MainCountryAllview isMain={true} countries={countries} />
    </LGLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, locale }: GetServerSidePropsContext) => {
      const cookie = req ? req.headers.cookie : "";
      if (axios.defaults.headers) {
        axios.defaults.headers.Cookie = "";
        if (req && cookie) {
          axios.defaults.headers.Cookie = cookie;
        }
      }
      await store.dispatch(getUserInfoAction());
      const initialCountries = await fetcher(`/country`);
      return {
        props: {
          initialCountries,
          ...(await serverSideTranslations(locale as string, ["common"])),
        },
      };
    }
);

export default CountrySelectPage;
