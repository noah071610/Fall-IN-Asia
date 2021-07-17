import CommonPagination from "@components/Common/CommonPagination";
import { IClubPost } from "@typings/db";
import { BLUE_COLOR, NO_POST_URL } from "config";
import dayjs from "dayjs";
import router, { useRouter } from "next/router";
import React, { FC, useCallback, useEffect, useState } from "react";
import { MainWrapper } from "./styles";
interface IProps {
  clubPosts: IClubPost[];
  postCnt: number;
}

const ClubPostList: FC<IProps> = ({ clubPosts, postCnt }) => {
  const { query } = useRouter();
  const [activePostId, setActivePostId] = useState<number | null>(null);

  useEffect(() => {
    if (query?.id) {
      setActivePostId(parseInt(query?.id as string));
    }
  }, [query]);

  const onClickPostTitle = useCallback((id) => {
    router.push(`/club/${query.group}/${id}`);
  }, []);
  return (
    <MainWrapper>
      <table>
        <thead>
          <tr className="table-header">
            <th>番号</th>
            <th>タイトル</th>
            <th>お名前</th>
            <th>日付</th>
            <th>いいね</th>
          </tr>
        </thead>
        <tbody>
          {clubPosts?.length > 0 &&
            clubPosts.map((v, i) => (
              <tr
                style={v.id === activePostId ? { background: "#F4F6FF", fontWeight: "bold" } : {}}
                key={i}
                className="table-post"
              >
                <td>{v.id}</td>
                <td onClick={() => onClickPostTitle(v.id)} className="title">
                  {v.title}
                </td>
                <td>{v.user?.name}</td>
                <td>{dayjs(v.createdAt).format("YYYY/MM/DD")}</td>
                <td>0</td>
              </tr>
            ))}
        </tbody>
      </table>
      {clubPosts?.length === 0 && (
        <div className="noPost">
          <img src={NO_POST_URL} alt="noPost_image" />
          <h2>掲示がありません 😰</h2>
        </div>
      )}
      <CommonPagination postCnt={postCnt} />
    </MainWrapper>
  );
};

export default ClubPostList;
