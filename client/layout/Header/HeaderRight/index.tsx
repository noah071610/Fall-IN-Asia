import React, { FC, memo, ReactNode, useCallback, useEffect, useState } from "react";
import LoginModal from "@components/Modals/LoginModal";
import Overlay from "@components/Modals/Overlay";
import NoticePopUp from "@components/Popups/NoticePopUp";
import ProfilePopUp from "@components/Popups/ProfilePopUp";
import { faBell, faCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INotice } from "@typings/db";
import { GRAY_COLOR, toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainSlice } from "slices/main";
import { userSlice } from "slices/user";
import styled from "@emotion/styled";
import { FLEX_STYLE, MD_SIZE } from "config";
import tw from "twin.macro";

const HeaderRightWrapper = styled.ul`
  ${FLEX_STYLE("", "center")};
  .header-list {
    ${tw`rounded-full hover:bg-gray-100 relative`}
    transition: 0.3s all;
    .circle-icon {
      ${tw`absolute bottom-0 right-0 text-xs text-green-300`}
    }
    &-anchor {
      ${FLEX_STYLE("center", "center")};
    }
    &-login {
      transition: 0.3s all;
      ${tw`ml-3 relative`}
      padding: 0.3rem 0.5rem;
    }
  }
  @media (max-width: ${MD_SIZE}) {
    ${tw`hidden`}
  }
`;

interface IProps {
  onClickSearchWord: () => void;
  children: ReactNode;
}

const HeaderRight: FC<IProps> = ({ onClickSearchWord, children }) => {
  const dispatch = useDispatch();
  const { onProfilePopUp, onNoticePopUp, onSearchPopUp, onLoginModal } = useSelector(
    (state: RootState) => state.main
  );
  const { user, readNoticeDone, logoutDone } = useSelector((state: RootState) => state.user);
  const [isAllReadNotices, setIsAllReadNotices] = useState(true);

  const onClickMenuPopup = useCallback((type: string) => {
    switch (type) {
      case "login":
        dispatch(mainSlice.actions.toggleLoginModal());
        break;
      case "profile":
        dispatch(mainSlice.actions.toggleProfilePopUp());
        break;
      case "notice":
        dispatch(mainSlice.actions.toggleNoticePopUp());
        break;
      case "search":
        dispatch(mainSlice.actions.toggleSearchPopUp());
        break;
      default:
        return;
    }
  }, []);

  useEffect(() => {
    if (logoutDone) {
      toastSuccessMessage("로그아웃 되었습니다.");
      dispatch(userSlice.actions.logoutClear());
    }
  }, [logoutDone]);

  useEffect(() => {
    if (user) {
      if (readNoticeDone) {
        setIsAllReadNotices(true);
        dispatch(userSlice.actions.readNoticeClear());
      } else {
        user?.notices?.find((v: INotice) => {
          if (v.readAt === null) {
            setIsAllReadNotices(false);
            return;
          }
        });
      }
    }
  }, [user, readNoticeDone]);
  return (
    <HeaderRightWrapper>
      <li
        style={onSearchPopUp ? { background: GRAY_COLOR, display: "flex" } : { display: "flex" }}
        className="header-list"
      >
        {children}
        <a
          className="header-list-anchor"
          onClick={onSearchPopUp ? onClickSearchWord : () => onClickMenuPopup("search")}
        >
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </a>
      </li>
      {user ? (
        <>
          <li className="header-list">
            <a className="header-list-anchor" onClick={() => onClickMenuPopup("notice")}>
              <FontAwesomeIcon className="notice-icon" icon={faBell} />
              {!isAllReadNotices && <FontAwesomeIcon className="circle-icon" icon={faCircle} />}
            </a>
            {onNoticePopUp && <NoticePopUp />}
          </li>
          <li className="header-list" style={{ padding: 0, marginLeft: "1.2rem" }}>
            <a className="header-list-anchor" onClick={() => onClickMenuPopup("profile")}>
              <img className="user-icon" src={user?.icon} alt={user?.name} />
            </a>
            {onProfilePopUp && <ProfilePopUp />}
          </li>
        </>
      ) : (
        <li className="header-list-login">
          <a className="header-list-anchor" onClick={() => onClickMenuPopup("login")}>
            로그인
          </a>
        </li>
      )}
      {onLoginModal && (
        <>
          <LoginModal />
          <Overlay />
        </>
      )}
    </HeaderRightWrapper>
  );
};

export default memo(HeaderRight);
