import React, { FC, useCallback } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";
import tw from "twin.macro";

const OverlayWrapper = styled.div`
  ${tw`fixed top-0 left-0 w-screen h-screen bg-white opacity-40`}
  z-index:80;
`;
interface IProps {}

const Overlay: FC<IProps> = () => {
  const dispatch = useDispatch();
  const closeModal = useCallback(() => {
    dispatch(mainSlice.actions.closeModal());
  }, []);
  return <OverlayWrapper onClick={closeModal}></OverlayWrapper>;
};

export default Overlay;
