import React, { FC, useCallback, useState } from "react";
import { Wrapper } from "./styles";
import { ResponsiveRadar } from "@nivo/radar";
import Link from "next/link";
import { RootState } from "slices";
import { useSelector } from "react-redux";
import router from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { noRevalidate } from "config";

interface IProps {
  isOnVotePage?: Boolean;
}

const VoteSection: FC<IProps> = ({ isOnVotePage }) => {
  const { data: initialData } = useSWR(`/group/bts`, fetcher, noRevalidate);
  const { selectedGroup } = useSelector((state: RootState) => state.main);
  const chartData = [
    {
      taste: "実力派",
      トタル: 78,
    },
    {
      taste: "カッコいい",
      トタル: 46,
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
      {!isOnVotePage && (
        <ul className="vote-list">
          <li>
            <a>セブンティーン</a>
          </li>
          <li>
            <a>宇宙少女</a>
          </li>
          <li>
            <a>OH MY GIRL</a>
          </li>
          <Link href="/vote">
            <a>
              <li>もっと見る</li>
            </a>
          </Link>
        </ul>
      )}
      <div className="vote-content">
        {selectedGroup ? (
          <div className="vote-poster">
            <img src={selectedGroup?.image} alt={selectedGroup?.name} />
            <div>
              <h2>
                <span>{selectedGroup?.name[0]}</span>
                {selectedGroup?.name.slice(1)}
              </h2>
              <button
                onClick={() => {
                  router.push(`/club/${selectedGroup.group}`);
                }}
                className="basic-btn"
              >
                クラブに行く
              </button>
            </div>
          </div>
        ) : (
          <div className="vote-poster">
            <img src={initialData?.image} alt={initialData?.group_name} />
            <div>
              <h2>
                <span>{initialData?.group_name[0]}</span>
                {initialData?.group_name.slice(1)}
              </h2>
              <button
                onClick={() => {
                  router.push(`/club/${initialData.key_name}`);
                }}
                className="basic-btn"
              >
                クラブに行く
              </button>
            </div>
          </div>
        )}
        <div>
          <div className="vote-rader">
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
              gridLabelOffset={35}
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
          <ul className="vote-tag-list">
            <li>
              <button className="basic-btn">😳 実力派</button>
            </li>
            <li>
              <button className="basic-btn">😊 カッコいい</button>
            </li>
            <li>
              <button className="basic-btn">😘 綺麗</button>
            </li>
            <li>
              <button className="basic-btn">😍 可愛い</button>
            </li>
            <li>
              <button className="basic-btn">🤩 お洒落</button>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default VoteSection;
