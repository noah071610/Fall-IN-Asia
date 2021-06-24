import styled from "@emotion/styled";
import { BLUE_COLOR, FLEX_STYLE, RGB_BLACK } from "config";
import { Input } from "antd";
const { Search } = Input;

export const SearchBar = styled(Search)`
  width: 50%;
`;

export const FilterWrapper = styled.div`
  background-color: ${RGB_BLACK("0.03")};
  padding: 1rem;
  border-bottom: 1px solid ${RGB_BLACK("0.1")};
  border-top: 1px solid ${RGB_BLACK("0.1")};
  .filter {
    &-nav {
      ${FLEX_STYLE("space-between", "center")}
    }
    &-tags {
      margin-top: 1rem;
    }
    &-btn {
      margin: 0 0.5rem;
      transition: 0.3s all;
      svg {
        margin-left: 0.5rem;
      }
      &:hover {
        color: ${BLUE_COLOR};
      }
    }
  }
`;

export const FilterList = styled.div`
  margin-top: 1rem;
`;
