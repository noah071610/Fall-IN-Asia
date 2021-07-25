import React, { FC, useState } from "react";
import { UserMainPosterWrapper } from "./styles";

interface IProps {}

const UserMainPoster: FC<IProps> = () => {
  const [state, setstate] = useState();
  return <UserMainPosterWrapper>안녕?</UserMainPosterWrapper>;
};

export default UserMainPoster;
