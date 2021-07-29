import { IUser } from "@typings/db";
import React, { FC, useState } from "react";
import { IconCardWrapper } from "./styles";

interface IProps {
  users: IUser[];
}

const IconCard: FC<IProps> = ({ users }) => {
  const [state, setstate] = useState();
  return (
    <IconCardWrapper>
      {users?.map((v, i) => (
        <img src={v.icon} alt="user-icon" />
      ))}
    </IconCardWrapper>
  );
};

export default IconCard;
