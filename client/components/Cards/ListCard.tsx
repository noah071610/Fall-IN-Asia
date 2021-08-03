import useHtmlConverter from "@hooks/useHtmlConverter";
import React, { FC, ReactNode, useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const ListCardWrapper = styled.li`
  ${tw`w-full p-4 cursor-pointer mb-2 shadow-md`}
  transition:0.3s all;
  &:hover {
    ${tw`shadow-lg`}
  }
  h4 {
    ${tw`mb-2 text-xs`}
  }
  p {
    ${tw`font-bold leading-6`}
  }
`;
interface IProps {
  title: string;
  content: string;
  onClickListCard: () => void;
}

const ListCard: FC<IProps> = ({ title, content, onClickListCard }) => {
  return (
    <ListCardWrapper onClick={onClickListCard} className="list-card-wrapper">
      <h4>{title}</h4>
      <p>{useHtmlConverter(content)}</p>
    </ListCardWrapper>
  );
};

export default ListCard;
