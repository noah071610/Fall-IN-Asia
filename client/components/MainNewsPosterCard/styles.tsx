import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  cursor: pointer;
  &:hover {
    h2 {
      text-decoration: underline;
    }
  }
  img {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 5px;
  }
  h3 {
    margin-bottom: 1rem;
  }
`;
