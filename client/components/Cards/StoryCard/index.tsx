import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import React, { FC, useState } from "react";
import { StoryCardWrapper } from "./styles";

interface IProps {}

const StoryCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <StoryCardWrapper>
      <div className="image-wrapper">
        <img src="https://img.hankyung.com/photo/202103/0Q.25801355.1.jpg" alt="thai" />
      </div>
      <div className="story-main">
        <h2>태국고대문명을 찾아서.. 아유타야 여행기 1화</h2>
        <div className="story-info">
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
        <div className="story-content">
          많이 거친 사랑의 오아이스도 갑 것이다. 실현에 있는 행복스럽고 그들의 황금시대를 광야에서
          반짝이는 봄바람이다. 얼음에 풀밭에 뼈 이상 것은 되는 봄바람이다. 하는 두손을 있는 광야에서
          맺어, 가치를 곳이 앞이 사막이다. 봄바람을 이 속잎나고, 인생을 살았으며, 사막이다. 돋고,
          그들의 가는 용기가 그들의 방지하는 밝은 이상, 사라지지 때문이다. 인생을 같은 발휘하기
          목숨이 소담스러운 사막이다. 기관과 꽃 하는 우리의 있음으로써 인생에 그들은 웅대한
          부패뿐이다. 찾아 위하여서 가는 뿐이다.
        </div>
      </div>
    </StoryCardWrapper>
  );
};

export default StoryCard;
