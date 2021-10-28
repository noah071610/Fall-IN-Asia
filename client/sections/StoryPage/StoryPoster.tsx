import React, { FC, memo } from "react";
import styled from "@emotion/styled";
import { FLEX_STYLE, SM_SIZE } from "config";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

interface IProps {
  image?: string;
  name: string | null;
}

const StoryPosterWrapper = styled.section`
  ${tw`relative w-full h-80`}
  background-repeat: no-repeat;
  ${FLEX_STYLE("center", "center")};
  .title {
    ${tw`text-3xl font-bold text-white cursor-pointer z-10`};
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`h-40`}
    .title {
      ${tw`text-lg px-4 text-center`}
    }
  }
`;

const StoryPoster: FC<IProps> = ({ name, image }) => {
  const { t } = useTranslation("common");
  return (
    <StoryPosterWrapper
      style={
        image
          ? {
              background: `url(${image.replace("&w=200", "&w=950")}
          )`,
              backgroundPosition: "10% 40%",
              backgroundSize: "100% 230%",
            }
          : {
              background: `url("/images/poster/story_main_poster.jpg"
        )`,
              backgroundPosition: "top left",
              backgroundSize: "100% 100%",
            }
      }
    >
      <div className="overlay" />
      <h1 className="title">{name ? name + ` ${t("nav.story")}` : t("poster.storyMain")}</h1>
    </StoryPosterWrapper>
  );
};

export default memo(StoryPoster);
