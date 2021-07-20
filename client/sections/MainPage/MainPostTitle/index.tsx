import React, { FC, useCallback, useEffect, useState } from "react";
import { MainPostTitleWrapper } from "./styles";
import { Divider } from "antd";
import { IMainPost } from "@typings/db";
import { EditOutlined, DeleteOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import "animate.css/animate.css";
import { mainPostDislikeAction, mainPostLikeAction } from "actions/mainPost";
import NameSpace from "@components/NameSpace";

interface IProps {
  mainPost: IMainPost;
}

const MainPostTitle: FC<IProps> = ({ mainPost }) => {
  const dispatch = useDispatch();
  const [onEdit, setOnEdit] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [liked, setLiked] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (user?.id === mainPost?.user?.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
    if (user && mainPost?.likedUser?.find((v) => v.id === user.id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [user, mainPost]);

  const onClickEditBtn = useCallback(() => {
    setOnEdit((prev) => !prev);
    setOnDelete(false);
  }, []);
  const onClickDeleteBtn = useCallback(() => {
    setOnDelete((prev) => !prev);
    setOnEdit(false);
  }, []);
  const onClickLikeBtn = useCallback(() => {
    dispatch(mainPostLikeAction(1));
  }, [mainPost]);
  const onClickDislikeBtn = useCallback(() => {
    dispatch(mainPostDislikeAction(1));
  }, [mainPost]);
  return (
    <MainPostTitleWrapper>
      <NameSpace user={mainPost?.user} date={mainPost?.createdAt} />
      <div className="right-menu">
        {isOwner && (
          <>
            <li className="edit-btn">
              <a onClick={onClickEditBtn}>
                <EditOutlined />
              </a>
            </li>
            <Divider type="vertical" />
            <li className="delete-btn">
              <a onClick={onClickDeleteBtn}>
                <DeleteOutlined />
              </a>
            </li>
          </>
        )}
        {/* {liked ? (
          <HeartFilled onClick={onClickDislikeBtn} className="dislike-btn" />
        ) : (
          <HeartOutlined onClick={onClickLikeBtn} className="like-btn" />
        )}
        <span className="like-number">{postData?.likedUser?.length}</span> */}
      </div>
    </MainPostTitleWrapper>
  );
};

export default MainPostTitle;
