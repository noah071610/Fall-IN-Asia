import Link from "next/link";
import React, { FC, useState } from "react";
import { Wrapper } from "./styles";

interface IProps {}

const SupportSection: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <Link href="/support">
        <a>
          <div className="overlay" />

          <div data-aos="zoom-in">
            <h1>
              <span>愛</span>を伝える簡単な方法
            </h1>
            <h3>たった広告を見ただけで全額を好きなアイドルにドネーション</h3>
          </div>
        </a>
      </Link>
    </Wrapper>
  );
};

export default SupportSection;
