import React, { FC, useCallback, useState } from "react";
import { MarketFilterWrapper } from "./styles";
import { FLEX_STYLE, japanMapList, marketKeyword } from "config";
import { Input, Select } from "antd";
const { Search } = Input;
const { Option } = Select;

interface IProps {
  keyword: string;
  area: string;
  onClickFilterKeyword: (e: string) => void;
  onClickFilterArea: (e: string) => void;
  onSearchMarketGoods: (e: string) => void;
}

const MarketFilter: FC<IProps> = ({
  onClickFilterKeyword,
  onClickFilterArea,
  onSearchMarketGoods,
  keyword,
  area,
}) => {
  return (
    <MarketFilterWrapper>
      <Search onSearch={onSearchMarketGoods} />
      <div className="select-menu">
        <Select style={{ width: 140 }} value={keyword} onChange={onClickFilterKeyword}>
          <Option value="タイプ全部">タイプ全部</Option>
          {marketKeyword.map((v, i) => {
            return (
              <Option value={v.name} key={v.eng + i}>
                {v.name}
              </Option>
            );
          })}
        </Select>
        <Select style={{ width: 120 }} value={area} onChange={onClickFilterArea}>
          <Option value="全国">全国</Option>
          {japanMapList.map((v, i) => (
            <Option value={v.name} key={v.eng + i}>
              {v.name}
            </Option>
          ))}
        </Select>
      </div>
    </MarketFilterWrapper>
  );
};

export default MarketFilter;
