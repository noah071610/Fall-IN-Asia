import React, { FC, useCallback, useMemo, useState } from "react";
import MainLayout from "@layout/MainLayout";
import AutoCompleteSearch from "@components/AutoCompleteSearch";
import MainCountryList from "@sections/MainPage/MainCountryList";
import CountryCardSilde from "@components/CountryCardSilde";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import {
  FLEX_STYLE,
  GRAY_COLOR,
  HOVER_GRAY,
  toastErrorMessage,
  toastSuccessMessage,
  WHITE_STYLE,
} from "config";
import { ICountry } from "@typings/db";
import styled from "@emotion/styled";
import router from "next/router";
import LG_Layout from "@layout/LG_Layout";

const GobackBtn = styled.div`
  ${FLEX_STYLE("flex-end", "center")};
  margin-bottom: 2rem;
  button {
    ${WHITE_STYLE(false, "120px", 10)};
    padding: 0.55rem 1rem;
  }
`;

const AutoCompleteWrapper = styled.div`
  ${WHITE_STYLE()};
  display: flex;
  padding: 0.7rem;
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
    width: 80px;
    margin-left: 1rem;
    border-radius: 10px;
    cursor: pointer;
    background: ${GRAY_COLOR};
  }
`;

interface IProps {}

const select: FC<IProps> = () => {
  const { data: countries, error, revalidate } = useSWR<ICountry[]>("/country", fetcher);
  const [selectedCountry, setCountry] = useState("");
  if (error) {
    toastErrorMessage("데이터를 가져오지 못했습니다.");
  }
  const countryOptions = useMemo(
    () =>
      countries?.map((v, i) => {
        return { value: v.name, code: v.code };
      }),
    [countries]
  );
  const onClickGotoCountryPage = useCallback(() => {
    let pickCountry = countryOptions?.find((v) => v.value === selectedCountry);
    if (pickCountry) {
      router.push(`/country/${pickCountry.code}`);
    } else {
      toastErrorMessage("유효하지 않은 국가입니다. 다시 확인해주세요.");
      return;
    }
  }, [selectedCountry, countryOptions]);
  return (
    <LG_Layout>
      <GobackBtn>
        <button onClick={() => router.back()}>뒤로가기</button>
      </GobackBtn>
      <h2 className="main-title">인기여행지</h2>
      <CountryCardSilde slidesPerView={4.7} />
      <h2 className="main-title">국가선택</h2>
      <AutoCompleteWrapper>
        <div className="search-bar">
          <AutoCompleteSearch
            countryOptions={countryOptions}
            selectedCountry={selectedCountry}
            setCountry={setCountry}
          />
        </div>
        <button className="search-btn" onClick={onClickGotoCountryPage}>
          이동
        </button>
      </AutoCompleteWrapper>
      <MainCountryList countries={countries} />
    </LG_Layout>
  );
};

export default select;
