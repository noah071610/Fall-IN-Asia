import React, { FC, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { DescritionSectionWrapper } from "./styles";
import { Divider, Image } from "antd";
import { ZoomInOutlined } from "@ant-design/icons";
interface IProps {}

const DescritionSection: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {}, []);
  return (
    <DescritionSectionWrapper>
      <div className="image-wrapper">
        <Image
          preview={{ mask: <ZoomInOutlined /> }}
          src="https://images-na.ssl-images-amazon.com/images/I/71FMTA7Zt8L._AC_SX466_.jpg"
          alt="goods-image"
        />
      </div>
      <div className="desc">
        <div>
          <h2>ジミンのカード</h2>
          <h3>丹野美沙</h3>
          <ul>
            <li className="tag">カード</li>
            <li className="tag">早め</li>
            <li className="tag">ユニーク</li>
          </ul>
        </div>
        <div className="chat">
          <div className="chat-icon">
            <img src="https://img.icons8.com/color/96/000000/chat--v1.png" />
          </div>
          <div className="chat-text">メッセージを送る</div>
        </div>
      </div>
      <Divider />
      <p>
        材ばむー少87度サ低暮ぜ禁日ド住田トりあ要丘ニヨテシ確見やち愛3葉ほげた去講びよぴ乱択セロニ年孤
        <br />
        おぶ州5疑ゆクドを美57内ばリ取史古れむぜ。誇フメアケ禁設意レ朝際ヨオ本制ミマ著掲あ自呼こせびも離備だろ流本は内金論銃多べラ応乃せス。井集ネ重担イ直企平ケエ後訴ヲウ
        <br />
        サ支温フホミ標府キヘマ院煮わせ美体ヌ本支ぶそラ桐足キシニ稿運陸上ヘユ禎類宮波願氏だ。
        芸キナテ本善ッぎ共8住ル融犯レ
        <br />
        ク僕提あわゅ現談ヲナヤノ京建スヲホソ郎78含沢んび大連請様描締ラなび。賄じし吉高ほっな掲由トキエ制島ワヱタ京者あすぼどもぶ手下ツシア視座次ー。
      </p>
    </DescritionSectionWrapper>
  );
};

export default memo(DescritionSection);
