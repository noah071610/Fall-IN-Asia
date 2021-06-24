import React, { FC, useState } from "react";
import { HeaderWrapper, Poster } from "./styles";
import { LineChartOutlined, HeartOutlined, CommentOutlined, FireOutlined } from "@ant-design/icons";
import Link from "next/link";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [state, setstate] = useState();
  return (
    <HeaderWrapper>
      <Poster>
        <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" />
      </Poster>
      <nav>
        <li>
          <Link href="/">
            <a>
              <LineChartOutlined />
              <span className="list-text">실시간 현황</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <HeartOutlined />
              <span className="list-text">추천 인플루언서</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <FireOutlined />
              <span className="list-text">이슈 모아보기</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <CommentOutlined />
              <span className="list-text">커뮤니티</span>
            </a>
          </Link>
        </li>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
