import React, { useEffect } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { FLEX_STYLE, GRID_STYLE, LG_SIZE, toastSuccessMessage, XLG_SIZE } from "config";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "slices/main";
import { RootState } from "slices";
import { getGroupsWithScoreAction } from "actions/group";
import { MainWrapper } from "@styles/index";
import { EditFilled, EditOutlined } from "@ant-design/icons";
import ArticleCard from "@components/Cards/ArticleCard";
import ClubPostTitle from "@sections/ClubPostPage/ClubPostTitle";
import MainContent from "@sections/MainPage/MainContent";
import MainCountryMenu from "@sections/MainPage/MainCountryMenu";
import MainPostingForm from "@sections/MainPage/MainPostingForm";
import CountryImage from "@sections/MainPage/CountryImage";

const index = () => {
  const dispatch = useDispatch();
  const { groupVoteDone, groupVoteUndoDone, selectedGroup } = useSelector(
    (state: RootState) => state.main
  );
  useEffect(() => {
    if (groupVoteDone) {
      toastSuccessMessage("投票ありがとうございます🥰");
      dispatch(getGroupsWithScoreAction(selectedGroup?.id));
      dispatch(mainSlice.actions.groupVoteClear());
    }
  }, [groupVoteDone, selectedGroup]);

  useEffect(() => {
    if (groupVoteUndoDone) {
      toastSuccessMessage("投票を取り消しました。");
      dispatch(getGroupsWithScoreAction(selectedGroup?.id));
      dispatch(mainSlice.actions.groupVoteUndoClear());
    }
  }, [groupVoteUndoDone, selectedGroup]);
  return (
    <MainWrapper>
      <div className="layout" style={{ width: LG_SIZE }}>
        <CountryImage />
        <div className="layout_main">
          <h2 className="main-title">인기여행지</h2>
          <MainCountryMenu />
          <h2 className="main-title">포스팅</h2>
          <MainPostingForm />
          <MainContent />
        </div>
      </div>
    </MainWrapper>
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
      await store.dispatch(getGroupsWithScoreAction(1));
      return {
        props: {},
      };
    }
);

export default index;
