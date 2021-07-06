import CommonPagination from "@components/Common/CommonPagination";
import { IClubPost } from "@typings/db";
import dayjs from "dayjs";
import router, { useRouter } from "next/router";
import React, { FC, useCallback, useState } from "react";
import { MainWrapper } from "./styles";
interface IProps {
  clubPosts: IClubPost[];
}

const ClubMainSection: FC<IProps> = ({ clubPosts }) => {
  const { query } = useRouter();
  const onClickPostTitle = useCallback((id) => {
    router.push(`/club/${query.group}/${id}`);
  }, []);
  return (
    <MainWrapper>
      <table>
        <thead>
          <tr className="table-header">
            <th>番号</th>
            <th>タイトル</th>
            <th>お名前</th>
            <th>日付</th>
            <th>いいね</th>
          </tr>
        </thead>
        <tbody>
          {clubPosts?.length > 0 &&
            clubPosts.map((v, i) => (
              <tr key={i} className="table-post">
                <td>{v.id}</td>
                <td onClick={() => onClickPostTitle(v.id)} className="title">
                  {v.title}
                </td>
                <td>{v.user?.name}</td>
                <td>{dayjs(v.createdAt).format("DD/MM/YYYY")}</td>
                <td>0</td>
              </tr>
            ))}
        </tbody>
      </table>
      {clubPosts?.length === 0 && (
        <div className="noPost">
          <img
            src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
            alt=""
          />
          <h2>掲示がありません 😰</h2>
        </div>
      )}
      <CommonPagination />
    </MainWrapper>
  );
};

export default ClubMainSection;
