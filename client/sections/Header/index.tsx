import { FC, useCallback, useEffect } from "react";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./styles";
import SignupModal from "@components/Modals/SignupModal";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "slices";
import LoginModal from "@components/Modals/LoginModal";
import Link from "next/link";
import { mainSlice } from "slices/main";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { onLoginModal, onSignupModal } = useSelector((state: RootState) => state.main);

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
            <a>전세계</a>
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
              <a>
                <img className="icon" src={user?.icon} alt={user?.name} />
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
