import React, { FC, useEffect } from "react";
import { noRevalidate } from "config";
import router, { useRouter } from "next/router";
import LGLayout from "@layout/LGLayout";
import MomentPostingForm from "@sections/MainPage/MomentPostingForm";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import fetcher from "utils/fetcher";
import { IMoment } from "@typings/db";
import useSWR from "swr";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

interface IProps {
  initialMoment: IMoment;
}

const MomentEditPage: FC<IProps> = ({ initialMoment }) => {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const { data: moment } = useSWR<IMoment>(`/moment/${query?.code}/${query?.momentId}/0`, fetcher, {
    fallbackData: initialMoment,
    ...noRevalidate,
  });

  useEffect(() => {
    if (!user) {
      router.back();
    }
    if (moment) {
      if (user?.id !== moment?.user.id) {
        router.back();
      }
    }
  }, [user, moment]);

  return (
    <LGLayout>
      <h2 className="main-title">{t("post.editMoment")}</h2>
      <MomentPostingForm editMoment={moment} />
    </LGLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query, locale }: GetServerSidePropsContext) => {
      const cookie = req ? req.headers.cookie : "";
      if (axios.defaults.headers) {
        axios.defaults.headers.Cookie = "";
        if (req && cookie) {
          axios.defaults.headers.Cookie = cookie;
        }
      }
      await store.dispatch(getUserInfoAction());
      const initialMoment = await fetcher(
        query && `/moment/${query?.code}/${query?.momentId}?uuid=0`
      );
      return {
        props: { initialMoment, ...(await serverSideTranslations(locale as string, ["common"])) },
      };
    }
);

export default MomentEditPage;
