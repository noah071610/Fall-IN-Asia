import styled from "@emotion/styled";
import { GRAY_COLOR, RED_COLOR } from "config";

export const MainPostWrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem 0;
  border-radius: 15px;
  background-color: white;
  .image-wrapper {
    cursor: pointer;
    padding: 2rem;
    border-radius: 10px;
    .ant-image {
      width: 100%;
      .ant-image-img {
        width: 100%;
        height: 450px;
        border-radius: 10px;
      }
      .anticon {
        font-size: 3rem;
      }
    }
  }
  .liked {
    .anticon {
      color: ${RED_COLOR};
    }
  }
  .post-content {
    font-size: 1rem;
    padding: 2rem 2rem 3rem 2rem;
    line-height: 2;
    min-height: 200px;
    img {
      width: 70%;
    }
  }
  .post-footer {
    padding: 0 2rem;
    li {
      padding: 0.3rem;
      margin-right: 0.3rem;
      cursor: pointer;
      .count {
        margin: 0 0.3rem;
      }
      .anticon {
        font-size: 1.2rem;
      }
      &:hover {
        background: ${GRAY_COLOR};
        border-radius: 5px;
      }
    }
  }
`;
