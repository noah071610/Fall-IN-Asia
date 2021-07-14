import React, { FC, useCallback, useEffect, useState } from "react";
import { Input, Pagination } from "antd";
const { Search } = Input;
import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainSlice } from "slices/main";
import router, { useRouter } from "next/router";

const PaginationWrapper = styled.div`
  padding: 2rem 0;
  ${FLEX_STYLE("center", "flex-end")};
  flex-direction: column;
  .ant-input-search {
    width: 50%;
    margin-bottom: 1rem;
  }
  .ant-pagination-options-quick-jumper {
    input {
      margin-right: 0;
    }
  }
`;
interface IProps {
  postCnt: number;
}

const CommonPagination: FC<IProps> = ({ postCnt }) => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { currentPage } = useSelector((state: RootState) => state.main);
  const onChangePage = useCallback((page: number) => {
    if (query?.id) {
      dispatch(mainSlice.actions.changeCurrentPage(page));
    } else {
      router.push(`/club/${query?.group}?page=${page}`);
    }
  }, []);
  const onSearchClubPost = useCallback((keyword: string) => {
    dispatch(mainSlice.actions.changeCurrentPage(keyword));
  }, []);
  return (
    <PaginationWrapper>
      <Search onSearch={onSearchClubPost} />
      {!query?.id && (
        <Pagination
          onChange={onChangePage}
          current={parseInt(query?.page as string) || 1}
          total={postCnt}
        />
      )}
    </PaginationWrapper>
  );
};

export default CommonPagination;
