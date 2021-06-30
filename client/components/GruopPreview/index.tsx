import Link from "next/link";
import React, { FC, useState } from "react";
import { GruopPreviewWrapper } from "./styles";

interface IProps {}

const GruopPreview: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <GruopPreviewWrapper>
      <Link href="club/bts">
        <a>
          <h2>
            <span className="point">BTS</span>
            クラブ
          </h2>
        </a>
      </Link>
      <table>
        <thead>
          <tr className="table-header">
            <th>タイトル</th>
            <th>お名前</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>これはプレビューですよ</td>
            <td>丹野美沙</td>
          </tr>
          <tr>
            <td>これはプレビューですよ</td>
            <td>丹野美沙</td>
          </tr>
          <tr>
            <td>これはプレビューですよ</td>
            <td>丹野美沙</td>
          </tr>
          <tr>
            <td>これはプレビューですよ</td>
            <td>丹野美沙</td>
          </tr>
          <tr>
            <td>これはプレビューですよ</td>
            <td>丹野美沙</td>
          </tr>
        </tbody>
      </table>
    </GruopPreviewWrapper>
  );
};

export default GruopPreview;
