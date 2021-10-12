import { faEdit, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BLUE_COLOR, DEFAULT_ICON_URL, FALL_IN_ASIA_LOGO, noRevalidate, WHITE_COLOR } from "config";
import React, { FC, useCallback, useEffect, useState } from "react";
import { MobileSlideMenuWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import Link from "next/link";
import { logoutAction } from "actions/user";
import { Divider } from "antd";
import { useRouter } from "next/router";
import { mainSlice } from "slices/main";
import fetcher from "utils/fetcher";
import useSWR from "swr";
import { ICountry } from "@typings/db";

interface IProps {}

const MobileSlideMenu: FC<IProps> = () => {
  const dispatch = useDispatch();
  const [activePath, setActivePath] = useState("");
  const { asPath, query } = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const { onSlideMenu } = useSelector((state: RootState) => state.main);
  const { data: country } = useSWR<ICountry>(
    query?.code ? `/country/${query?.code}` : null,
    fetcher,
    noRevalidate
  );
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
        <div className="slide-menu">
          <section className="slide-menu-main">
            <Link href="/">
              <a>
                <img className="slide-menu-logo" src={FALL_IN_ASIA_LOGO} alt="fall-in-asia-logo" />
              </a>
            </Link>
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
                      <img
                        src="https://img.icons8.com/color/144/000000/google-logo.png"
                        alt="google-logo"
                      />
                    </li>
                    <li style={{ background: "#FAE301" }}>
                      <img
                        src="https://user-images.githubusercontent.com/74864925/127008226-4ea6ec83-e82d-4e7f-bc9a-95b508f750cc.png"
                        alt="kakao-logo"
                      />
                    </li>
                    <li style={{ background: "#54BA5C" }}>
                      <img
                        src="https://user-images.githubusercontent.com/74864925/127008231-213a4559-d3e8-488d-9901-0fe3f78b58c1.png"
                        alt="naver-logo"
                      />
                    </li>
                  </ul>
                </button>
              </>
            )}
            <Divider className="slide-menu-divider" orientation="left">
              <span>바로가기</span>
            </Divider>
            <ul className="link-menu-wrapper">
              <Link href="/">
                <a className="direct-link">
                  <li
                    style={activePath === "moment" ? { borderLeft: `3px solid ${BLUE_COLOR}` } : {}}
                    className="link-menu-list"
                  >
                    모멘트{country && activePath !== "story" && ` > ${country?.name}`}
                  </li>
                </a>
              </Link>
              <ul
                style={activePath === "moment" ? { display: "block" } : { display: "none" }}
                className="moment-link-wrapper"
              >
                <Link
                  href={country ? `/country/${country.code}?type=community` : "/?type=community"}
                >
                  <a>
                    <li style={query?.type === "community" ? { color: BLUE_COLOR } : {}}>
                      한인 커뮤니티
                    </li>
                  </a>
                </Link>
                <Link href={country ? `/country/${country.code}?type=trip` : "/?type=trip"}>
                  <a>
                    <li style={query?.type === "trip" ? { color: BLUE_COLOR } : {}}>
                      여행정보 공유
                    </li>
                  </a>
                </Link>
                <Link
                  href={country ? `/country/${country.code}?type=scam+alert` : "/?type=scam+alert"}
                >
                  <a>
                    <li style={query?.type === "scam alert" ? { color: BLUE_COLOR } : {}}>
                      사기 경보
                    </li>
                  </a>
                </Link>
                <Link
                  href={country ? `/country/${country.code}?type=accompany` : "/?type=accompany"}
                >
                  <a>
                    <li style={query?.type === "accompany" ? { color: BLUE_COLOR } : {}}>
                      동행자 모집
                    </li>
                  </a>
                </Link>
                {country ? (
                  <Link href="/">
                    <a>
                      <li>아시아 전체</li>
                    </a>
                  </Link>
                ) : (
                  <Link href="/country/select">
                    <a>
                      <li>국가선택</li>
                    </a>
                  </Link>
                )}
              </ul>
              <Link href="/story">
                <a className="direct-link">
                  <li
                    style={activePath === "story" ? { borderLeft: `3px solid ${BLUE_COLOR}` } : {}}
                    className="link-menu-list"
                  >
                    연대기
                  </li>
                </a>
              </Link>
              <Link href="/news">
                <a className="direct-link">
                  <li
                    style={activePath === "news" ? { borderLeft: `3px solid ${BLUE_COLOR}` } : {}}
                    className="link-menu-list"
                  >
                    관광소식
                  </li>
                </a>
              </Link>
            </ul>
          </section>
          <section className="slide-menu-footer">
            <h4 className="license">ⓒ 2021 JANG HYUN SOO (Noah) All Rights Resrved.</h4>
            <div>
              <Link href="/about">
                <a>About us</a>
              </Link>
              <Link href="/about#policy">
                <a>이용약관</a>
              </Link>
            </div>
          </section>
        </div>
      </MobileSlideMenuWrapper>
    </>
  );
};

export default MobileSlideMenu;
