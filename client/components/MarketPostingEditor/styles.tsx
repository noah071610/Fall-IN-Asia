import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRID_STYLE } from "config";

export const MarketPostingEditorWrapper = styled.div`
  img {
    width: 100%;
  }
  h3 {
    margin: 2rem 0 1rem 0;
    font-weight: bold;
  }
  .ant-radio-group {
    margin: 1rem 0;
  }
  .radio-title {
    font-weight: bold;
    margin-right: 1rem;
  }
  .upload-menu {
    margin-top: 2rem;
    h4 {
      padding-bottom: 0.5rem;
      margin-top: 2rem;
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
  .dragger {
    div {
      padding: 1rem;
      img {
        width: 20%;
      }
    }
  }
  .submit-menu {
    margin: 5rem 0 3rem 0;
    ${FLEX_STYLE("flex-end", "center")};
    .ant-btn {
      width: 20%;
      height: 2.5rem;
    }
  }
`;
