import React, { FC, useState } from "react";
import { ArticleRowCardWrapper } from "./styles";

interface IProps {}

const ArticleRowCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return <ArticleRowCardWrapper></ArticleRowCardWrapper>;
};

export default ArticleRowCard;
