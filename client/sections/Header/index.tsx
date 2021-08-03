import { FC, KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { HeaderWrapper } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "slices";
import LoginModal from "@components/Modals/LoginModal";
import Link from "next/link";
import { mainSlice } from "slices/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import Overlay from "@components/Modals/Overlay";
import SearchPopUp from "@components/Popups/SearchPopUp";
import NoticePopUp from "@components/Popups/NoticePopUp";
import ProfilePopUp from "@components/Popups/ProfilePopUp";
import { GRAY_COLOR, toastSuccessMessage } from "config";
import { userSlice } from "slices/user";
import useInput from "@hooks/useInput";
import router from "next/router";
import { throttle } from "lodash";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [searchWord, onChangeSearchWord, setSearchWord] = useInput("");
  const [headerDownSize, setHeaderDownSize] = useState(false);
  const { user, logoutDone } = useSelector((state: RootState) => state.user);

  const { onLoginModal, onProfilePopUp, onNoticePopUp, onSearchPopUp } = useSelector(
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
    }
  }, [onSearchPopUp, inputRef]);

  const onClickLoginMenu = useCallback(() => {
    dispatch(mainSlice.actions.toggleLoginModal());
  }, []);

  const onClickProfilePopUp = useCallback(() => {
    dispatch(mainSlice.actions.toggleProfilePopUp());
  }, []);

  const onClickNoticePopUp = useCallback(() => {
    dispatch(mainSlice.actions.toggleNoticePopUp());
  }, []);

  const onClickSearchPopUp = useCallback(() => {
    dispatch(mainSlice.actions.toggleSearchPopUp());
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

  return (
    <header css={HeaderWrapper(headerDownSize)}>
      <ul className="header-left">
        <Link href="/">
          <a>
            <img src="https://user-images.githubusercontent.com/74864925/123951789-21ecc980-d9e0-11eb-9f3c-421cbea7d9cf.png" />
          </a>
        </Link>
        <li className="header-list">
          <Link href="/">
            <a>모멘트</a>
          </Link>
        </li>
        <li className="header-list">
          <Link href="/story">
            <a>연대기</a>
          </Link>
        </li>
        <li className="header-list">
          <Link href="/news">
            <a>여행소식</a>
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
              inputRef={inputRef}
              onPressEnter={onPressEnter}
              searchWord={searchWord}
              setSearchWord={setSearchWord}
              onChangeSearchWord={onChangeSearchWord}
            />
          )}
          <a onClick={onSearchPopUp ? onClickSearchWord : onClickSearchPopUp}>
            <FontAwesomeIcon className="anticon" icon={faSearch} />
          </a>
        </li>
        {user ? (
          <>
            <li className="header-list list-icon">
              <a onClick={onClickNoticePopUp}>
                <FontAwesomeIcon className="anticon" icon={faBell} />
              </a>
              {onNoticePopUp && <NoticePopUp />}
            </li>
            <li className="header-list" style={{ padding: 0, marginLeft: "1.2rem" }}>
              <a onClick={onClickProfilePopUp}>
                <img className="user-icon" src={user?.icon} alt={user?.name} />
              </a>
              {onProfilePopUp && <ProfilePopUp />}
            </li>
          </>
        ) : (
          <li className="header-list">
            <a onClick={onClickLoginMenu}>로그인</a>
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

export default Header;
