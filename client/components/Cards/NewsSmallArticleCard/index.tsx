import React, { FC, memo, useState } from "react";
import { NewsSmallArticleWrapper } from "./styles";

interface IProps {}

const NewsSmallArticleCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <NewsSmallArticleWrapper>
      <img src="http://image.newsis.com/2021/03/05/NISI20210305_0000701729_web.jpg" />
      <div>
        <h3>🚀 KPOP－速報</h3>
        <p>ブレイブガールズ、新曲発売！人気の歌の最上を目指す</p>
      </div>
    </NewsSmallArticleWrapper>
  );
};

export default memo(NewsSmallArticleCard);
