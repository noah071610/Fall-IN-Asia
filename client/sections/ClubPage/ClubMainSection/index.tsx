import CommonPagination from "@components/Common/CommonPagination";
import { IClubPost } from "@typings/db";
import dayjs from "dayjs";
import router from "next/router";
import React, { FC, useCallback, useState } from "react";
import { MainWrapper } from "./styles";
interface IProps {
  clubPosts: IClubPost[];
}

const ClubMainSection: FC<IProps> = ({ clubPosts }) => {
  const [state, setstate] = useState();
  const onClickPostTitle = useCallback((id, club) => {
    router.push(`/club/${club}/${id}`);
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
          {clubPosts?.map((v, i) => (
            <tr key={i} className="table-post">
              <td>{v.id}</td>
              <td onClick={() => onClickPostTitle(v.id, v.club)} className="title">
                {v.title}
              </td>
              <td>{v.UserId?.name}</td>
              <td>{dayjs(v.createdAt).format("DD/MM/YYYY")}</td>
              <td>0</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CommonPagination />
      <div className="big-margin-div" />
    </MainWrapper>
  );
};

export default ClubMainSection;
