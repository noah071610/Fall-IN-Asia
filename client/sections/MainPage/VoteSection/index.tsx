import React, { FC, useState } from "react";
import { Wrapper } from "./styles";
import { ResponsiveRadar } from "@nivo/radar";
import Link from "next/link";

interface IProps {
  isOnVotePage?: Boolean;
}

const VoteSection: FC<IProps> = ({ isOnVotePage }) => {
  const [state, setstate] = useState();
  const chartData = [
    {
      taste: "ダンス上手",
      トタル: 78,
    },
    {
      taste: "カッコいい",
      トタル: 46,
    },
    {
      taste: "憧れ",
      トタル: 67,
    },
    {
      taste: "スタイルいい",
      トタル: 120,
    },
    {
      taste: "綺麗",
      トタル: 78,
    },
    {
      taste: "可愛い",
      トタル: 49,
    },
    {
      taste: "お洒落",
      トタル: 78,
    },
  ];
  return (
    <Wrapper>
      <ul className="community-filter">
        <li>
          <a>セブンティーン</a>
        </li>
        <li>
          <a>宇宙少女</a>
        </li>
        <li>
          <a>OH MY GIRL</a>
        </li>
        {!isOnVotePage && (
          <Link href="/vote">
            <a>
              <li>もっと見る</li>
            </a>
          </Link>
        )}
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
              keys={["トタル"]}
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

export default VoteSection;
