import React, { FC, useEffect, useState } from "react";
import { UserMainPosterWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";

interface IProps {}

const UserMainPoster: FC<IProps> = () => {
  const [state, setstate] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {}, []);
  return <UserMainPosterWrapper></UserMainPosterWrapper>;
};

export default UserMainPoster;
