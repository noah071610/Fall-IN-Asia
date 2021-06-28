import React, { FC, useState } from "react";
import { Wrapper } from "./styles";
import { Input } from "antd";
import GroupCard from "@components/GroupCard";
import Slider from "react-slick";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
const { Search } = Input;

interface IProps {}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return <DoubleRightOutlined className="right-arrow" onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return <DoubleLeftOutlined className="left-arrow" onClick={onClick} />;
}

const VoteSearchForm: FC<IProps> = () => {
  const [state, setstate] = useState();
  const groupCardSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Wrapper>
      <div className="search-bar">
        <Search />
        <div className="hot-group-list">
          <h2>人気</h2>
          <ul>
            <li className="tag">
              <a>Oh my girl</a>
            </li>
          </ul>
        </div>
      </div>
      <Slider {...groupCardSettings}>
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </Slider>
    </Wrapper>
  );
};

export default VoteSearchForm;
