import styled from "@emotion/styled";
import { FLEX_STYLE, RGB_BLACK, WHITE_COLOR } from "config";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 8fr;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${RGB_BLACK("0.08")};
  transition: 0.3s all;
  over-flow: hidden;
  position: relative;
  &:hover {
    background-color: ${RGB_BLACK("0.03")};
    .seemore {
      transform: rotateX(0);
    }
  }
`;

export const Icon = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
`;

export const Content = styled.div`
  padding: 1rem 0 1rem 2rem;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-weight: bold;
    margin: 0 1rem 0 0;
  }
  margin-bottom: 0.5rem;
`;

export const TagList = styled.ul`
  margin-bottom: 1rem;
`;

export const RealTimeTable = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
  gap: 1rem;
  .table-column {
    span {
      font-size: 2.2rem;
      font-weight: bold;
    }
    p {
      margin-top: 0.7rem;
    }
  }
  margin-bottom: 0.6rem;
`;

export const RealTimeComment = styled.div`
  h3 {
    margin-bottom: 0.7rem;
  }
  .anticon {
    margin-right: 0.5rem;
  }
  .user-comment {
    padding: 0 0.5rem;
  }
`;

export const SeeMorePopup = styled.button`
  ${FLEX_STYLE("center", "center")};
  position: absolute;
  padding: 1rem 2rem;
  bottom: 1rem;
  right: 1rem;
  background-color: ${WHITE_COLOR};
  perspective: 300px;
  transform: rotateX(90deg);
  transition: 0.4s all;
  img {
    width: 1.5rem;
  }
`;
