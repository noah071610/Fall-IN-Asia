import React, { FC, useState } from "react";
import { PosterCardWrapper } from "./styles";

interface IProps {}

const PosterCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <PosterCardWrapper
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1587502537147-2ba64a62e3d3?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2017&q=80
      )`,
      }}
    ></PosterCardWrapper>
  );
};

export default PosterCard;
