import React, { FC, useCallback, useEffect, useState } from "react";
import { IStudyPost } from "@typings/db";
import { RecruitCradProfileWrapper } from "./styles";
import ReactHtmlParser from "react-html-parser";
import { Divider } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import ConfirmPasswordModal from "@components/ConfirmPasswordModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";

interface IProps {
  studyPost: IStudyPost;
}

const RecruitCradProfile: FC<IProps> = ({ studyPost }) => {
  const dispatch = useDispatch();
  const [onDelete, setOnDelete] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (user?.id === studyPost?.leaderUser.id) {
      setIsOwner(true);
    }
  }, [user, studyPost]);
  const onClickDeleteBtn = useCallback(() => {
    setOnDelete((prev) => !prev);
  }, []);
  return (
    <RecruitCradProfileWrapper>
      <h2 className="card-profile-title">
        <span>{studyPost.title}</span>
        {isOwner && (
          <a onClick={onClickDeleteBtn}>
            <DeleteOutlined />
          </a>
        )}
        {onDelete && (
          <ConfirmPasswordModal postId={studyPost?.id} isDelete={true} isStudyPost={true} />
        )}
      </h2>
      <Divider />
      {ReactHtmlParser(studyPost?.content as string)}
    </RecruitCradProfileWrapper>
  );
};

export default RecruitCradProfile;
