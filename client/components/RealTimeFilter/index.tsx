import { FilterWrapper, SearchBar, FilterList } from "./styles";
import { MoreOutlined, ReloadOutlined, ZoomInOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useCallback, useState } from "react";
import { faSortAmountDown, faTag } from "@fortawesome/free-solid-svg-icons";

interface IProps {}

const RealTimeFilter: FC<IProps> = () => {
  const [onFilter, setOnFilter] = useState(true);
  const [onTag, setOnTag] = useState(true);
  const onClickFilter = useCallback(() => {
    setOnFilter((prev) => !prev);
  }, []);
  const onClickTag = useCallback(() => {
    setOnTag((prev) => !prev);
  }, []);
  return (
    <FilterWrapper>
      <div className="filter-nav">
        <SearchBar />
        <div>
          <button onClick={onClickTag} className="filter-btn">
            태그추가
            <FontAwesomeIcon icon={faTag} />
          </button>
          <button onClick={onClickFilter} className="filter-btn">
            필터
            <FontAwesomeIcon icon={faSortAmountDown} />
          </button>
        </div>
      </div>
      {onFilter && <FilterList>hi</FilterList>}
      <div className="filter-tags">Tags :</div>
    </FilterWrapper>
  );
};

export default RealTimeFilter;
