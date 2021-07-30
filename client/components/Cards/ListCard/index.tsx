import useHtmlConverter from "@hooks/useHtmlConverter";
import React, { FC, ReactNode, useState } from "react";
import { ListCardWrapper } from "./styles";

interface IProps {
  title: string;
  content: string;
  onClickListCard: () => void;
}

const ListCard: FC<IProps> = ({ title, content, onClickListCard }) => {
  return (
    <ListCardWrapper onClick={onClickListCard} className="list-card-wrapper">
      <h4>{title}</h4>
      <p>{useHtmlConverter(content)}</p>
    </ListCardWrapper>
  );
};

export default ListCard;
