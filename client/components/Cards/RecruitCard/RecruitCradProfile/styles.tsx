import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE } from "config";

export const RecruitCradProfileWrapper = styled.div`
  margin-top: 1.5rem;
  padding: 2rem;
  ${BORDER_THIN("border")};
  img {
    width: 50%;
  }
  .card-profile-title {
    position: relative;
    ${FLEX_STYLE("space-between", "center")};
  }
  .password-modal {
    right: -0.6rem;
    h4 {
      font-size: 1rem;
    }
    form {
      ${FLEX_STYLE("flex-start", "flex-end")};
    }
  }
`;
