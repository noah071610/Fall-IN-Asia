import React, { FC } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import router, { useRouter } from "next/router";
import UserInfoLayout from "@layout/UserInfoLayout";
import VisitedCountryList from "@sections/UserPage/VisitedCountryList";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { noRevalidate, NO_POST_URL } from "config";
import { IUserInfo } from "@typings/db";
import ListCard from "@components/Cards/ListCard";
import CountryRouteMap from "@components/Maps/CountryRouteMap";
import ArticleColumnCard from "@components/Cards/ArticleColumnCard";
import { SwiperSlide, Swiper } from "swiper/react";

interface IProps {
  initialUserInfo: IUserInfo;
}

const index: FC<IProps> = ({ initialUserInfo }) => {
  const { query } = useRouter();
  const { data: userInfo } = useSWR<IUserInfo>(`/user/${query?.userId}`, fetcher, {
    initialData: initialUserInfo,
    ...noRevalidate,
  });

  return (
    <UserInfoLayout>
      <h2 className="main-title">{userInfo?.name}님의 연대기 지도</h2>
      <div className="route-map-wrapper">
        <CountryRouteMap stories={userInfo?.stories || []} />
      </div>
      <h2 className="main-title">다녀온 국가 리스트</h2>
      {userInfo && userInfo?.stories.length > 0 ? (
        <VisitedCountryList stories={userInfo?.stories} />
      ) : (
        <h4 className="no-countries">
          아직 다녀온 국가가 없어요, 연대기를 작성하면 자동으로 갱신되요.😉
        </h4>
      )}
      <h2 className="main-title">
        {userInfo?.name}님의 작성 연대기 {userInfo?.stories?.length || 0}개
      </h2>
      {userInfo && userInfo?.stories.length > 0 ? (
        <Swiper className="post-slider" slidesPerView={3} spaceBetween={16}>
          {userInfo?.stories?.map((v, i) => (
            <SwiperSlide key={i}>
              <ArticleColumnCard key={i} story={v} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="no-post-wrapper">
          <img src={NO_POST_URL} alt="no-post" />
          <h4>아직 작성한 연대기가 없습니다.</h4>
        </div>
      )}

      <h2 className="main-title">
        {userInfo?.name}님의 작성 모멘트 {userInfo?.moments?.length || 0}개
      </h2>
      {userInfo && userInfo?.moments.length > 0 ? (
        <ul className="moment-list">
          {userInfo?.moments?.map((v, i) => (
            <ListCard
              onClickListCard={() => router.push(`/country/${v.code}/${v.id}`)}
              key={i}
              title={`${v.country.name}/${v.type}/${v.id}번째모멘트`}
              content={v.content}
            />
          ))}
        </ul>
      ) : (
        <div className="no-post-wrapper">
          <img src={NO_POST_URL} alt="no-post" />
          <h4>아직 작성한 모멘트가 없습니다.</h4>
        </div>
      )}
    </UserInfoLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(getUserInfoAction());
      const initialUserInfo = await fetcher(`/user/${params?.userId}`);
      return {
        props: { initialUserInfo },
      };
    }
);

export default index;
