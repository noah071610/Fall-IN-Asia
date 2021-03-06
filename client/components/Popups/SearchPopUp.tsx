import { css } from "@emotion/react";
import { AutoComplete } from "antd";
import { searchOptions } from "config";
import { LegacyRef, memo, useCallback } from "react";
import { FC, KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

const SearchPopUpWrapper = (width: string) => css`
  width: ${width};
  .ant-select {
    ${tw`w-full`}
    input,
    .ant-select-selector {
      ${tw`w-full bg-transparent h-full px-1`}
      &:hover {
        border: none !important;
        box-shadow: none !important;
      }
      &:focus {
        border: none !important;
        box-shadow: none !important;
      }
    }
  }
`;

interface IProps {
  searchWord: string;
  onChangeSearchWord: () => void;
  setSearchWord: (value: string) => void;
  onPressEnter: (e: KeyboardEvent<Element>) => void;
  inputRef: LegacyRef<HTMLInputElement> | null;
  width: string;
}

const SearchPopUp: FC<IProps> = ({
  searchWord,
  onChangeSearchWord,
  onPressEnter,
  inputRef,
  width,
  setSearchWord,
}) => {
  const { t } = useTranslation("common");
  const onSelectSearchWord = useCallback((value: string) => {
    setSearchWord(value);
  }, []);
  return (
    <div
      css={SearchPopUpWrapper(width)}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <AutoComplete
        children={
          <input
            value={searchWord}
            onChange={onChangeSearchWord}
            placeholder={t("search.placeHolder")}
            onKeyPress={onPressEnter}
            ref={inputRef}
          />
        }
        onSelect={onSelectSearchWord}
        options={searchWord === "" ? [] : searchOptions}
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </div>
  );
};

export default memo(SearchPopUp);
