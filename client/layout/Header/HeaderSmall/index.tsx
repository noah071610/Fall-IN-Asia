import React, { FC, memo, useCallback } from "react";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FALL_IN_ASIA_LOGO } from "config";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainSlice } from "slices/main";
import { FLEX_STYLE, MD_SIZE } from "config";
import tw from "twin.macro";
import styled from "@emotion/styled/macro";
import { ReactNode } from "react";

const HeaderSmallWrapper = styled.ul`
  ${tw`hidden`}
  @media (max-width: ${MD_SIZE}) {
    ${tw`w-full`}
    ${FLEX_STYLE("space-between", "center")};
    li {
      ${FLEX_STYLE("center", "center")};
    }
    .header {
      &-list {
        margin: 0;
      }
    }
    .header-logo {
      width: 100%;
      margin: 0 !important;
    }
  }
`;

interface IProps {
  onClickSearchWord: () => void;
  children: ReactNode;
}

const HeaderSmall: FC<IProps> = ({ onClickSearchWord, children }) => {
  const dispatch = useDispatch();
  const { onSearchPopUp } = useSelector((state: RootState) => state.main);
  const onClickSlideMenu = useCallback(() => {
    dispatch(mainSlice.actions.toggleSlideMenu());
  }, []);
  const onClickSearchPopup = useCallback(() => {
    dispatch(mainSlice.actions.toggleSearchPopUp());
  }, []);
  return (
    <HeaderSmallWrapper>
      {!onSearchPopUp && (
        <>
          <li className="header-list" onClick={onClickSlideMenu}>
            <a className="header-list-anchor">
              <FontAwesomeIcon className="menu-icon" icon={faBars} />
            </a>
          </li>
          <li>
            <Link href="/">
              <a className="header-logo">
                <img src={FALL_IN_ASIA_LOGO} alt="fall-in-asia-header-logo" />
              </a>
            </Link>
          </li>
        </>
      )}
      {children}
      <li className="header-list" style={onSearchPopUp ? { height: "40px" } : {}}>
        <a
          className="header-list-anchor"
          onClick={onSearchPopUp ? onClickSearchWord : onClickSearchPopup}
        >
          <FontAwesomeIcon className="notice-icon" icon={faSearch} />
        </a>
      </li>
    </HeaderSmallWrapper>
  );
};

export default memo(HeaderSmall);
