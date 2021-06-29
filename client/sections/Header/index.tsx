import { FC, useCallback, useState } from "react";
import { HeaderWrapper, Poster } from "./styles";
import {
  HeartOutlined,
  HomeOutlined,
  InboxOutlined,
  CommentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CommunityMenu from "sections/Header/CommunityMenu";
import LoginModal from "sections/Header/LoginModal";
import useToggle from "@hooks/useToggle";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [onCommunityMenu, onClickCommunityMenu] = useToggle(false);
  const [onLoginModal, onClickLoginModal] = useToggle(false);
  return (
    <HeaderWrapper>
      <div className="header-lgsize">
        <Poster>
          <img src="https://user-images.githubusercontent.com/74864925/123467550-98c64300-d62b-11eb-927e-58e220de0952.png" />
        </Poster>
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
                style={{ transform: `rotate(${onCommunityMenu ? "180deg" : "0"})` }}
                icon={faChevronDown}
                className="arrow"
              />
            </a>
            {onCommunityMenu && <CommunityMenu />}
          </li>
          <li className="nav-list">
            <Link href="/goods">
              <a className="nav-list-ancher">
                <InboxOutlined />
                <span className="list-text">グッズ</span>
              </a>
            </Link>
          </li>
          <li className="nav-list">
            <Link href="/support">
              <a className="nav-list-ancher">
                <HeartOutlined />
                <span className="list-text">後援</span>
              </a>
            </Link>
          </li>
          <li className="nav-list">
            <Link href="/korean">
              <a className="nav-list-ancher">
                <img
                  alt="menu-icon"
                  className="anticon"
                  src="https://img.icons8.com/ios/26/000000/book-and-pencil.png"
                />
                <span className="list-text">韓国語</span>
              </a>
            </Link>
          </li>
          <li className="nav-list">
            <a onClick={onClickLoginModal} className="nav-list-ancher">
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
