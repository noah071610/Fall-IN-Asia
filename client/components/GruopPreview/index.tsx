import { IClubPost, ITopClubPost } from "@typings/db";
import Link from "next/link";
import React, { FC, useState } from "react";
import { GruopPreviewWrapper } from "./styles";

interface IProps {
  posts: ITopClubPost[];
  groupName: string;
  keyName: string;
}

const GruopPreview: FC<IProps> = ({ groupName, keyName, posts }) => {
  return (
    <GruopPreviewWrapper>
      <Link href={`club/${keyName}`}>
        <a>
          <h2>
            <span className="point">{groupName}</span>
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
          {posts?.map((v, i) => {
            return (
              <tr className="table-row" key={i}>
                <td className="row-title">
                  <Link href={`club/${keyName}/${v.posts_id}`}>
                    <a>{v.posts_title}</a>
                  </Link>
                </td>
                <td className="row-name">{v.users_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </GruopPreviewWrapper>
  );
};

export default GruopPreview;
