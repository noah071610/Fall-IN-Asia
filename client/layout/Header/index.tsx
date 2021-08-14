import { FC, KeyboardEvent, memo, useCallback, useEffect, useRef, useState } from "react";
import { HeaderWrapper } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "slices";
import LoginModal from "@components/Modals/LoginModal";
import Link from "next/link";
import { mainSlice } from "slices/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import Overlay from "@components/Modals/Overlay";
import SearchPopUp from "@components/Popups/SearchPopUp";
import NoticePopUp from "@components/Popups/NoticePopUp";
import ProfilePopUp from "@components/Popups/ProfilePopUp";
import { FALL_IN_ASIA_LOGO, GRAY_COLOR, toastSuccessMessage } from "config";
import { userSlice } from "slices/user";
import useInput from "@hooks/useInput";
import router from "next/router";
import { throttle } from "lodash";
import { INotice } from "@typings/db";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [searchWord, onChangeSearchWord, setSearchWord] = useInput("");
  const [headerDownSize, setHeaderDownSize] = useState(false);
  const [isAllReadNotices, setIsAllReadNotices] = useState(true);
  const { user, logoutDone, readNoticeDone } = useSelector((state: RootState) => state.user);
  const { onLoginModal, onProfilePopUp, onNoticePopUp, onSearchPopUp, onSlideMenu } = useSelector(
    (state: RootState) => state.main
  );

  useEffect(() => {
    if (logoutDone) {
      toastSuccessMessage("로그아웃 되었습니다.");
      dispatch(userSlice.actions.logoutClear());
    }
  }, [logoutDone]);

  useEffect(() => {
    const scrollCallBack = () => {
      if (window.scrollY > 100) {
        setHeaderDownSize(true);
      } else {
        setHeaderDownSize(false);
      }
    };
    window.addEventListener("scroll", throttle(scrollCallBack, 300));
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  useEffect(() => {
    if (onSearchPopUp) {
      inputRef?.current?.focus();
      mobileInputRef?.current?.focus();
    }
  }, [onSearchPopUp, inputRef]);

  const onClickMenu = useCallback((type: string) => {
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
      case "slideMenu":
        dispatch(mainSlice.actions.toggleSlideMenu());
        break;
      default:
        return;
    }
  }, []);

  const onClickSearchWord = useCallback(() => {
    if (searchWord === "" || !searchWord?.trim()) {
      dispatch(mainSlice.actions.toggleSearchPopUp());
      return;
    }
    router.push(`/search?keyword=${searchWord}`);
  }, [searchWord]);

  const onPressEnter = useCallback(
    (e: KeyboardEvent<Element>) => {
      if (e.key === "Enter") {
        if (searchWord === "" || !searchWord?.trim()) {
          return;
        }
        router.push(`/search?keyword=${searchWord}`);
        dispatch(mainSlice.actions.toggleSearchPopUp());
      }
    },
    [searchWord]
  );

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
    <header css={HeaderWrapper(headerDownSize)}>
      <ul className="header-small">
        {!onSearchPopUp && (
          <>
            <li onClick={() => onClickMenu("slideMenu")}>
              <a className="header-anchor">
                <FontAwesomeIcon className="icon" icon={faBars} />
              </a>
            </li>
            <li>
              <Link href="/">
                <a className="header-logo-anchor">
                  <img className="logo" src={FALL_IN_ASIA_LOGO} alt="logo" />
                </a>
              </Link>
            </li>
          </>
        )}
        {onSearchPopUp && (
          <SearchPopUp
            inputRef={mobileInputRef}
            onPressEnter={onPressEnter}
            searchWord={searchWord}
            width="100%"
            setSearchWord={setSearchWord}
            onChangeSearchWord={onChangeSearchWord}
          />
        )}
        <li style={onSearchPopUp ? { height: "40px" } : {}}>
          <a
            className="header-anchor"
            onClick={onSearchPopUp ? onClickSearchWord : () => onClickMenu("search")}
          >
            <FontAwesomeIcon className="icon" icon={faSearch} />
          </a>
        </li>
      </ul>
      <ul className="header-left">
        <Link href="/">
          <a className="header-logo-anchor">
            <img className="logo" src={FALL_IN_ASIA_LOGO} />
          </a>
        </Link>
        <li className="header-list">
          <Link href="/">
            <a className="header-anchor">모멘트</a>
          </Link>
        </li>
        <li className="header-list">
          <Link href="/story">
            <a className="header-anchor">연대기</a>
          </Link>
        </li>
        <li className="header-list">
          <Link href="/news">
            <a className="header-anchor">여행소식</a>
          </Link>
        </li>
      </ul>
      <ul className="header-right">
        <li
          style={onSearchPopUp ? { background: GRAY_COLOR, display: "flex" } : { display: "flex" }}
          className="header-list list-icon"
        >
          {onSearchPopUp && (
            <SearchPopUp
              width="200px"
              inputRef={inputRef}
              onPressEnter={onPressEnter}
              searchWord={searchWord}
              setSearchWord={setSearchWord}
              onChangeSearchWord={onChangeSearchWord}
            />
          )}
          <a
            className="header-anchor"
            onClick={onSearchPopUp ? onClickSearchWord : () => onClickMenu("search")}
          >
            <FontAwesomeIcon className="icon" icon={faSearch} />
          </a>
        </li>
        {user ? (
          <>
            <li className="header-list list-icon notice-icon">
              <a className="header-anchor" onClick={() => onClickMenu("notice")}>
                <FontAwesomeIcon className="icon" icon={faBell} />
                {!isAllReadNotices && <FontAwesomeIcon className="circle" icon={faCircle} />}
              </a>
              {onNoticePopUp && <NoticePopUp />}
            </li>
            <li className="header-list" style={{ padding: 0, marginLeft: "1.2rem" }}>
              <a className="header-anchor" onClick={() => onClickMenu("profile")}>
                <img className="user-icon" src={user?.icon} alt={user?.name} />
              </a>
              {onProfilePopUp && <ProfilePopUp />}
            </li>
          </>
        ) : (
          <li className="header-list">
            <a className="header-anchor" onClick={() => onClickMenu("login")}>
              로그인
            </a>
          </li>
        )}
      </ul>
      {onLoginModal && (
        <>
          <LoginModal />
          <Overlay />
        </>
      )}
    </header>
  );
};

export default memo(Header);
