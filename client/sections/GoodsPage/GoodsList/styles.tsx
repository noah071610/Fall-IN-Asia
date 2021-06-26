import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 2rem;
  h2 {
    margin-bottom: 2rem;
    font-weight: bold;
  }
  .goods-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;
