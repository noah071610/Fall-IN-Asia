import styled from "@emotion/styled";
import { BORDER_THIN } from "config";

export const ClubPostTitleWrapper = styled.div`
  padding: 0 2rem;
  h1 {
    margin-bottom: 1rem;
  }
  .post-title-info {
    padding-bottom: 1rem;
    ${BORDER_THIN("border-bottom")};
    margin-bottom: 1rem;
  }
`;
