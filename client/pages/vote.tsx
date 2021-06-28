import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import VoteSection from "@sections/MainPage/VoteSection";
import BattleSection from "@sections/VotePage/BattleSection";
import VoteSearchForm from "@sections/VotePage/VoteSearchForm";
export const Wrapper = styled.div`
  padding-bottom: 3rem;
`;

interface IProps {}

const vote: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <BattleSection />
      <VoteSearchForm />
      <VoteSection isOnVotePage={true} />
    </Wrapper>
  );
};

export default vote;
