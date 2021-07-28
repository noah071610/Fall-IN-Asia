import styled from "@emotion/styled";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import tw from "twin.macro";

const SearchPopUpWrapper = styled.div`
  input {
    ${tw`bg-transparent h-full px-2`}
    width:200px
  }
`;
interface IProps {}

const SearchPopUp: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {}, []);
  return (
    <SearchPopUpWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <input placeholder="검색어를 입력하세요..." type="text" />
    </SearchPopUpWrapper>
  );
};

export default SearchPopUp;
