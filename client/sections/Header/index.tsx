import { FC, useCallback, useEffect } from "react";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "slices";
import LoginModal from "@components/Modals/LoginModal";
import Link from "next/link";
import { mainSlice } from "slices/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import Overlay from "@components/Modals/Overlay";
import SearchPopUp from "@components/Modals/SearchPopUp";
import NoticePopUp from "@components/Modals/NoticePopUp";
import ProfilePopUp from "@components/Modals/ProfilePopUp";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { onLoginModal, onProfilePopUp, onNoticePopUp, onSearchPopUp } = useSelector(
    (state: RootState) => state.main
  );

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

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Link href="/">
          <a>
            <img src="https://user-images.githubusercontent.com/74864925/123951789-21ecc980-d9e0-11eb-9f3c-421cbea7d9cf.png" />
          </a>
        </Link>
        <li>
          <Link href="/">
            <a>전세계</a>
          </Link>
        </li>
        <li>
          <Link href="/story">
            <a>연대기</a>
          </Link>
        </li>
        <li>
          <Link href="/guide">
            <a>가이드</a>
          </Link>
        </li>
      </HeaderLeft>
      <HeaderRight>
        <li style={{ display: "flex" }} className="header-right-li icon-li">
          {onSearchPopUp && <SearchPopUp />}
          <a onClick={onClickSearchPopUp}>
            <FontAwesomeIcon className="anticon" icon={faSearch} />
          </a>
        </li>
        {user ? (
          <>
            <li className="header-right-li icon-li">
              <a onClick={onClickNoticePopUp}>
                <FontAwesomeIcon className="anticon" icon={faBell} />
              </a>
              {onNoticePopUp && <NoticePopUp />}
            </li>
            <li className="header-right-li">
              <a onClick={onClickProfilePopUp}>
                <img className="user-icon" src={user?.icon} alt={user?.name} />
              </a>
              {onProfilePopUp && <ProfilePopUp />}
            </li>
          </>
        ) : (
          <li className="header-right-li">
            <a onClick={onClickLoginMenu}>로그인</a>
          </li>
        )}
      </HeaderRight>
      {onLoginModal && (
        <>
          <LoginModal />
          <Overlay />
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
