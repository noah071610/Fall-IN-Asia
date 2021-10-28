import React, { FC } from "react";
import { AutoComplete } from "antd";
import { useCallback } from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  countryOptions: { value: string; code: string }[] | undefined;
  selectedCountry: string;
  setCountry: (value: string) => void;
  disabled?: boolean;
}

const AutoCompleteForm: FC<IProps> = ({
  countryOptions,
  selectedCountry,
  setCountry,
  disabled,
}) => {
  const { t } = useTranslation("common");
  const onChangeCountry = useCallback((value: string) => {
    setCountry(value);
  }, []);
  return (
    <AutoComplete
      allowClear={true}
      disabled={disabled}
      className="autoComplete-form"
      options={
        selectedCountry !== ""
          ? countryOptions
          : countryOptions?.slice(0, 8).concat([{ value: "...", code: "" }])
      }
      value={selectedCountry}
      onChange={onChangeCountry}
      placeholder={t("post.selectCountryPlaceHolder")}
      filterOption={(inputValue, option) =>
        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};

export default memo(AutoCompleteForm);
