import { FilterWrapper, JapanMap } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useCallback, useState } from "react";
import { faChartArea, faTags } from "@fortawesome/free-solid-svg-icons";
import { goodsFilterList, japanMapList } from "config";
import { Input } from "antd";
const { Search } = Input;
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
      <Search />
      <h3 className="filter-title">
        <span>地域</span>
        <FontAwesomeIcon icon={faChartArea} />
      </h3>
      <JapanMap>
        {japanMapList.map((v, i) => (
          <div key={v.eng + i} className={`map ${v.eng}`}>
            <span>{v.name}</span>
          </div>
        ))}
      </JapanMap>
      <h3 className="filter-title">
        <span>タグ</span>
        <FontAwesomeIcon icon={faTags} />
      </h3>
      <div>
        {goodsFilterList.map((v, i) => (
          <button key={i} className="tag">
            <h3>{v}</h3>
          </button>
        ))}
      </div>
    </FilterWrapper>
  );
};

export default GoodsFilter;
