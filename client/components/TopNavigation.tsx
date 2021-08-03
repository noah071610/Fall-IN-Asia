import React, { FC } from "react";
import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE } from "config";
import tw from "twin.macro";

const TopNavigationWrapper = styled.nav`
  ${tw`sticky bg-white`}
  top:57px;
  z-index: 1;
  ${BORDER_THIN("border-bottom")};
  .nav-inner-list {
    ${tw` mx-auto`}
    width:100%;
    ${FLEX_STYLE("center", "center")};
    li {
      ${tw`p-4 cursor-pointer`}
    }
    .active-list {
      font-weight: bold;
      border-bottom: 0.25rem solid ${BLUE_COLOR};
      padding-bottom: 0.75rem;
    }
  }
`;

interface IProps {
  list: any[];
  onClickList: (value: string) => void;
  filter: string;
}

const TopNavigation: FC<IProps> = ({ filter, list, onClickList }) => {
  return (
    <TopNavigationWrapper>
      <div className="nav-inner-list">
        {list?.map((v, i) => {
          return (
            <li
              className={filter === v.value ? "active-list" : ""}
              onClick={() => onClickList(v.value)}
              key={i}
            >
              {v.name}
            </li>
          );
        })}
      </div>
    </TopNavigationWrapper>
  );
};

export default TopNavigation;
