import React, { FC, ReactNode, useState } from "react";
import { ListCardWrapper } from "./styles";

interface IProps {
  title: string;
  content: string;
  thumbnail?: ReactNode;
}

const ListCard: FC<IProps> = ({ title, content, thumbnail }) => {
  const [state, setstate] = useState();
  return (
    <ListCardWrapper className="list-card-wrapper">
      {thumbnail}
      <div className="list-card-desc">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </ListCardWrapper>
  );
};

export default ListCard;
