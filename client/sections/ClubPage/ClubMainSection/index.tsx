import React, { FC, useState } from "react";
import { MainWrapper } from "./styles";

interface IProps {}

const ClubMainSection: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <MainWrapper>
      <table>
        <tr className="table-header">
          <th>番号</th>
          <th>タイトル</th>
          <th>お名前</th>
          <th>日付</th>
          <th>いいね</th>
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
        <tr className="table-post">
          <td>01</td>
          <td>BTSのコンサートを行ってきました！！</td>
          <td>ゆきえ</td>
          <td>2021/6/29</td>
          <td>0</td>
        </tr>
      </table>
    </MainWrapper>
  );
};

export default ClubMainSection;
