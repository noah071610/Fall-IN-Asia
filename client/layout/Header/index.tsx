import { FC, KeyboardEvent, memo, useCallback, useEffect, useRef, useState } from "react";
import { HeaderWrapper } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "slices";
import { mainSlice } from "slices/main";
import SearchPopUp from "@components/Popups/SearchPopUp";
import useInput from "@hooks/useInput";
import router from "next/router";
import { throttle } from "lodash";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderSmall from "./HeaderSmall";

const Header = () => {
  const dispatch = useDispatch();
  const [searchWord, onChangeSearchWord, setSearchWord] = useInput("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const [headerDownSize, setHeaderDownSize] = useState(false);
  const { onSearchPopUp } = useSelector((state: RootState) => state.main);

  useEffect(() => {
    const scrollCallBack = () => {
      if (window.scrollY > 100) {
        setHeaderDownSize(true);
      } else {
        setHeaderDownSize(false);
      }
    };
    window.addEventListener("scroll", throttle(scrollCallBack, 300));
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  useEffect(() => {
    if (onSearchPopUp) {
      searchInputRef?.current?.focus();
      mobileSearchInputRef?.current?.focus();
    }
  }, [onSearchPopUp, searchInputRef, mobileSearchInputRef]);

  const onClickSearchWord = useCallback(() => {
    if (searchWord === "" || !searchWord?.trim()) {
      dispatch(mainSlice.actions.toggleSearchPopUp());
      return;
    }
    router.push(`/search?keyword=${searchWord}`);
  }, [searchWord]);

  const onPressEnter = useCallback(
    (e: KeyboardEvent<Element>) => {
      if (e.key === "Enter") {
        if (searchWord === "" || !searchWord?.trim()) {
          return;
        }
        router.push(`/search?keyword=${searchWord}`);
        dispatch(mainSlice.actions.toggleSearchPopUp());
      }
    },
    [searchWord]
  );

  return (
    <header css={HeaderWrapper(headerDownSize)}>
      {/* Size UNDER then SM_SIZE */}
      <HeaderSmall onClickSearchWord={onClickSearchWord}>
        {onSearchPopUp && (
          <SearchPopUp
            width="100%"
            inputRef={mobileSearchInputRef}
            onPressEnter={onPressEnter}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            onChangeSearchWord={onChangeSearchWord}
          />
        )}
      </HeaderSmall>

      {/* Size UPPER then SM_SIZE */}
      <HeaderLeft />
      <HeaderRight onClickSearchWord={onClickSearchWord}>
        {onSearchPopUp && (
          <SearchPopUp
            width="200px"
            inputRef={searchInputRef}
            onPressEnter={onPressEnter}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            onChangeSearchWord={onChangeSearchWord}
          />
        )}
      </HeaderRight>
    </header>
  );
};

export default Header;
