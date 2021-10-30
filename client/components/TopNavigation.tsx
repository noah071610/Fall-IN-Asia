import React, { FC, memo } from "react";
import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, SM_SIZE } from "config";
import tw from "twin.macro";
import { SwiperSlide, Swiper } from "swiper/react";
import shortid from "shortid";

const TopNavigationWrapper = styled.nav`
  ${tw`sticky`}
  top:3rem;
  z-index: 1;
  ${BORDER_THIN("border-bottom")};
  .nav-outer {
    ${tw`mx-2  bg-white`}
  }
  .nav-inner-list {
    ${tw`mx-auto`}
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
  .nav-outer-small {
    ${tw`hidden`}
  }
  @media (max-width: ${SM_SIZE}) {
    .nav-outer {
      ${tw`hidden`}
    }
    .nav-outer-small {
      ${tw`grid bg-white`}
      span {
        ${tw`pb-2 pt-3 px-2 cursor-pointer`}
        ${FLEX_STYLE("center", "center")};
      }
      .active-list {
        font-weight: bold;
        border-bottom: 0.3rem solid ${BLUE_COLOR};
      }
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
      <div className="nav-outer">
        <div className="nav-inner-list">
          {list?.map((v) => {
            return (
              <li
                className={filter === v.value ? "active-list" : ""}
                onClick={() => onClickList(v.value)}
                key={shortid.generate()}
              >
                {v.name}
              </li>
            );
          })}
        </div>
      </div>
      <Swiper slidesPerView={2.8} freeMode={true} className="nav-outer-small">
        {list?.map((v) => {
          return (
            <SwiperSlide
              className={filter === v.value ? "active-list" : ""}
              onClick={() => onClickList(v.value)}
              key={shortid.generate()}
            >
              <span>{v.name}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </TopNavigationWrapper>
  );
};

export default memo(TopNavigation);
