import { FilterWrapper } from "./styles";
import { FC, memo, useCallback, useState } from "react";
import { goodsFilterList, japanMapList } from "config";
import { Input, Select } from "antd";
const { Search } = Input;
const { Option } = Select;
interface IProps {}

const MarketFilter: FC<IProps> = () => {
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  return (
    <FilterWrapper>
      <Search />
      <div className="select-menu">
        <Select style={{ width: 140 }} defaultValue="キーワード" onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select style={{ width: 120 }} defaultValue="地域選択" onChange={handleChange}>
          {japanMapList.map((v, i) => (
            <Option value={v.name} key={v.eng + i}>
              {v.name}
            </Option>
          ))}
        </Select>
      </div>
    </FilterWrapper>
  );
};

export default memo(MarketFilter);
