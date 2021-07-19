import React, { FC, useState } from "react";
import { NavigationWrapper } from "./styles";

interface IProps {}

const Navigation: FC<IProps> = () => {
  const [state, setstate] = useState();
  return <NavigationWrapper></NavigationWrapper>;
};

export default Navigation;
