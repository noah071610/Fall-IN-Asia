import styled from "@emotion/styled";
import { FLEX_STYLE, RGB_BLACK, WHITE_COLOR } from "config";

export const GalleryCardWrapper = styled.div`
  margin: 0.3rem;
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: translateY(-5px);
    .overlay {
      ${FLEX_STYLE("flex-end", "flex-start")};
      flex-direction: column;
    }
  }
  .gallery-img,
  .ant-image {
    border-radius: 5px;
    width: 100%;
  }
  .overlay {
    position: absolute;
    border-radius: 5px;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${RGB_BLACK(0.3)};
    padding: 0.7rem;
    display: none;
    .gallery-title {
      color: ${WHITE_COLOR};
      margin-bottom: 0.8rem;
      font-size: 1.1rem;
    }
    .gallery-user {
      ${FLEX_STYLE("flex-start", "center")};
      img {
        width: 2rem;
        border-radius: 50%;
        margin-right: 0.7rem;
      }
      span {
        color: ${WHITE_COLOR};
        font-size: 0.75rem;
      }
    }
  }
`;
