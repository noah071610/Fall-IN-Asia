import React, { FC, useCallback, useEffect, useState } from "react";
import { MainPostTitleWrapper } from "./styles";
import { Divider } from "antd";
import { IMainPost } from "@typings/db";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import NameSpace from "@components/NameSpace";
import { mainPostSlice } from "slices/mainPost";
import router from "next/router";
import { toastDeleteConfirmMessage } from "@components/ConfirmToastify";
import { mainPostDeleteAction } from "actions/mainPost";

interface IProps {
  mainPost: IMainPost;
}

const MainPostTitle: FC<IProps> = ({ mainPost }) => {
  const dispatch = useDispatch();
  const [isOwner, setIsOwner] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user?.id === mainPost?.user?.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, mainPost]);

  const onClickEditBtn = useCallback(() => {
    if (user && isOwner) {
      dispatch(mainPostSlice.actions.mainPostEditSet({ mainPost }));
      router.push("/country/edit");
    }
  }, [user, isOwner]);
  const onClickConfirm = useCallback(() => {
    if (user && isOwner) {
      dispatch(mainPostDeleteAction(mainPost?.id));
      router.push(`/country/${mainPost?.code}`);
    }
  }, [user, isOwner, mainPost]);
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
              <a onClick={() => toastDeleteConfirmMessage(onClickConfirm)}>
                <DeleteOutlined />
              </a>
            </li>
          </>
        )}
      </div>
    </MainPostTitleWrapper>
  );
};

export default MainPostTitle;
