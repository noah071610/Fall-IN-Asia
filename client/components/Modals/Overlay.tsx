import React, { FC, useCallback } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";
import tw from "twin.macro";

const OverlayWrapper = styled.div`
  ${tw`fixed top-0 left-0 w-screen h-screen bg-black opacity-40`}
  z-index:80;
`;
interface IProps {
  isMobile?: boolean;
}

const Overlay: FC<IProps> = ({ isMobile }) => {
  const dispatch = useDispatch();
  const closeModal = useCallback(() => {
    dispatch(mainSlice.actions.closeModal());
  }, []);
  return (
    <OverlayWrapper
      className={isMobile ? "mobile-overlay" : ""}
      onClick={closeModal}
    ></OverlayWrapper>
  );
};

export default Overlay;
