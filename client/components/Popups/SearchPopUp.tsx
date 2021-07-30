import styled from "@emotion/styled";
import { LegacyRef, memo, Ref, RefObject } from "react";
import { FC, KeyboardEvent } from "react";
import tw from "twin.macro";

const SearchPopUpWrapper = styled.div`
  input {
    ${tw`bg-transparent h-full px-2`}
    width:200px
  }
`;

interface IProps {
  searchWord: string;
  onChangeSearchWord: () => void;
  onPressEnter: (e: KeyboardEvent<Element>) => void;
  inputRef: LegacyRef<HTMLInputElement> | null;
}

const SearchPopUp: FC<IProps> = ({ searchWord, onChangeSearchWord, onPressEnter, inputRef }) => {
  return (
    <SearchPopUpWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <input
        ref={inputRef}
        value={searchWord}
        onKeyPress={onPressEnter}
        onChange={onChangeSearchWord}
        placeholder="검색어를 입력하세요..."
        type="text"
      />
    </SearchPopUpWrapper>
  );
};

export default memo(SearchPopUp);
