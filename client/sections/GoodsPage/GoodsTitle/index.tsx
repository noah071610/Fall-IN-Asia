import { FC, useCallback, useState } from "react";
import { GoodsTitleWrapper } from "./styles";
import CommonTitle from "@components/Common/CommonTitle";
import GoodsFilter from "@sections/GoodsPage/GoodsFilter";
interface IProps {}

const GoodsTitle: FC<IProps> = () => {
  const [onFilter, setOnFilter] = useState(false);
  const onClickFilter = useCallback(() => {
    setOnFilter((prev) => !prev);
  }, []);
  return (
    <GoodsTitleWrapper>
      <CommonTitle title="グッズリスト" subtitle="私達のグッズマーケット">
        <button className="tag" onClick={onClickFilter}>
          フィルター
        </button>
      </CommonTitle>
      {onFilter && <GoodsFilter onFilter={onFilter} />}
      <ul>
        <li className="tag">早め</li>
        <li className="tag">直接交換</li>
      </ul>
    </GoodsTitleWrapper>
  );
};

export default GoodsTitle;
