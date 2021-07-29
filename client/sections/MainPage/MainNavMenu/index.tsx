import React, { FC, useCallback, useEffect, useState } from "react";
import { MainNavMenuWrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBell,
  faGlobe,
  faHandshake,
  faHiking,
  faHotel,
  faPlaneDeparture,
  faUsers,
  faUserTie,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import router, { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { ICountry } from "@typings/db";

interface IProps {}

const MainNavMenu: FC<IProps> = () => {
  const { query } = useRouter();
  const { data: country } = useSWR<ICountry>(
    query?.code ? `/country/${query?.code}` : null,
    fetcher
  );

  const onClickCountry = useCallback(() => {
    if (query?.code) {
      router.push(`/country/${query?.code}`);
    } else {
      router.push(`/`);
    }
  }, [query]);
  return (
    <MainNavMenuWrapper>
      <div className="country">
        <div onClick={onClickCountry} className="country-img">
          <img
            src={
              country?.image_src ||
              "https://user-images.githubusercontent.com/74864925/126495159-2e4438ad-6efb-458a-b314-8f92823babc7.jpg"
            }
          />
        </div>
        <div className="country-desc">
          <a onClick={onClickCountry}>{country?.name || "전세계"}</a>
          {country && (
            <div>
              <span>좋아요 : 0</span>
              <span>포스팅수 : {country?.moments?.length}</span>
            </div>
          )}
        </div>
      </div>
      <ul>
        <Link href={country ? `/country/${country.code}?type=trip` : "/?type=trip"}>
          <a>
            <li className={query?.type === "trip" ? "menu-active" : ""}>
              <FontAwesomeIcon className="icon" icon={faPlaneDeparture} />
              <span>관광 및 여행</span>
            </li>
          </a>
        </Link>
        <Link
          href={
            country ? `/country/${country.code}?type=abroad+employment` : "/?type=abroad+employment"
          }
        >
          <a>
            <li className={query?.type === "abroad employment" ? "menu-active" : ""}>
              <FontAwesomeIcon className="icon" icon={faUserTie} />
              <span>유학 및 취업</span>
            </li>
          </a>
        </Link>
        <Link href={country ? `/country/${country.code}?type=job+opening` : "/?type=job+opening"}>
          <a>
            <li className={query?.type === "job opening" ? "menu-active" : ""}>
              <FontAwesomeIcon className="icon" icon={faHandshake} />
              <span>구인구직</span>
            </li>
          </a>
        </Link>
        <Link href={country ? `/country/${country.code}?type=community` : "/?type=community"}>
          <a>
            <li className={query?.type === "community" ? "menu-active" : ""}>
              <FontAwesomeIcon className="icon" icon={faUsers} />
              <span>현지 커뮤니티</span>
            </li>
          </a>
        </Link>
        {country ? (
          <Link href="/">
            <a>
              <li>
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                <span>전세계</span>
              </li>
            </a>
          </Link>
        ) : (
          <Link href="/country/select">
            <a>
              <li>
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                <span>국가선택</span>
              </li>
            </a>
          </Link>
        )}
      </ul>
    </MainNavMenuWrapper>
  );
};

export default MainNavMenu;
