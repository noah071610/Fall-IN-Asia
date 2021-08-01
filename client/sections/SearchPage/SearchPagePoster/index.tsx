import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";
import { SearchPagePosterWrapper } from "./styles";

interface IProps {
  searchWord: string;
}

const SearchPagePoster: FC<IProps> = ({ searchWord }) => {
  const dispatch = useDispatch();

  const onClickSearchAnotherBtn = useCallback((e) => {
    e.stopPropagation();
    dispatch(mainSlice.actions.openSearchPopUp());
  }, []);
  return (
    <SearchPagePosterWrapper
      style={{
        backgroundImage: `url("https://blog.kakaocdn.net/dn/dAuwyU/btqDGgSNmQb/KpJMSf5lC57ArjKLOyUxkK/img.jpg"
)`,
      }}
    >
      <div className="poster-inner">
        <h1>{`"${searchWord}" 키워드 검색 결과`}</h1>
        <button onClick={onClickSearchAnotherBtn}>다시 검색하기</button>
      </div>
    </SearchPagePosterWrapper>
  );
};

export default SearchPagePoster;
