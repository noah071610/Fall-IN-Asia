import { GithubFilled, InstagramFilled } from "@ant-design/icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { FooterWrapper } from "./styles";

interface IProps {}

const Footer: FC<IProps> = () => {
  const { t } = useTranslation("common");
  return (
    <FooterWrapper>
      <div className="footer-inner">
        <div className="footer-top">
          <h1>fallinasia.com</h1>
          <span>{t("about.footerMention")}</span>
        </div>
        <div className="footer-list-wrapper">
          <div className="footer-list footer-sitemap">
            <h2>Site Map</h2>
            <ul>
              <Link href="/">
                <a>
                  <li>{t("nav.moment")}</li>
                </a>
              </Link>
              <Link href="/story">
                <a>
                  <li>{t("nav.story")}</li>
                </a>
              </Link>
              <Link href="/news">
                <a>
                  <li>{t("nav.news")}</li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="footer-list footer-contact">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="mailto:noah071610@naver.com">
                  <FontAwesomeIcon className="anticon" icon={faEnvelope} />
                  noah071610@naver.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/salmonchobab/" target="_blank" rel="noreferrer">
                  <InstagramFilled />
                  salmonchobab
                </a>
              </li>
              <li>
                <a href="https://github.com/noah071610" target="_blank" rel="noreferrer">
                  <GithubFilled />
                  noah071610
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-list footer-aboutsite">
            <h2>About site</h2>
            <ul>
              <Link href="/about">
                <a>
                  <li>{t("about.developer")}</li>
                </a>
              </Link>
              <Link href="/about#policy">
                <a>
                  <li>{t("about.terms")}</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <h4 className="license">ⓒ 2021 JANG HYUN SOO (Noah) All Rights Resrved.</h4>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
