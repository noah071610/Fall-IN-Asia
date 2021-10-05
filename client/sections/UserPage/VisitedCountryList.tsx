import React, { FC, memo, useMemo } from "react";
import { IStory } from "@typings/db";
import styled from "@emotion/styled";
import { BORDER_THIN } from "config";
import tw from "twin.macro";

const VisitedCountryListWrapper = styled.ul`
  ${tw`p-4`}
  li {
    ${tw`mr-4 mb-4`}
    .image-wrapper {
      ${tw`w-6 h-4 inline-block`}
      img {
        ${tw`w-full h-full `}
        ${BORDER_THIN("border")};
      }
    }
    span {
      ${tw`ml-2`}
    }
  }
  @media (max-width: 1000px) {
    ${tw`px-0`}
  }
`;

interface IProps {
  stories: IStory[];
}

const VisitedCountryList: FC<IProps> = ({ stories }) => {
  const storiesWithoutSame = useMemo(() => {
    return stories?.filter((v, i, arr) => i === arr.findIndex((t) => v.code === t.code));
  }, [stories]);

  return (
    <VisitedCountryListWrapper>
      {storiesWithoutSame?.map((v, i) => (
        <li key={i}>
          <div className="image-wrapper">
            <img src={v.country.flag_src} alt="country-flag-image" />
          </div>
          <span>{v.country.name}</span>
        </li>
      ))}
    </VisitedCountryListWrapper>
  );
};

export default memo(VisitedCountryList);
