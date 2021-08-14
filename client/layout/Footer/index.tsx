import { GithubFilled, InstagramFilled } from "@ant-design/icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FC, useState } from "react";
import { FooterWrapper } from "./styles";

interface IProps {}

const Footer: FC<IProps> = () => {
  return (
    <FooterWrapper>
      <div className="footer-inner">
        <div className="footer-top">
          <h1>fallinasia.com</h1>
          <span>아시아를 사랑하는 여행자들의 작은 커뮤니티</span>
        </div>
        <div className="footer-list-wrapper">
          <div className="footer-list footer-sitemap">
            <h2>Site Map</h2>
            <ul>
              <Link href="/">
                <a>
                  <li>모멘트</li>
                </a>
              </Link>
              <Link href="/story">
                <a>
                  <li>연대기</li>
                </a>
              </Link>
              <Link href="/news">
                <a>
                  <li>관광뉴스</li>
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
                  <li>개발자 정보</li>
                </a>
              </Link>
              <Link href="/about#policy">
                <a>
                  <li>이용 약관</li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li>커피 사주기</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <h4 className="license">ⓒ JANG HYUN SOO (Noah) All Rights Resrved.</h4>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
