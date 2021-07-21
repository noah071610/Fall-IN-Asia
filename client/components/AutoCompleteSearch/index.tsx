import React, { FC, useMemo } from "react";
import { AutoCompleteSearchWrapper } from "./styles";
import { ICountry } from "@typings/db";
import { AutoComplete } from "antd";
import { useCallback } from "react";

interface IProps {
  countryOptions: { value: string; code: string }[] | undefined;
  selectedCountry: string;
  setCountry: (value: string) => void;
}

const AutoCompleteSearch: FC<IProps> = ({ countryOptions, selectedCountry, setCountry }) => {
  const onChangeCountry = useCallback((value: string) => {
    setCountry(value);
  }, []);
  return (
    <AutoCompleteSearchWrapper>
      <AutoComplete
        allowClear={true}
        className="autoComplete-form"
        options={
          selectedCountry !== ""
            ? countryOptions
            : countryOptions?.slice(0, 8).concat([{ value: "...", code: "" }])
        }
        value={selectedCountry}
        onChange={onChangeCountry}
        placeholder="국가검색"
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </AutoCompleteSearchWrapper>
  );
};

export default AutoCompleteSearch;
