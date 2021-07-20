import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import React, { FC, useState } from "react";
import { BoxCardWrapper } from "./styles";

interface IProps {}

const BoxCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <BoxCardWrapper>
      <div className="image-wrapper">
        <img src="https://img.hankyung.com/photo/202103/0Q.25801355.1.jpg" alt="thai" />
      </div>
      <div className="box-card-info">
        <NameSpace />
        <ul className="box-card-list">
          <li>
            <CommentOutlined />
            <span className="count">0</span>
          </li>
          <li>
            <LikeOutlined />
            <span className="count">0</span>
          </li>
        </ul>
      </div>
      <h2>나의 태국 일대기 1. 아유타야 방문기</h2>
    </BoxCardWrapper>
  );
};

export default BoxCard;
