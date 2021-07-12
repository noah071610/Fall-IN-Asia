import React, { FC, useCallback, useMemo, useState } from "react";
import { AutoCompleteSearchWrapper } from "./styles";
import { AutoComplete, Input } from "antd";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";
import { IGroup } from "@typings/db";
import router from "next/router";

interface IProps {
  groupsData: IGroup[];
  isVote?: boolean;
}

const AutoCompleteSearch: FC<IProps> = ({ groupsData, isVote }) => {
  const dispatch = useDispatch();
  const options = useMemo(() => {
    return groupsData?.map((v: IGroup) => {
      return {
        value: v.group_name,
        label: (
          <div
            onClick={() =>
              isVote
                ? dispatch(mainSlice.actions.selectGroupForVote(v))
                : router.push(`/club/${v.key_name}`)
            }
          >
            <img
              style={{ width: "6rem", height: "4rem", borderRadius: "10px" }}
              src={v.image}
              alt="group-search-image"
            />
            <span style={{ marginLeft: "1rem", fontSize: "1rem" }}>{v.group_name}</span>
          </div>
        ),
      };
    });
  }, [groupsData, isVote]);

  const onSumitSearchGroup = useCallback(
    (data: string) => {
      groupsData?.forEach((v: IGroup) => {
        if (v.group_name === data) {
          isVote
            ? dispatch(mainSlice.actions.selectGroupForVote(v))
            : router.push(`/club/${v.key_name}`);
          return;
        }
      });
    },
    [groupsData, isVote]
  );
  return (
    <AutoComplete
      style={{ width: isVote ? "50%" : "100%" }}
      options={options}
      onSelect={onSumitSearchGroup}
      showSearch={true}
      filterOption={(inputValue, option) => {
        return option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
      }}
    >
      <Input.Search placeholder="グループ名入力" />
    </AutoComplete>
  );
};

export default AutoCompleteSearch;