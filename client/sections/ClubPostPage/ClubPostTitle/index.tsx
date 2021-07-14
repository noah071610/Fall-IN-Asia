import React, { FC, useCallback, useEffect, useState } from "react";
import { ClubPostTitleWrapper } from "./styles";
import { Divider } from "antd";
import { IClubPost } from "@typings/db";
import { EditOutlined, DeleteOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import ConfirmPasswordModal from "@components/ConfirmPasswordModal";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import "animate.css/animate.css";
import { clubPostDislikeAction, clubPostLikeAction } from "actions/club";

interface IProps {
  postData: IClubPost;
}

const ClubPostTitle: FC<IProps> = ({ postData }) => {
  const dispatch = useDispatch();
  const [onEdit, setOnEdit] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [liked, setLiked] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (user?.id === postData?.user.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
    if (user && postData?.likedUser?.find((v) => v.userId === user.id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [user, postData]);

  const onClickEditBtn = useCallback(() => {
    setOnEdit((prev) => !prev);
    setOnDelete(false);
  }, []);
  const onClickDeleteBtn = useCallback(() => {
    setOnDelete((prev) => !prev);
    setOnEdit(false);
  }, []);
  const onClickLikeBtn = useCallback(() => {
    dispatch(clubPostLikeAction(postData?.id));
  }, [postData]);
  const onClickDislikeBtn = useCallback(() => {
    dispatch(clubPostDislikeAction(postData?.id));
  }, [postData]);
  return (
    <ClubPostTitleWrapper>
      <div>
        <h1>{postData?.title}</h1>
        <div className="post-title-desc">
          <ul className="post-title-info">
            <li>{postData?.user?.name}</li>
            <Divider type="vertical" />
            <li>{dayjs(postData?.createdAt).format("YYYY/MM/DD")}</li>
            <Divider type="vertical" />
            <li>{postData?.hit} views</li>
            {isOwner && (
              <>
                <Divider type="vertical" />
                <li className="edit-btn">
                  <a onClick={onClickEditBtn}>
                    <EditOutlined />
                  </a>
                  {onEdit && <ConfirmPasswordModal postId={postData?.id} isDelete={false} />}
                </li>
                <Divider type="vertical" />
                <li className="delete-btn">
                  <a onClick={onClickDeleteBtn}>
                    <DeleteOutlined />
                  </a>
                  {onDelete && <ConfirmPasswordModal postId={postData?.id} isDelete={true} />}
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="right-menu">
        {liked ? (
          <HeartFilled onClick={onClickDislikeBtn} className="dislike-btn" />
        ) : (
          <HeartOutlined onClick={onClickLikeBtn} className="like-btn" />
        )}
        <span className="like-number">{postData?.likedUser?.length}</span>
      </div>
    </ClubPostTitleWrapper>
  );
};

export default ClubPostTitle;
