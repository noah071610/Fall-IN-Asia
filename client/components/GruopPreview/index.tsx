import { IClubPost } from "@typings/db";
import Link from "next/link";
import React, { FC, useState } from "react";
import { GruopPreviewWrapper } from "./styles";

interface IProps {
  clubPosts: IClubPost[];
  name: string;
  club: string;
}

const GruopPreview: FC<IProps> = ({ name, club, clubPosts }) => {
  return (
    <GruopPreviewWrapper>
      <Link href={`club/${club}`}>
        <a>
          <h2>
            <span className="point">{name}</span>
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
          {clubPosts?.map((v, i) => {
            return (
              <tr className="table-row" key={i}>
                <td className="row-title">
                  <Link href={`club/${club}/${v.id}`}>
                    <a>{v.title}</a>
                  </Link>
                </td>

                <td className="row-name">{v.UserId.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </GruopPreviewWrapper>
  );
};

export default GruopPreview;
