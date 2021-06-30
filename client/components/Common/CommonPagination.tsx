import React, { FC, useState } from "react";
import { Input, Pagination } from "antd";
const { Search } = Input;
import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";

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
interface IProps {}

const CommonPagination: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <PaginationWrapper>
      <Search />
      <Pagination showQuickJumper defaultCurrent={1} total={50} />
    </PaginationWrapper>
  );
};

export default CommonPagination;
