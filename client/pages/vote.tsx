import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import VoteSection from "@sections/MainPage/VoteSection";
import BattleSection from "@sections/VotePage/BattleSection";
export const Wrapper = styled.div`
  padding: 2rem;
`;

interface IProps {}

const vote: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <BattleSection />
      <VoteSection isOnVotePage={true} />
    </Wrapper>
  );
};

export default vote;
