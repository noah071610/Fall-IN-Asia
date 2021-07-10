import Link from "next/link";
import React, { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";
import { wrapperCSS } from "./styles";

interface IProps {
  name: string;
  image: string;
  group: string;
  isVote?: boolean;
}

const GroupCard: FC<IProps> = ({ name, image, group, isVote }) => {
  const dispatch = useDispatch();
  const onClickGruopInVote = useCallback(() => {
    dispatch(mainSlice.actions.selectGroupForVote({ name, image, group }));
  }, [name, image]);
  return (
    <>
      {isVote ? (
        <div onClick={onClickGruopInVote} css={wrapperCSS(image)}>
          <div className="mask" />
          <h2>{name}</h2>
        </div>
      ) : (
        <Link href={`/club/${group}`}>
          <a css={wrapperCSS(image)}>
            <div className="mask" />
            <h2>{name}</h2>
          </a>
        </Link>
      )}
    </>
  );
};

export default memo(GroupCard);
