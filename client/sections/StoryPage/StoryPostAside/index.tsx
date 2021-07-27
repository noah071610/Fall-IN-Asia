import React, { FC, useCallback, useMemo, useState } from "react";
import { StoryPostAsideWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import router, { useRouter } from "next/router";
import { IStory } from "@typings/db";
import { useEffect } from "react";
import Scrollspy from "react-scrollspy";
import ReactHtmlParser from "react-html-parser";
import { Timeline } from "antd";
interface IProps {}

const StoryPostAside: FC<IProps> = () => {
  const { query } = useRouter();
  const [headers, setHeaders] = useState<string[]>([]);
  const { data: story } = useSWR<IStory>(`/story/${query?.code}/${query?.storyId}/0`, fetcher);

  useEffect(() => {
    if (story) {
      setHeaders(
        story?.content
          ?.match(/<h1([^])*?.*?<\/h1>|<h2([^])*?.*?<\/h2>|<h3([^])*?.*?<\/h3>/g)
          ?.join(",")
          .split(",") || []
      );
    }
  }, [story]);
  console.log(query);
  const onClickQuickView = useCallback((i: number) => {}, []);

  return (
    <StoryPostAsideWrapper>
      <div className="aside-quick-viewer">
        <h3 className="aside-story-title">{story?.title}</h3>

        <Scrollspy
          items={["header_1", "header_2", "header_3", "header_4", "header_5"]}
          currentClassName="is-current"
        >
          {headers?.map((v, i) => {
            if (i === headers.length - 1) {
              return (
                <Timeline.Item color="gray" className="ant-timeline-item-last" key={i}>
                  <a href={`#header_${i + 1}`}>{ReactHtmlParser(v as string)}</a>
                </Timeline.Item>
              );
            }
            return (
              <Timeline.Item color="gray" key={i}>
                <a href={`#header_${i + 1}`}>{ReactHtmlParser(v as string)}</a>
              </Timeline.Item>
            );
          })}
        </Scrollspy>
      </div>
    </StoryPostAsideWrapper>
  );
};

export default StoryPostAside;
