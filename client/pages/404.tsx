import React, { useEffect } from "react";
import styled from "@emotion/styled";
import router from "next/router";
import tw from "twin.macro";
import { FLEX_STYLE } from "config";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export const NotFoundWrapper = styled.main`
  ${tw`pt-16`}
  height: 80vh;
  ${FLEX_STYLE("center", "center", "column")};
  h1 {
    font-size: 3rem;
    ${tw`mb-3`}
  }
  h3 {
    text-align: center;
  }
  button {
    ${tw`mt-6 rounded-xl shadow-md py-3 px-8`}
  }
`;

const NotFound = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoAction());
  });
  return (
    <>
      <Head>
        <title>Fall IN Asia - Not Found</title>
      </Head>
      <NotFoundWrapper>
        <h1>NOT FOUND</h1>
        <h3>{t("notFound.title")}</h3>
        <button onClick={() => router.back()}>{t("notFound.goback")}</button>
      </NotFoundWrapper>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(() => async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
});

export default NotFound;
