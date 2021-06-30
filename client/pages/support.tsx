import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import SupportPoster from "@sections/SupportPage/SupportPoster";
import SupportCard from "@components/SupportCard";
import CommonTitle from "@components/Common/CommonTitle";
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
      {/* <CommonTitle title="後援" subtitle="ドネーションをもっと安全で簡単に" />
      <SupportPoster />
      <div className="support-card-wrapper">
        <SupportCard />
        <SupportCard />
        <SupportCard />
        <SupportCard />
      </div> */}
    </Wrapper>
  );
};

export default support;
