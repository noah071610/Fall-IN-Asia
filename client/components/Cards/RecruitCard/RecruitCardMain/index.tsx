import React, { FC, memo, useEffect, useState } from "react";
import { Rate } from "antd";
import { RecruitCardMainWrapper, CardMainContent, CardBtn } from "./styles";
import { CommentOutlined } from "@ant-design/icons";
import { IStudyPost } from "@typings/db";
import RecruitCradDetail from "../RecruitCradProfile";
import useToggle from "@hooks/useToggle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { toastSuccessMessage } from "config";
import { studySlice } from "slices/study";
import router from "next/router";
interface IProps {
  studyPost: IStudyPost;
  setType: (type: string) => void;
}

interface IProps {}

const RecruitCardMain: FC<IProps> = ({ studyPost, setType }) => {
  const [onProfile, onChangeProfileBtn, setOnProfile] = useToggle(false);
  const { studyPostDeleteDone } = useSelector((state: RootState) => state.study);

  useEffect(() => {
    if (studyPostDeleteDone) {
      setOnProfile(false);
    }
  }, [studyPostDeleteDone]);

  useEffect(() => {
    setOnProfile(false);
  }, [setType]);
  return (
    <RecruitCardMainWrapper>
      <CardMainContent>
        <div className="recruit-icon">
          <img src={studyPost?.leaderUser?.icon} alt="recruit_icon" />
        </div>
        <div className="recruit-desc">
          <div>
            <a className="recruit-name">{studyPost?.leaderUser?.name}</a>
            <span
              onClick={() => {
                setType(studyPost?.type);
                router.push("korean");
              }}
              className="tag"
            >
              {studyPost?.type}
            </span>
            <span
              onClick={() => {
                setType(studyPost?.area);
                router.push("korean");
              }}
              className="tag"
            >
              {studyPost?.area}
            </span>
          </div>
          <h4>{studyPost?.title}</h4>
          <Rate disabled defaultValue={studyPost?.leaderUser?.rate} />
          <p>
            <CommentOutlined />
            <span className="name">丹野**</span>
            <span>すごく分かりやすいです！おすすめです！</span>
          </p>
        </div>
      </CardMainContent>
      {onProfile && <RecruitCradDetail studyPost={studyPost} />}
      <CardBtn>
        <button onClick={onChangeProfileBtn} className="basic-btn">
          {onProfile ? "プロフィールを閉じる" : "プロフィール一覧"}
        </button>
        <button className="basic-btn">申し込み</button>
      </CardBtn>
    </RecruitCardMainWrapper>
  );
};

export default memo(RecruitCardMain);
