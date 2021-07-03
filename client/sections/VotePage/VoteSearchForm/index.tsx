import React, { FC, useState } from "react";
import { VoteSearchWrapper } from "./styles";
import GroupCard from "@components/GroupCard";
import Slider from "react-slick";
import CommonTitle from "@components/Common/CommonTitle";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import CommonSearch from "@components/Common/CommonSearch";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { IGroup } from "@typings/db";

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
  const { data, error, revalidate, mutate } = useSWR("/group", fetcher);
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
    <VoteSearchWrapper>
      <CommonTitle point="スタイル" title="投票" subtitle="貴方の推しのスタイルは何ですか？" />
      <CommonSearch />
      <div className="vote-filter">
        <Slider {...groupCardSettings}>
          {data?.map((v: IGroup, i: number) => (
            <GroupCard isVote={true} name={v.name} image={v.image} group={v.group} key={i} />
          ))}
        </Slider>
      </div>
    </VoteSearchWrapper>
  );
};

export default VoteSearchForm;
