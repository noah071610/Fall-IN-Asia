import React, { FC, useState } from "react";
import { Wrapper } from "./styles";
import { ResponsiveRadar } from "@nivo/radar";
import Link from "next/link";

interface IProps {}

const CommunitySection: FC<IProps> = () => {
  const [state, setstate] = useState();
  const chartData = [
    {
      taste: "ダンス上手",
      chardonay: 78,
      carmenere: 51,
      syrah: 95,
    },
    {
      taste: "カッコいい",
      chardonay: 46,
      carmenere: 92,
      syrah: 117,
    },
    {
      taste: "憧れ",
      chardonay: 67,
      carmenere: 118,
      syrah: 110,
    },
    {
      taste: "スタイルいい",
      chardonay: 120,
      carmenere: 21,
      syrah: 48,
    },
    {
      taste: "面白い",
      chardonay: 78,
      carmenere: 51,
      syrah: 95,
    },
    {
      taste: "可愛い",
      chardonay: 49,
      carmenere: 21,
      syrah: 103,
    },
    {
      taste: "お洒落",
      chardonay: 78,
      carmenere: 51,
      syrah: 95,
    },
  ];
  return (
    <Wrapper>
      <ul className="community-filter">
        <li>セブンティーン</li>
        <li>宇宙少女</li>
        <li>OH MY GIRL</li>
      </ul>
      <div className="community-content">
        <div className="community-poster">
          <img src="https://coneru-web.com/wp-content/uploads/2018/04/korean-seventeen.jpg" />
          <h2>
            <Link href="/">
              <a>セブンティーン</a>
            </Link>
          </h2>
        </div>
        <div>
          <div className="rader">
            <ResponsiveRadar
              data={chartData}
              margin={{ top: 0, right: 80, bottom: 0, left: 80 }}
              keys={["chardonay"]}
              indexBy="taste"
              maxValue="auto"
              curve="linearClosed"
              borderWidth={2}
              borderColor={{ from: "color" }}
              gridLevels={5}
              gridShape="circular"
              gridLabelOffset={15}
              enableDots={true}
              dotSize={10}
              dotColor={{ theme: "background" }}
              dotBorderWidth={2}
              dotBorderColor={{ from: "color" }}
              enableDotLabel={true}
              dotLabel="value"
              dotLabelYOffset={-12}
              colors={{ scheme: "nivo" }}
              fillOpacity={0.25}
              blendMode="multiply"
              animate={true}
              isInteractive={true}
            />
          </div>
          <h3>このグループはどんな感じ？</h3>
          <ul>
            <li className="tag">
              <button>😍 可愛い</button>
            </li>
            <li className="tag">
              <button>😊 カッコいい</button>
            </li>
            <li className="tag">
              <button>😳 憧れ</button>
            </li>
            <li className="tag">
              <button>🥰 スタイルいい</button>
            </li>
            <li className="tag">
              <button>😘 綺麗</button>
            </li>
            <li className="tag">
              <button>💃 ダンス上手</button>
            </li>
            <li className="tag">
              <button>🤩 お洒落</button>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default CommunitySection;
