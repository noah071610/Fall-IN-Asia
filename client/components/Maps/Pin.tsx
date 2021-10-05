import React, { FC, memo } from "react";
import { IStory } from "@typings/db";
import { Popover } from "antd";
import { NO_IMAGE_URL } from "config";
import router from "next/router";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
  fill: "#d00",
  stroke: "none",
};
interface IProps {
  size: number;
  story?: IStory;
  isUserInfoPage?: boolean;
}

const Pin: FC<IProps> = ({ size, story, isUserInfoPage }) => {
  return (
    <>
      {isUserInfoPage ? (
        <Popover
          content={
            <img
              style={{ width: "250px", height: "180px" }}
              src={story?.thumbnail || NO_IMAGE_URL}
              alt="story_thumbnail"
            />
          }
          title={
            <h3
              style={{ width: "250px", padding: "0.5rem 0", fontSize: "0.85rem" }}
              onClick={() => router.push(`/story/${story?.code}/${story?.id}`)}
            >
              {story?.region}
            </h3>
          }
        >
          <svg className="pin" height={size} viewBox="0 0 24 24" style={pinStyle}>
            <path d={ICON} />
          </svg>
        </Popover>
      ) : (
        <svg className="pin" height={size} viewBox="0 0 24 24" style={pinStyle}>
          <path d={ICON} />
        </svg>
      )}
    </>
  );
};

export default memo(Pin);
