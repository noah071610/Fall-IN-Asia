import styled from "@emotion/styled";
import { RGB_BLACK } from "config";

export const ClubPostTitleWrapper = styled.div`
  padding: 0 2rem;
  h1 {
    margin-bottom: 1rem;
  }
  .post-title-info {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${RGB_BLACK("0.08")};
    margin-bottom: 1rem;
  }
`;
