import React, { FC, useState } from "react";
import { TitleWrapper, ClubSelectModal } from "./styles";
import { Input } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";
import CommonTitle from "@components/Common/CommonTitle";
import CommonSearch from "@components/Common/CommonSearch";
import { useRouter } from "next/dist/client/router";
import fetcher from "utils/fetcher";
import useSWR from "swr";
const { Search } = Input;

interface IProps {}

const ClubTitleSection: FC<IProps> = () => {
  const { query } = useRouter();
  const { data, error, revalidate, mutate } = useSWR(`/club/${query.group}`, fetcher);
  if (data) {
    console.log(data);
  }
  return (
    <TitleWrapper>
      <CommonTitle point={data?.name} title="クラブ" />
      <div className="club-list">
        <span>訪ねたクラブ</span>
        <ul>
          <li className="tag">
            <a>Oh my girl</a>
          </li>
          <li className="tag">
            <a>Black Pink</a>
          </li>
          <li className="tag">
            <a>モンスターX</a>
          </li>
          <li className="tag">
            <a>セブンティーン</a>
          </li>
        </ul>
      </div>
    </TitleWrapper>
  );
};

export default ClubTitleSection;
