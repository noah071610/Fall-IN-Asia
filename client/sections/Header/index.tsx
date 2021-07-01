import { FC, useCallback, useEffect } from "react";
import { HeaderWrapper, Poster } from "./styles";
import { HomeOutlined, InboxOutlined, CommentOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CommunityMenu from "sections/Header/CommunityMenu";
import LoginModal from "sections/Header/LoginModal";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "slices";
import mainSlice from "slices/main";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { asPath } = useRouter();
  const dispatch = useDispatch();
  const { onCommunityModal, onLoginModal } = useSelector((state: RootState) => state.main);

  useEffect(() => {
    dispatch(mainSlice.actions.closeModal());
  }, [asPath]);

  const onClickCommunityMenu = useCallback(() => {
    dispatch(mainSlice.actions.toggleCommunityModal());
  }, []);
  const onClickLoginMenu = useCallback(() => {
    dispatch(mainSlice.actions.toggleLoginModal());
  }, []);

  return (
    <HeaderWrapper>
      <div className="header-lgsize">
        <Link href="/">
          <a>
            <Poster>
              <img src="https://user-images.githubusercontent.com/74864925/123951789-21ecc980-d9e0-11eb-9f3c-421cbea7d9cf.png" />
            </Poster>
          </a>
        </Link>
        <nav>
          <li className="nav-list">
            <Link href="/">
              <a className="nav-list-ancher">
                <HomeOutlined />
                <span className="list-text">ホーム</span>
              </a>
            </Link>
          </li>
          <li className="nav-list">
            <a className="nav-list-ancher" onClick={onClickCommunityMenu}>
              <CommentOutlined />
              <span className="list-text">コミュニティ</span>
              <FontAwesomeIcon
                style={{ transform: `rotate(${onCommunityModal ? "180deg" : "0"})` }}
                icon={faChevronDown}
                className="arrow"
              />
            </a>
            {onCommunityModal && <CommunityMenu />}
          </li>
          <li className="nav-list">
            <Link href="/market">
              <a className="nav-list-ancher">
                <InboxOutlined />
                <span className="list-text">マーケット</span>
              </a>
            </Link>
          </li>
          {/* <li className="nav-list">
            <Link href="/support">
              <a className="nav-list-ancher">
                <HeartOutlined />
                <span className="list-text">後援</span>
              </a>
            </Link>
          </li> */}
          <li className="nav-list">
            <Link href="/korean">
              <a className="nav-list-ancher">
                <img
                  alt="menu-icon"
                  className="anticon"
                  src="https://img.icons8.com/ios/26/000000/book-and-pencil.png"
                />
                <span className="list-text">韓国語レッスン</span>
              </a>
            </Link>
          </li>
          <li className="nav-list">
            <a onClick={onClickLoginMenu} className="nav-list-ancher">
              <UserOutlined />
              <span className="list-text">ログイン</span>
            </a>
          </li>
        </nav>
        {onLoginModal && <LoginModal />}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
