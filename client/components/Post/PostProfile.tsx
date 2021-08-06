import React, { FC, memo, useCallback } from "react";
import { DEFAULT_ICON_URL, MD_SIZE, SM_SIZE } from "config";
import { IStory } from "@typings/db";
import router from "next/router";
import tw from "twin.macro";
import styled from "@emotion/styled/macro";
import { FLEX_STYLE } from "config";

const PostProfileWrapper = styled.div`
  ${tw`mt-12 mb-8 w-full`}
  ${FLEX_STYLE("center", "center")};
  .owner-info-wrapper {
    ${FLEX_STYLE("center", "center")};
    ${tw`flex-col w-2/5 relative`}
  }
  .icon {
    ${tw`cursor-pointer`}
    img {
      ${tw`w-20 h-20 rounded-full`}
    }
  }
  .info {
    .name {
      ${tw`mt-4 text-center font-bold`}
    }
    .introduce {
      ${tw`mt-2 text-xs`}
    }
  }
  .links {
    ${tw`mt-3`}
    button {
      ${tw`py-2 px-1.5 rounded-md hover:bg-gray-100`}
    }
  }
  @media (max-width: ${MD_SIZE}) {
    .owner-info-wrapper {
      ${tw`w-4/5`}
    }
  }
  @media (max-width: ${SM_SIZE}) {
    .owner-info-wrapper {
      ${tw`w-full`}
    }
  }
`;
interface IProps {
  story: IStory;
}

const PostProfile: FC<IProps> = ({ story }) => {
  const onClickGotoProfile = useCallback(() => {
    router.push(`/me/${story.user.id}`);
  }, []);
  return (
    <PostProfileWrapper>
      <div className="owner-info-wrapper">
        <span id="user_info" className="anchor-offset-controller" />
        <div onClick={onClickGotoProfile} className="icon">
          <img src={story?.user?.icon ? story.user.icon : DEFAULT_ICON_URL} alt="" />
        </div>
        <div className="info">
          <h2 className="name">{story?.user.name}</h2>
          <p className="introduce">여행이 너무 즐겁고 설레는 노아입니다.</p>
        </div>
        <div className="links">
          <button onClick={onClickGotoProfile}>프로필 구경가기</button>
        </div>
      </div>
    </PostProfileWrapper>
  );
};

export default memo(PostProfile);
