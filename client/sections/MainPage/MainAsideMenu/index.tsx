import React, { FC, useCallback, useEffect, useState } from "react";
import { MainAsideMenuWrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBell,
  faGlobe,
  faHiking,
  faHotel,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import router, { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { toastErrorMessage, toastSuccessMessage } from "config";
import { ICountry } from "@typings/db";

interface IProps {}

const MainAsideMenu: FC<IProps> = () => {
  const { query } = useRouter();
  const {
    data: country,
    error,
    revalidate,
  } = useSWR<ICountry>(query?.code ? `/country/${query?.code}` : null, fetcher);

  const onClickCountry = useCallback(() => {
    if (query?.code) {
      router.push(`/country/${query?.code}`);
    } else {
      router.push(`/`);
    }
  }, [query]);
  return (
    <MainAsideMenuWrapper>
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
              <span>포스팅수 : {country?.mainPosts?.length}</span>
            </div>
          )}
        </div>
      </div>
      <ul>
        <li>
          <FontAwesomeIcon className="icon" icon={faHiking} />
          놀거리
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faBell} />
          사기경보
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faUtensils} />
          음식
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faHotel} />
          숙박
        </li>
        {country ? (
          <Link href="/">
            <a>
              <li>
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                전세계
              </li>
            </a>
          </Link>
        ) : (
          <Link href="/country/select">
            <a>
              <li>
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                국가선택
              </li>
            </a>
          </Link>
        )}
      </ul>
    </MainAsideMenuWrapper>
  );
};

export default MainAsideMenu;
