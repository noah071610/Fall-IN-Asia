import React, { FC } from "react";
import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";
import KoreanPagePoster from "@sections/KoreanPage/KoreanPagePoster";
import LessonSection from "@sections/KoreanPage/LessonSection";
const KoreanPageWrapper = styled.div`
  padding: 2rem;
`;

interface Props {}

const korean: FC<Props> = () => {
  return (
    <KoreanPageWrapper>
      <CommonTitle title="韓国語" subtitle="相手の話を分かってもっと韓国を知りたい" />
      <KoreanPagePoster />
      <LessonSection />
    </KoreanPageWrapper>
  );
};

export default korean;
