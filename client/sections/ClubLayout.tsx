import React, { FC } from "react";
import styled from "@emotion/styled";
import ClubTitleSection from "@sections/ClubPage/ClubTitleSection";
import ClubMainSection from "@sections/ClubPage/ClubMainSection";

export const ClubWrapper = styled.div`
  padding: 2rem;
`;
const ClubLayout: FC = ({ children }) => {
  return (
    <ClubWrapper>
      <ClubTitleSection />
      {children}
      <ClubMainSection />
    </ClubWrapper>
  );
};

export default ClubLayout;
