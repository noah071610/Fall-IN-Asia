import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import { AutoCompleteSearchWrapper } from "./styles";
import Autocomplete from "react-autocomplete";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";
import { IGroup } from "@typings/db";
import router from "next/router";
import { fanRegisterAction } from "actions/user";
import useInput from "@hooks/useInput";
import { SearchOutlined } from "@ant-design/icons";

interface IProps {
  groupsData: IGroup[];
  isVote?: boolean;
  isOnFanRegister?: boolean;
}

const AutoCompleteSearch: FC<IProps> = ({ groupsData, isVote, isOnFanRegister }) => {
  const dispatch = useDispatch();
  const autocompleteRef = useRef(null);
  const [value, onChangeValue, setValue] = useInput("");
  const options = useMemo(() => {
    return groupsData?.map((v: IGroup) => {
      return {
        value: v.group_name,
        label: (
          <div
            onClick={() => {
              if (isOnFanRegister) {
                dispatch(fanRegisterAction(v));
                return;
              }
              isVote
                ? dispatch(mainSlice.actions.selectGroupForVote(v))
                : router.push(`/club/${v.key_name}`);
            }}
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
  }, [groupsData, isVote, isOnFanRegister]);

  const onSumitSearchGroup = useCallback(
    (data: string) => {
      groupsData?.forEach((v: IGroup) => {
        if (v.group_name === data && isOnFanRegister) {
          dispatch(fanRegisterAction(v));
          return;
        }
        if (v.group_name === data) {
          isVote
            ? dispatch(mainSlice.actions.selectGroupForVote(v))
            : router.push(`/club/${v.key_name}`);
          return;
        }
      });
    },
    [groupsData, isVote, isOnFanRegister]
  );
  console.log(value);
  const [onSearchForm, setOnSearchForm] = useState(false);
  const onClickOpenSearchForm = useCallback(() => {
    setOnSearchForm(true);
    if (null !== autocompleteRef.current) {
      (autocompleteRef.current as any).focus();
    }
  }, []);

  return (
    <AutoCompleteSearchWrapper>
      {onSearchForm ? (
        <Autocomplete
          wrapperStyle={{ width: "100%" }}
          menuStyle={value ? { padding: ".5rem 0" } : {}}
          getItemValue={(item) => item.label}
          renderInput={(props) => {
            return <input ref={autocompleteRef} {...props} />;
          }}
          inputProps={{ placeholder: "검색어를 입력해주세요." }}
          items={
            value
              ? [
                  { id: "태국", label: "태국" },
                  { id: "미국", label: "미국" },
                  { id: "일본", label: "일본" },
                  { id: "대만", label: "대만" },
                  { id: "인도", label: "인도" },
                  { id: "인도네시아", label: "인도네시아" },
                ]
              : []
          }
          shouldItemRender={(item, value) =>
            item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          renderItem={(item) => <div className="autosearch-list">{item.label}</div>}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSelect={(value) => setValue(value)}
        />
      ) : (
        <div className="searchForm-before" onClick={onClickOpenSearchForm}>
          <span className="placeholder">국가 검색</span>
          <a>
            <SearchOutlined />
          </a>
        </div>
      )}
    </AutoCompleteSearchWrapper>
  );
};

export default AutoCompleteSearch;
