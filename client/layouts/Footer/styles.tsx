import styled from "@emotion/styled";
import { LG_SIZE, RGB_BLACK, WHITE_COLOR } from "config";

export const FooterWrapper = styled.div`
  padding: 2rem 0.7rem 2rem 0.7rem;
  background-color: ${RGB_BLACK("0.7")};
  border-top: 1px solid ${RGB_BLACK("0.07")};
  .footer-lgsize {
    width: ${LG_SIZE};
    color: ${WHITE_COLOR};
    margin: 0 auto;
  }
`;
