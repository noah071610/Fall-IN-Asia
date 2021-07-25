import React, { FC, useEffect, useState } from "react";
import { StoryOwnerAnotherPostsWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { DEFAULT_ICON_URL } from "config";

interface IProps {}

const StoryOwnerAnotherPosts: FC<IProps> = () => {
  const [state, setstate] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {}, []);
  return (
    <StoryOwnerAnotherPostsWrapper>
      <div className="owner-info-wrapper">
        <div className="icon">
          <img src={user?.icon ? user?.icon : DEFAULT_ICON_URL} alt="" />
        </div>
        <div className="info">
          <h2 className="name">{user?.name}</h2>
          <p className="introduce">여행이 너무 즐겁고 설레는 노아입니다.</p>
        </div>
        <div className="links">
          <button>프로필 구경가기</button>
        </div>
      </div>
    </StoryOwnerAnotherPostsWrapper>
  );
};

export default StoryOwnerAnotherPosts;
