import React, { FC, useState } from "react";
import { NavigationWrapper } from "./styles";

interface IProps {}

const Navigation: FC<IProps> = () => {
  const [state, setstate] = useState();
  return <NavigationWrapper>안녕</NavigationWrapper>;
};

export default Navigation;
