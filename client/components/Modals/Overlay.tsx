import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { BLACK_COLOR } from "config";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";
import tw from "twin.macro";

const OverlayWrapper = styled.div`
  ${tw`fixed top-0 left-0 w-screen h-screen bg-white opacity-40 z-10`}
`;
interface IProps {}

const Overlay: FC<IProps> = () => {
  const dispatch = useDispatch();
  const onscroll = useCallback(() => {
    scrollTo({ top: 0 });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);
  const closeModal = useCallback(() => {}, []);
  return <OverlayWrapper onClick={closeModal}></OverlayWrapper>;
};

export default Overlay;
