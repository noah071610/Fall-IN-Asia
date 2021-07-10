import ClubLayout from "@sections/ClubLayout";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { useEffect } from "react";
import { toastSuccessMessage } from "config";
import { clubSlice } from "slices/club";

const index = () => {
  const dispatch = useDispatch();
  const { clubPostCreateDone, clubPostEditDone } = useSelector((state: RootState) => state.club);
  useEffect(() => {
    if (clubPostCreateDone) {
      toastSuccessMessage("ポストを成功的に投稿致しました😊");
      dispatch(clubSlice.actions.clubPostEditClear());
    }
  }, [clubPostCreateDone]);
  useEffect(() => {
    if (clubPostCreateDone) {
      toastSuccessMessage("ポストを成功的に書き直りました😊");
      dispatch(clubSlice.actions.clubPostEditClear());
      dispatch(clubSlice.actions.clubPostEditConfirmClear());
    }
  }, [clubPostCreateDone]);
  return <ClubLayout />;
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

export default index;
