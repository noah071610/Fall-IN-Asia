import React, { FC, useCallback, useEffect, useState } from "react";
import { MomentPostTitleWrapper } from "./styles";
import { Divider } from "antd";
import { IMoment } from "@typings/db";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import NameSpace from "@components/NameSpace";
import router from "next/router";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import axios from "axios";
import { toastErrorMessage, toastSuccessMessage } from "config";
import { useTranslation } from "react-i18next";

interface IProps {
  moment: IMoment;
}

const MomentPostTitle: FC<IProps> = ({ moment }) => {
  const { t } = useTranslation("common");
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
      router.push(`/country/edit?code=${moment?.code}&momentId=${moment?.id}`);
    }
  }, [user, isOwner, moment]);
  const onClickConfirmDelete = useCallback(() => {
    if (user && isOwner) {
      axios
        .delete(`/moment/${moment?.id}`)
        .then(() => {
          toastSuccessMessage(t("message.moment.remove"));
          router.push(`/country/${moment?.code}`);
        })
        .catch((error) => {
          toastErrorMessage(error);
          throw error;
        });
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
                    onClickConfirmDelete,
                    t("message.moment.confirmRemove"),
                    `${t("main.yes")} ${t("message.removeIt")}`,
                    t("main.no")
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
