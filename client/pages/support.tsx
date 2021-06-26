import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import SupportPoster from "@sections/SupportPage/SupportPoster";
import SupportCard from "@components/SupportCard";
const Wrapper = styled.div`
  padding: 2rem;
  .support-card-wrapper {
    margin-top: 2rem;
  }
`;

interface IProps {}

const support: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <SupportPoster />
      <div className="support-card-wrapper">
        <SupportCard />
        <SupportCard />
        <SupportCard />
        <SupportCard />
      </div>
    </Wrapper>
  );
};

export default support;
