import React, { FC, useState } from "react";
import { FooterWrapper } from "./styles";

interface IProps {}

const Footer: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <FooterWrapper>
      <div className="footer-lgsize">Jang-Hyun-Soo (Noah) All Rights Resrved.</div>
    </FooterWrapper>
  );
};

export default Footer;
