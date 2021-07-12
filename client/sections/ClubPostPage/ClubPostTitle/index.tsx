import React, { FC, useCallback, useEffect, useState } from "react";
import { ClubPostTitleWrapper } from "./styles";
import { Divider } from "antd";
import { IClubPost } from "@typings/db";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ConfirmPasswordModal from "@components/ConfirmPasswordModal";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";

interface IProps {
  postData: IClubPost;
}

const ClubPostTitle: FC<IProps> = ({ postData }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  const onClickEditBtn = useCallback(() => {
    setOnEdit((prev) => !prev);
    setOnDelete(false);
  }, []);
  const onClickDeleteBtn = useCallback(() => {
    setOnDelete((prev) => !prev);
    setOnEdit(false);
  }, []);
  useEffect(() => {
    if (user?.id === postData?.user.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, postData]);
  return (
    <ClubPostTitleWrapper>
      <h1>{postData?.title}</h1>
      <div>
        <ul className="post-title-info">
          <li>{postData?.user?.name}</li>
          <Divider type="vertical" />
          <li>{dayjs(postData?.createdAt).format("YYYY/MM/DD")}</li>
          <Divider type="vertical" />
          <li>{postData?.hit} views</li>
        </ul>
        {isOwner && (
          <ul className="post-title-menu">
            <li>
              <a onClick={onClickEditBtn}>
                <EditOutlined />
              </a>
            </li>
            <li>
              <a onClick={onClickDeleteBtn}>
                <DeleteOutlined />
              </a>
            </li>
            {onEdit && <ConfirmPasswordModal postId={postData?.id} isDelete={false} />}
            {onDelete && <ConfirmPasswordModal postId={postData?.id} isDelete={true} />}
          </ul>
        )}
      </div>
    </ClubPostTitleWrapper>
  );
};

export default ClubPostTitle;
