import React, { FC, memo } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { BORDER_THIN, FLEX_STYLE } from "config";

const MoreButtonWrapper = styled.button`
  ${tw`w-full rounded-md hover:shadow-md py-3 bg-white text-base font-bold`}
  ${BORDER_THIN("border")};
  ${FLEX_STYLE("center", "center")};
`;
interface IProps {
  onClickMoreBtn: () => void;
}

const MoreButton: FC<IProps> = ({ onClickMoreBtn }) => {
  return (
    <MoreButtonWrapper onClick={onClickMoreBtn}>
      <span>더보기 {" >"}</span>
    </MoreButtonWrapper>
  );
};

export default memo(MoreButton);
