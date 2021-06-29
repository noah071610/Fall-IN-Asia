import { FilterWrapper, SearchBar, JapanMap, Fillter } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useCallback, useState } from "react";
import { faSortAmountDown, faTags } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import { goodsFilterList } from "config";
import { Divider } from "antd";
interface IProps {
  onFilter: boolean;
}

const GoodsFilter: FC<IProps> = ({ onFilter }) => {
  const [onTag, setOnTag] = useState(true);
  const onClickTag = useCallback(() => {
    setOnTag((prev) => !prev);
  }, []);
  return (
    <FilterWrapper>
      <div className={onFilter ? "drop-down" : "roll-up"}>
        <div className="filter-main">
          <JapanMap>
            <div className="map hotkaido">
              <span>北海道</span>
            </div>
            <div className="map tohoku">
              <span>東北</span>
            </div>
            <div className="row">
              <div className="map kanto">
                <span>関東(東京)</span>
              </div>
              <div className="map chubu">
                <span>中部</span>
              </div>
              <div className="map kansai">
                <span>関西(大阪)</span>
              </div>
              <div className="map-chu-shi">
                <div className="chugoku">
                  <span>中国</span>
                </div>
                <div className="shikoku">
                  <span>四国</span>
                </div>
              </div>
              <div className="map kyushu">
                <span>九州(福岡)</span>
              </div>
            </div>
            <div className="okinawa">
              <div className="okinawa-map"></div>
              <span>沖縄</span>
            </div>
          </JapanMap>
          <Fillter>
            <SearchBar />
            <h3 className="filter-title">
              タグ
              <FontAwesomeIcon icon={faTags} />
            </h3>
            <div>
              {goodsFilterList.map((v, i) => (
                <button key={i} className="tag">
                  <h3>{v}</h3>
                </button>
              ))}
            </div>
          </Fillter>
        </div>
      </div>
    </FilterWrapper>
  );
};

export default GoodsFilter;
