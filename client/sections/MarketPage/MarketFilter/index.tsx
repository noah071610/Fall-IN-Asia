import React, { FC, useCallback, useState } from "react";
import { MarketFilterWrapper } from "./styles";
import { FLEX_STYLE, japanMapList, marketKeyword } from "config";
import { Input, Select } from "antd";
const { Search } = Input;
const { Option } = Select;

interface IProps {}

const MarketFilter: FC<IProps> = () => {
  const [state, setstate] = useState();
  const handleChange = useCallback((value: string) => {
    console.log(`selected ${value}`);
  }, []);
  return (
    <MarketFilterWrapper>
      <Search />
      <div className="select-menu">
        <Select style={{ width: 140 }} defaultValue="キーワード" onChange={handleChange}>
          {marketKeyword.map((v, i) => {
            <Option value={v.name} key={v.eng + i}>
              {v.name}
            </Option>;
          })}
        </Select>
        <Select style={{ width: 120 }} defaultValue="地域選択" onChange={handleChange}>
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
