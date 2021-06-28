import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import ClubTitleSection from "@sections/ClubPage/ClubTitleSection/index";
import ClubMainSection from "@sections/ClubPage/ClubMainSection/index";

const ClubWrapper = styled.div``;

interface IProps {}

const club: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <ClubWrapper>
      <ClubTitleSection />
      <ClubMainSection />
    </ClubWrapper>
  );
};

export default club;
