import React, { FC, useCallback, useState } from "react";
import { Input, Pagination } from "antd";
const { Search } = Input;
import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainSlice } from "slices/main";

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
  const { currentPage } = useSelector((state: RootState) => state.main);
  const onChangePage = useCallback((page: number) => {
    dispatch(mainSlice.actions.changeCurrentPage(page));
  }, []);
  return (
    <PaginationWrapper>
      <Search />
      <Pagination onChange={onChangePage} current={currentPage} total={postCnt} />
    </PaginationWrapper>
  );
};

export default CommonPagination;
