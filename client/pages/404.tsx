import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import router from "next/router";
import tw from "twin.macro";
import { FLEX_STYLE } from "config";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import Head from "next/head";
import { useDispatch } from "react-redux";

export const NotFoundWrapper = styled.main`
  ${tw`pt-16`}
  height: 80vh;
  ${FLEX_STYLE("center", "center", "column")};
  h1 {
    font-size: 3rem;
    ${tw`mb-3`}
  }
  button {
    ${tw`mt-6 rounded-xl shadow-md py-3 px-8`}
  }
`;
interface IProps {}

const notFound: FC<IProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoAction());
  }, []);
  return (
    <>
      <Head>
        <title>Fall IN Asia - Not Found</title>
      </Head>
      <NotFoundWrapper>
        <h1>NOT FOUND</h1>
        <h3>페이지를 찾지 못했어요.</h3>
        <button onClick={() => router.back()}>이전페이지로 돌아가기</button>
      </NotFoundWrapper>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(() => async () => {
  return {
    props: {},
  };
});

export default notFound;
