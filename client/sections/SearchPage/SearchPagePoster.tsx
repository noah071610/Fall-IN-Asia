import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";
import styled from "@emotion/styled";
import { FLEX_STYLE, SM_SIZE, XLG_SIZE } from "config";
import tw from "twin.macro";

const SearchPagePosterWrapper = styled.div`
  ${tw`w-full h-60`}
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 250%;
  .poster-inner {
    ${tw`h-full mx-auto`}
    width: ${XLG_SIZE};
    ${FLEX_STYLE("center", "flex-start", "column")};
    h1 {
      ${tw`text-white font-bold mb-4`}
    }
    button {
      ${tw`bg-white py-2 px-4 rounded-md`}
    }
  }
  @media (max-width: ${XLG_SIZE}) {
    ${tw`px-2`}
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`px-0 h-52`}
    ${FLEX_STYLE("center", "center", "column")};
    .poster-inner {
      ${FLEX_STYLE("center", "center", "column")};
      ${tw`w-full`}
      h1 {
        ${tw`text-lg`}
      }
      button {
        ${tw`text-xs`}
      }
    }
  }
`;

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
