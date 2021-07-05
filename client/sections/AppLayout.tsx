import React, { FC, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { LG_SIZE, MD_SIZE, RGB_BLACK } from "config";
import Header from "sections/Header/index";
import Footer from "sections/Footer/index";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";
const Wrapper = styled.div`
  width: ${LG_SIZE};
  box-shadow: 0px 0px 15px ${RGB_BLACK(0.1)};
  margin: 59px auto 0 auto;
`;

interface AppLayoutProps {}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const closeModal = useCallback(() => {
    dispatch(mainSlice.actions.closeModal());
  }, []);
  return (
    <>
      <Header />
      <div onClick={closeModal}>
        <Wrapper>{children}</Wrapper>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default AppLayout;
