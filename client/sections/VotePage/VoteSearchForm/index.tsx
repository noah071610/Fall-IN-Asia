import React, { FC, useCallback, useMemo, useState } from "react";
import { VoteSearchWrapper } from "./styles";
import GroupCard from "@components/Cards/GroupCard";
import Slider from "react-slick";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { IGroup } from "@typings/db";
import AutoCompleteSearch from "@components/AutoCompleteSearch";

interface IProps {
  groupsData: IGroup[];
}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return <DoubleRightOutlined className="right-arrow" onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return <DoubleLeftOutlined className="left-arrow" onClick={onClick} />;
}

const VoteSearchForm: FC<IProps> = ({ groupsData }) => {
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
      <AutoCompleteSearch isVote={true} groupsData={groupsData} />
      <div className="vote-filter">
        <Slider {...groupCardSettings}>
          {groupsData?.map((v: IGroup, i: number) => (
            <GroupCard isVote={true} key={i} groupData={v} />
          ))}
        </Slider>
      </div>
    </VoteSearchWrapper>
  );
};

export default VoteSearchForm;
