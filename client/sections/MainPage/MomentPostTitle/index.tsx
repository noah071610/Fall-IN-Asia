import React, { FC, useCallback, useEffect, useState } from "react";
import { MomentPostTitleWrapper } from "./styles";
import { Divider } from "antd";
import { IMoment } from "@typings/db";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import NameSpace from "@components/NameSpace";
import { momentSlice } from "slices/moment";
import router from "next/router";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import { momentDeleteAction } from "actions/moment";

interface IProps {
  moment: IMoment;
}

const MomentPostTitle: FC<IProps> = ({ moment }) => {
  const dispatch = useDispatch();
  const [isOwner, setIsOwner] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user?.id === moment?.user?.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, moment]);

  const onClickEditBtn = useCallback(() => {
    if (user && isOwner) {
      dispatch(momentSlice.actions.momentEditSet({ moment }));
      router.push("/country/edit");
    }
  }, [user, isOwner]);
  const onClickConfirm = useCallback(() => {
    if (user && isOwner) {
      dispatch(momentDeleteAction(moment?.id));
      router.push(`/country/${moment?.code}`);
    }
  }, [user, isOwner, moment]);
  return (
    <MomentPostTitleWrapper>
      <NameSpace user={moment?.user} date={moment?.createdAt} />
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
              <a
                onClick={() =>
                  toastConfirmMessage(
                    onClickConfirm,
                    "정말 이 모멘트를 삭제할까요?",
                    "삭제해주세요."
                  )
                }
              >
                <DeleteOutlined />
              </a>
            </li>
          </>
        )}
      </div>
    </MomentPostTitleWrapper>
  );
};

export default MomentPostTitle;
