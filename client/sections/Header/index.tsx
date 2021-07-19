import { FC, useCallback, useEffect } from "react";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./styles";
import { HomeOutlined, InboxOutlined, CommentOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CommunityMenu from "sections/Header/CommunityMenu";
import LoginModal from "sections/Header/LoginModal";
import SignupModal from "sections/Header/SignupModal";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "slices";
import { ToastContainer } from "react-toastify";
import { mainSlice } from "slices/main";
import UserInfoModal from "./UserInfoModal";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { asPath } = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { onCommunityModal, onLoginModal, onSignupModal, onUserInfoModal } = useSelector(
    (state: RootState) => state.main
  );

  useEffect(() => {
    dispatch(mainSlice.actions.closeModal());
  }, [asPath]);

  const onClickCommunityMenu = useCallback(() => {
    dispatch(mainSlice.actions.toggleCommunityModal());
  }, []);

  const onClickUserInfoMenu = useCallback(() => {
    dispatch(mainSlice.actions.toggleUserInfoModal());
  }, []);

  const onClickLoginMenu = useCallback(() => {
    if (onSignupModal) {
      dispatch(mainSlice.actions.toggleSignupModal());
    } else {
      dispatch(mainSlice.actions.toggleLoginModal());
    }
  }, [onSignupModal]);

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
            <a>홈</a>
          </Link>
        </li>
        <li>
          <a onClick={onClickCommunityMenu}>연대기</a>
          {onCommunityModal && <CommunityMenu />}
        </li>
        <li>
          <Link href="/market">
            <a>마켓</a>
          </Link>
        </li>
      </HeaderLeft>
      <HeaderRight>
        {user ? (
          <li>
            <a onClick={onClickUserInfoMenu}>
              <img className="user-icon" src={user?.icon} alt={user?.name} />
              <span className="list-text">{user?.name} 様</span>
            </a>
          </li>
        ) : (
          <li>
            <a onClick={onClickLoginMenu}>로그인</a>
          </li>
        )}
      </HeaderRight>
      {onLoginModal && <LoginModal />}
      {onSignupModal && <SignupModal />}
      {onUserInfoModal && <UserInfoModal />}
    </HeaderWrapper>
  );
};

export default Header;
