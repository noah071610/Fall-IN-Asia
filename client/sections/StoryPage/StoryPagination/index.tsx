import React, { FC, useState } from "react";
import { StoryPaginationWrapper } from "./styles";

interface IProps {}

const StoryPagination: FC<IProps> = () => {
  const [state, setstate] = useState();
  return <StoryPaginationWrapper></StoryPaginationWrapper>;
};

export default StoryPagination;
