import useHtmlConverter from "@hooks/useHtmlConverter";
import React, { FC, ReactNode, useCallback, useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteNoticeAction } from "actions/user";

const ListCardWrapper = styled.li`
  ${tw`relative w-full p-4 cursor-pointer mb-2 shadow-md`}
  transition:0.3s all;
  &:hover {
    ${tw`shadow-lg`}
    .anticon {
      display: block;
    }
  }
  .anticon {
    display: none;
    ${tw`absolute right-4 text-gray-300`}
    top:50%;
    transform: translateY(-50%);
    &:hover {
      ${tw`text-gray-500`}
    }
  }
  h4 {
    ${tw`mb-1 text-xs`}
  }
  p {
    ${tw`font-bold text-xs leading-6 pr-6`}
  }
`;
interface IProps {
  title: string;
  content: string;
  onClickListCard: () => void;
  noticeId?: number | null;
}

const ListCard: FC<IProps> = ({ title, content, onClickListCard, noticeId }) => {
  const dispatch = useDispatch();
  const onClickDeleteNotice = useCallback((e, noticeId: number) => {
    e.stopPropagation();
    dispatch(deleteNoticeAction(noticeId));
  }, []);
  return (
    <ListCardWrapper onClick={onClickListCard} className="list-card-wrapper">
      <h4>{title}</h4>
      <p>{useHtmlConverter(content)}</p>
      {noticeId && (
        <a onClick={(e) => onClickDeleteNotice(e, noticeId)}>
          <DeleteOutlined />
        </a>
      )}
    </ListCardWrapper>
  );
};

export default ListCard;
