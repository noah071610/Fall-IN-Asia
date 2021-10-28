import React, { FC, useCallback } from "react";
import { MainAsideLeftNavWrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faGlobe,
  faHandshake,
  faPlaneDeparture,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import router, { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { ICountry } from "@typings/db";
import { noRevalidate, WORLD_IMAGE } from "config";
import { useTranslation } from "next-i18next";

interface IProps {}

const MainAsideLeftNav: FC<IProps> = () => {
  const { t } = useTranslation("main");
  const { query } = useRouter();
  const { data: country } = useSWR<ICountry>(
    query?.code ? `/country/${query?.code}` : null,
    fetcher,
    noRevalidate
  );

  const onClickCountry = useCallback(() => {
    if (query?.code) {
      router.push(`/country/${query?.code}`);
    } else {
      router.push(`/`);
    }
  }, [query]);
  return (
    <MainAsideLeftNavWrapper>
      <div className="country-info">
        <div onClick={onClickCountry} className="country-img-wrapper">
          <img
            className="country-img"
            src={country?.image_src || WORLD_IMAGE}
            alt={country ? `${country?.name + "_img"}` : "world-img"}
          />
        </div>
        <div className="country-desc">
          <a onClick={onClickCountry}>{country?.name || t("allCountry")}</a>
          {country && (
            <div>
              <span>포스팅수 : {country?.moments?.length + country?.stories?.length}</span>
            </div>
          )}
        </div>
      </div>
      <ul>
        <Link href={country ? `/country/${country.code}?type=community` : "/?type=community"}>
          <a>
            <li className={query?.type === "community" ? "menu-active" : ""}>
              <FontAwesomeIcon className="icon" icon={faHandshake} />
              <span>{t("community")}</span>
            </li>
          </a>
        </Link>
        <Link href={country ? `/country/${country.code}?type=trip` : "/?type=trip"}>
          <a>
            <li className={query?.type === "trip" ? "menu-active" : ""}>
              <FontAwesomeIcon className="icon" icon={faPlaneDeparture} />
              <span>{t("shareInfo")}</span>
            </li>
          </a>
        </Link>
        <Link href={country ? `/country/${country.code}?type=scam+alert` : "/?type=scam+alert"}>
          <a>
            <li className={query?.type === "scam alert" ? "menu-active" : ""}>
              <FontAwesomeIcon className="icon" icon={faExclamationCircle} />
              <span>{t("scam")}</span>
            </li>
          </a>
        </Link>
        <Link href={country ? `/country/${country.code}?type=accompany` : "/?type=accompany"}>
          <a>
            <li className={query?.type === "accompany" ? "menu-active" : ""}>
              <FontAwesomeIcon className="icon" icon={faUsers} />
              <span>{t("accompany")}</span>
            </li>
          </a>
        </Link>
        {country ? (
          <Link href="/">
            <a>
              <li>
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                <span>{t("allCountry")}</span>
              </li>
            </a>
          </Link>
        ) : (
          <Link href="/country/select">
            <a>
              <li>
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                <span>{t("selectCountry")}</span>
              </li>
            </a>
          </Link>
        )}
      </ul>
    </MainAsideLeftNavWrapper>
  );
};

export default MainAsideLeftNav;
