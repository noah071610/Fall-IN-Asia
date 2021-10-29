import React, { FC, memo, useCallback } from "react";
import { DEFAULT_ICON_URL, MD_SIZE, SM_SIZE } from "config";
import { IStory } from "@typings/db";
import router from "next/router";
import tw from "twin.macro";
import styled from "@emotion/styled/macro";
import { FLEX_STYLE } from "config";
import { useTranslation } from "react-i18next";

const PostProfileWrapper = styled.section`
  ${tw`mt-32 mb-16 w-full`}
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
      ${tw`mt-3 text-xs leading-6 text-center`}
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
  const { t } = useTranslation("common");
  const onClickGotoProfile = useCallback(() => {
    router.push(`/me/${story.user.id}`);
  }, []);
  return (
    <PostProfileWrapper>
      <div className="owner-info-wrapper">
        <span id="user_info" className="anchor-offset-controller" />
        <div onClick={onClickGotoProfile} className="icon">
          <img src={story?.user?.icon ? story.user.icon : DEFAULT_ICON_URL} alt="user_icon" />
        </div>
        <div className="info">
          <h2 className="name">{story?.user.name}</h2>
          <p className="introduce">{story?.user.introduce}</p>
        </div>
        <div className="links">
          <button onClick={onClickGotoProfile}>{t("post.goToProfile")}</button>
        </div>
      </div>
    </PostProfileWrapper>
  );
};

export default memo(PostProfile);
