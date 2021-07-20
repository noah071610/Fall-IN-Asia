import { FC, useCallback, useEffect } from "react";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./styles";
import SignupModal from "@components/Modal/SignupModal";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "slices";
import { ToastContainer } from "react-toastify";
import { mainSlice } from "slices/main";
import UserInfoModal from "./UserInfoModal";
import LoginModal from "@components/Modal/LoginModal";
import Link from "next/link";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";

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
    dispatch(mainSlice.actions.toggleLoginModal());
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
            <a>홈</a>
          </Link>
        </li>
        <li>
          <Link href="/story">
            <a>연대기</a>
          </Link>
        </li>
        <li>
          <Link href="/market">
            <a>마켓</a>
          </Link>
        </li>
      </HeaderLeft>
      <HeaderRight>
        {user ? (
          <>
            <li>
              <a onClick={onClickUserInfoMenu}>
                <img className="icon" src={user?.icon} alt={user?.name} />
                {user?.name}
              </a>
            </li>
          </>
        ) : (
          <li>
            <a onClick={onClickLoginMenu}>로그인</a>
          </li>
        )}
      </HeaderRight>
      {onLoginModal && <LoginModal />}
      {onSignupModal && <SignupModal />}
    </HeaderWrapper>
  );
};

export default Header;
