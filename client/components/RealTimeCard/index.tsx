import React, { FC, memo, useState } from "react";
import Image from "next/image";
import {
  CardWrapper,
  Icon,
  Content,
  RealTimeTable,
  Title,
  RealTimeComment,
  TagList,
  SeeMorePopup,
} from "./styles";
import afreeca from "../../public/images/afreeca_logo.png";
import youtube from "../../public/images/youtube_logo.png";
import insta from "../../public/images/insta_logo.png";
import twitch from "../../public/images/twitch_logo.png";
import { Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
interface IProps {}

const RealTimeCard: FC<IProps> = memo(() => {
  const [state, setstate] = useState();
  return (
    <CardWrapper>
      <Icon>
        <img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202103/12/img_20210312145811_acb61b6a.webp" />
      </Icon>
      <Content>
        <Title>
          <h2>파이</h2>
          <Image width="110px" height="30px" src={afreeca} alt="fe" />
          <Divider type="vertical" />
          <Image width="110px" height="30px" src={youtube} alt="fe" />
        </Title>
        <TagList>
          <li className="info-tag">화제의인물</li>
          <li className="info-tag">욕먹는중</li>
          <li className="info-tag">에구머니나</li>
          <li className="info-tag">하쿠나마타타</li>
        </TagList>
        <RealTimeTable>
          <div className="table-column followers">
            <span>352,540</span>
            <p>구독자수</p>
          </div>
          <div className="table-column platform">
            <span>3</span>
            <p>좋아요</p>
          </div>
          <div className="table-column comments">
            <span>23</span>
            <p>코멘트</p>
          </div>
        </RealTimeTable>
        <RealTimeComment>
          <h3>실시간 코멘트 🚀</h3>
          <div>
            <UserOutlined />
            <span className="user-name">노아짱 : </span>
            <span className="user-comment">앞으로 반성하고 노력해서 더 빛나길 기대합니다.</span>
          </div>
        </RealTimeComment>
      </Content>
      <SeeMorePopup className="seemore">
        인플루언서 상세보기
        <img src="https://img.icons8.com/emoji/48/000000/glowing-star.png" />
      </SeeMorePopup>
    </CardWrapper>
  );
});

export default RealTimeCard;
