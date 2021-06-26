import { FC, useState } from "react";
import Slider from "react-slick";
import MainNewsPosterCard from "@components/MainNewsPosterCard";
import MainNewsArticleCard from "@components/MainNewsArticleCard";
import { Wrapper } from "./styles";
import { Scrollbars } from "react-custom-scrollbars";
import { NewsMainPostsettings } from "config";

interface IProps {}

const NewsSection: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <div className="slider-box">
        <Slider {...NewsMainPostsettings}>
          <MainNewsPosterCard />
          <MainNewsPosterCard />
          <MainNewsPosterCard />
        </Slider>
      </div>
      <div className="article-box">
        <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200} universal={true}>
          <MainNewsArticleCard />
          <MainNewsArticleCard />
          <MainNewsArticleCard />
        </Scrollbars>
      </div>
    </Wrapper>
  );
};

export default NewsSection;
