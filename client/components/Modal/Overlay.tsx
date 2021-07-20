import React, { FC, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { BLACK_COLOR } from "config";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${BLACK_COLOR};
  opacity: 0.3;
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
