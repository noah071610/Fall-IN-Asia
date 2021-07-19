import React, { FC, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { LG_SIZE, MD_SIZE, RGB_BLACK, XLG_SIZE } from "config";
import Header from "sections/Header/index";
import Footer from "sections/Footer/index";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";
import Navigation from "./Navigation";
const Wrapper = styled.div`
  width: ${XLG_SIZE};
  margin: 0 auto;
`;

interface AppLayoutProps {}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const closeModal = useCallback(() => {
    dispatch(mainSlice.actions.closeModal());
  }, []);
  return (
    <>
      <div onClick={closeModal}>
        <Wrapper>{children}</Wrapper>
      </div>
    </>
  );
};

export default AppLayout;
