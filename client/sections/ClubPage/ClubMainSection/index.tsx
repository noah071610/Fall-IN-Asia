import CommonPagination from "@components/Common/CommonPagination";
import React, { FC, useState } from "react";
import { MainWrapper } from "./styles";
interface IProps {}

const ClubMainSection: FC<IProps> = () => {
  const [state, setstate] = useState();
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
          <tr className="table-post">
            <td>01</td>
            <td>BTSのコンサートを行ってきました！！</td>
            <td>ゆきえ</td>
            <td>2021/6/29</td>
            <td>0</td>
          </tr>
          <tr className="table-post">
            <td>01</td>
            <td>BTSのコンサートを行ってきました！！</td>
            <td>ゆきえ</td>
            <td>2021/6/29</td>
            <td>0</td>
          </tr>
          <tr className="table-post">
            <td>01</td>
            <td>BTSのコンサートを行ってきました！！</td>
            <td>ゆきえ</td>
            <td>2021/6/29</td>
            <td>0</td>
          </tr>
          <tr className="table-post">
            <td>01</td>
            <td>BTSのコンサートを行ってきました！！</td>
            <td>ゆきえ</td>
            <td>2021/6/29</td>
            <td>0</td>
          </tr>
          <tr className="table-post">
            <td>01</td>
            <td>BTSのコンサートを行ってきました！！</td>
            <td>ゆきえ</td>
            <td>2021/6/29</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <CommonPagination />
      <div className="big-margin-div" />
    </MainWrapper>
  );
};

export default ClubMainSection;
