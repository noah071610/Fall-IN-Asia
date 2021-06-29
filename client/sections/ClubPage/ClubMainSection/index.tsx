import { Input } from "antd";
import React, { FC, ReactNode, useState } from "react";
import { MainWrapper, PaginationBar } from "./styles";
import { Pagination } from "antd";
const { Search } = Input;
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
      <PaginationBar>
        <Search />
        <Pagination showQuickJumper defaultCurrent={1} total={50} />
      </PaginationBar>
      <div className="big-margin-div" />
    </MainWrapper>
  );
};

export default ClubMainSection;
