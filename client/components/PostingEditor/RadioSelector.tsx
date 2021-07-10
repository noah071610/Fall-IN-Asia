import React, { FC, memo, useCallback, useState } from "react";
import { Radio } from "antd";
import styled from "@emotion/styled";
const RadioSelectorWrapper = styled.div`
  .radio-title {
    margin-right: 1rem;
  }
`;

interface IProps {
  title: string;
  value: string;
  setValue: (e: string) => void;
  lists: any[];
}

const RadioSelector: FC<IProps> = ({ title, value, setValue, lists }) => {
  const onChangeValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return (
    <RadioSelectorWrapper>
      <h3>{title}選択</h3>
      <Radio.Group defaultValue={lists[0].name} onChange={onChangeValue} value={value}>
        {lists.map((v, i: number) => {
          return (
            <Radio key={i} value={v.name}>
              {v.name}
            </Radio>
          );
        })}
      </Radio.Group>
    </RadioSelectorWrapper>
  );
};

export default memo(RadioSelector);
