import Link from "next/link";
import React, { FC, useState } from "react";
import { Wrapper } from "./styles";

interface IProps {}

const SupportSection: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <Link href="/korean">
        <a>
          <div className="overlay" />
          <div data-aos="zoom-in">
            <h1>
              <span>韓</span>国語勉強会とレッスン探し
            </h1>
            <h3>KPOPが好きな先生か仲間と一緒に韓国語上達しよう</h3>
          </div>
        </a>
      </Link>
    </Wrapper>
  );
};

export default SupportSection;
