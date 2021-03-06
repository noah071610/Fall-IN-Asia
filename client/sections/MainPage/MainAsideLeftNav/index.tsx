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
  const { t } = useTranslation("common");
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
          <a onClick={onClickCountry}>
            {country?.name ? t(`country.${country?.name}`) : t("nav.allCountry")}
          </a>
          {country && (
            <div>
              <span>
                {t("main.postCount")} : {country?.moments?.length + country?.stories?.length}
              </span>
            </div>
          )}
        </div>
      </div>
      <ul>
        <Link href={country ? `/country/${country.code}?type=community` : "/?type=community"}>
          <a>
            <li className={query?.type === "community" ? "menu-active" : ""}>
              <FontAwesomeIcon className="icon" icon={faHandshake} />
              <span>{t("nav.community")}</span>
            </li>
          </a>
        </Link>
        <Link href={country ? `/country/${country.code}?type=travelInfo` : "/?type=travelInfo"}>
          <a>
            <li className={query?.type === "travelInfo" ? "menu-active" : ""}>
              <FontAwesomeIcon className="icon" icon={faPlaneDeparture} />
              <span>{t("nav.travelInfo")}</span>
            </li>
          </a>
        </Link>
        <Link href={country ? `/country/${country.code}?type=scam` : "/?type=scam"}>
          <a>
            <li className={query?.type === "scam" ? "menu-active" : ""}>
              <FontAwesomeIcon className="icon" icon={faExclamationCircle} />
              <span>{t("nav.scam")}</span>
            </li>
          </a>
        </Link>
        <Link href={country ? `/country/${country.code}?type=accompany` : "/?type=accompany"}>
          <a>
            <li className={query?.type === "accompany" ? "menu-active" : ""}>
              <FontAwesomeIcon className="icon" icon={faUsers} />
              <span>{t("nav.accompany")}</span>
            </li>
          </a>
        </Link>
        {country ? (
          <Link href="/">
            <a>
              <li>
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                <span>{t("nav.allCountry")}</span>
              </li>
            </a>
          </Link>
        ) : (
          <Link href="/country/select">
            <a>
              <li>
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                <span>{t("nav.selectCountry")}</span>
              </li>
            </a>
          </Link>
        )}
      </ul>
    </MainAsideLeftNavWrapper>
  );
};

export default MainAsideLeftNav;
