import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, GRID_STYLE, noRevalidate, WHITE_COLOR } from "config";
import NameSpace from "@components/NameSpace";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import XLG_Layout from "@layout/XLG_Layout";
import CountrySelectMap from "@components/CountrySelectMap";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";

export const StoryPostWrapper = styled.div`
  .story-subtitle {
    text-align: center;
    ${FONT_STYLE(1.3, true)}
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
  .story-title {
    ${FLEX_STYLE("center", "center")};
    flex-direction: column;
    h1 {
      ${FONT_STYLE(2, true)};
      margin-bottom: 2rem;
    }
  }
  .thumbnail-wrapper {
    margin: 2rem 0;
    img {
      width: 100%;
      max-height: 520px;
    }
  }
  .story-info {
    ${GRID_STYLE("2rem", "1fr 1fr")};
  }
  .country-image {
    position: relative;
    border-radius: 15px;
    width: 100%;
    cursor: pointer;
    height: 150px;
    background-position: center;
    background-repeat: no-repeat;
    ${FLEX_STYLE("center", "center")};
    .overlay {
      border-radius: 15px;
    }
    h3 {
      z-index: 1;
      ${FONT_STYLE(1.5, true, WHITE_COLOR)};
    }
    &:hover {
      .overlay {
        opacity: 0.3;
      }
    }
  }
`;
interface IProps {}

const index: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [filter, setFilter] = useState("");
  const { data: story, revalidate: revalidateStory } = useSWR(
    `/story/${query?.code}/${query?.storyId}`,
    fetcher,
    noRevalidate
  );
  const { data: country, revalidate: revalidateCountry } = useSWR(
    `/country/${query?.code}`,
    fetcher,
    noRevalidate
  );

  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {}, []);
  return (
    <StoryPostWrapper>
      <XLG_Layout>
        <div className="story-title">
          <h1>좌충우돌 다합에서 한달 살기</h1>
          <NameSpace user={user} />
        </div>
        <div className="thumbnail-wrapper">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/03/b7/3b/ac/octopus-world-dahab.jpg"
            alt="thumbnail-image"
          />
        </div>
        <h2 className="story-subtitle">연대기 정보</h2>
        <div className="story-info">
          <div className="info-location">
            <CountrySelectMap />
          </div>
          <div className="info-country">
            <div
              style={{ backgroundImage: `url(${country?.image_src})` }}
              className="country-image"
            >
              <h3>{country?.name}</h3>
              <div className="overlay" />
            </div>
          </div>
        </div>
      </XLG_Layout>
    </StoryPostWrapper>
  );
};

export default index;
