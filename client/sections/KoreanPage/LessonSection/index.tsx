import React, { FC, useCallback, useState } from "react";
import { LessonSectionWrapper } from "./styles";
import LessonCard from "@components/LessonCard/";
import { japanMapList } from "config";
import { DownCircleOutlined } from "@ant-design/icons";
import useToggle from "@hooks/useToggle";
interface IProps {}

const LessonSection: FC<IProps> = () => {
  const [onAreaFilter, onClickAreaFilter] = useToggle(true);
  const [onTypeFilter, onClickTypeFilter] = useToggle(true);

  return (
    <LessonSectionWrapper>
      <aside>
        <div onClick={onClickAreaFilter} className="lesson-type">
          <h3>地域</h3>
          <DownCircleOutlined className={onAreaFilter && "reverse"} />
        </div>
        <div className="lesson-list">
          <ul className={onAreaFilter ? "drop-down" : "roll-up"}>
            {japanMapList.map((v, i) => (
              <li key={i}>{v.name}</li>
            ))}
          </ul>
        </div>
        <div onClick={onClickTypeFilter} className="lesson-type">
          <h3>フィルター</h3>
          <DownCircleOutlined className={onAreaFilter && "reverse"} />
        </div>
        <div className="lesson-list">
          <ul className={onTypeFilter ? "drop-down" : "roll-up"}>
            <li>TOPIK</li>
            <li>会話</li>
            <li>ビジネス</li>
            <li>趣味</li>
          </ul>
        </div>
      </aside>
      <div className="lesson-card-wrapper">
        <LessonCard />
        <LessonCard />
        <LessonCard />
        <LessonCard />
        <LessonCard />
        <LessonCard />
        <LessonCard />
        <LessonCard />
      </div>
    </LessonSectionWrapper>
  );
};

export default LessonSection;
