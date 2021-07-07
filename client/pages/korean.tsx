import React, { FC } from "react";
import styled from "@emotion/styled";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(getUserInfoAction());
      return {
        props: {},
      };
    }
);

export default korean;
