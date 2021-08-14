import { faEdit, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BLUE_COLOR, DEFAULT_ICON_URL, FALL_IN_ASIA_LOGO, WHITE_COLOR } from "config";
import React, { FC, useCallback, useEffect, useState } from "react";
import { MobileSlideMenuWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import Link from "next/link";
import { logoutAction } from "actions/user";
import { Divider } from "antd";
import { useRouter } from "next/router";
import { mainSlice } from "slices/main";
import Overlay from "@components/Modals/Overlay";

interface IProps {}

const MobileSlideMenu: FC<IProps> = () => {
  const dispatch = useDispatch();
  const [activePath, setActivePath] = useState("");
  const { asPath } = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const { onSlideMenu } = useSelector((state: RootState) => state.main);
  useEffect(() => {
    const pathChecker = asPath?.split("/")[1];
    switch (pathChecker) {
      case "":
        setActivePath("moment");
        break;
      case "country":
        setActivePath("moment");
        break;
      case "story":
        setActivePath("story");
        break;
      case "news":
        setActivePath("news");
        break;
      case "about":
        setActivePath("about");
        break;
      default:
        return;
    }
  }, [asPath]);

  const onClickLogin = useCallback(() => {
    dispatch(mainSlice.actions.toggleLoginModal());
  }, []);
  return (
    <>
      <MobileSlideMenuWrapper
        style={onSlideMenu ? { transform: "translateX(0)" } : { transform: "translateX(-100%)" }}
      >
        <div>
          <a>
            <img className="slide-menu-logo" src={FALL_IN_ASIA_LOGO} alt="logo" />
          </a>
        </div>
        <Divider className="slide-menu-divider" orientation="left">
          <span>{user ? "프로필" : "로그인"}</span>
        </Divider>
        {user ? (
          <>
            <div className="user-profile-wrapper">
              <div className="icon-wrapper">
                <img src={user?.icon || DEFAULT_ICON_URL} alt="icon-image" />
              </div>
              <div className="user-info">
                <h2>{user?.name}님</h2>
                <p>{user?.introduce}</p>
              </div>
            </div>
            <ul className="user-menu-list">
              <Link href={`/me/${user?.id}`}>
                <a>
                  <li>
                    <FontAwesomeIcon className="list-icon" icon={faUser} />
                    <h4>내 프로필</h4>{" "}
                  </li>
                </a>
              </Link>
              <Link href={`/story/post`}>
                <a>
                  <li className="middle-list">
                    <FontAwesomeIcon className="list-icon" icon={faEdit} />
                    <h4>새 연대기</h4>
                  </li>
                </a>
              </Link>
              <a onClick={() => dispatch(logoutAction())}>
                <li>
                  <FontAwesomeIcon className="list-icon" icon={faSignOutAlt} />
                  <h4>로그아웃</h4>
                </li>
              </a>
            </ul>
          </>
        ) : (
          <>
            <h3 className="slide-menu-sub-title">로그인하고 더 많은 서비스를 누리세요!</h3>
            <button onClick={onClickLogin} className="login-btn">
              <span>간편로그인</span>
              <ul className="social-icon-wrapper">
                <li style={{ background: WHITE_COLOR }}>
                  <img src="https://img.icons8.com/color/144/000000/google-logo.png" />
                </li>
                <li style={{ background: "#FAE301" }}>
                  <img src="https://user-images.githubusercontent.com/74864925/127008226-4ea6ec83-e82d-4e7f-bc9a-95b508f750cc.png" />
                </li>
                <li style={{ background: "#54BA5C" }}>
                  <img src="https://user-images.githubusercontent.com/74864925/127008231-213a4559-d3e8-488d-9901-0fe3f78b58c1.png" />
                </li>
              </ul>
            </button>
          </>
        )}
        <Divider className="slide-menu-divider" orientation="left">
          <span>바로가기</span>
        </Divider>
        <ul className="link-menu-list">
          <Link href="/">
            <a className="direct-link">
              <li style={activePath === "moment" ? { borderLeft: `3px solid ${BLUE_COLOR}` } : {}}>
                모멘트
              </li>
            </a>
          </Link>
          <Link href="/story">
            <a className="direct-link">
              <li style={activePath === "story" ? { borderLeft: `3px solid ${BLUE_COLOR}` } : {}}>
                연대기
              </li>
            </a>
          </Link>

          <Link href="/news">
            <a className="direct-link">
              <li style={activePath === "news" ? { borderLeft: `3px solid ${BLUE_COLOR}` } : {}}>
                여행소식
              </li>
            </a>
          </Link>
        </ul>
        <div className="slide-menu-footer">
          <h4 className="license">ⓒ JANG HYUN SOO (Noah) All Rights Resrved.</h4>
          <div>
            <Link href="/about">
              <a>About us</a>
            </Link>
            <Link href="/about#policy">
              <a>이용약관</a>
            </Link>
          </div>
        </div>
      </MobileSlideMenuWrapper>
    </>
  );
};

export default MobileSlideMenu;
