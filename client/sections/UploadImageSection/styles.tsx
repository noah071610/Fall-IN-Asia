import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRID_STYLE, MODAL_STYLE } from "config";

export const UploadImageSectionWrapper = styled.div`
  img {
    width: 100%;
  }
  h3 {
    padding: 1rem 0;
    font-weight: bold;
  }
  .image-crop-section {
    ${GRID_STYLE("1rem", "1fr 1fr")};
    .crop-part {
      padding: 1rem;
      ${BORDER_THIN("border")};
    }
    .after,
    .before {
      h4 {
        margin-bottom: 1rem;
      }
      div {
        ${FLEX_STYLE("center", "center")};
      }
    }
  }
  .upload-menu {
    margin: 2rem 0;
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
    margin: 3rem 0;
    ${FLEX_STYLE("flex-end", "center")};
    .ant-btn {
      width: 20%;
      height: 2.5rem;
    }
  }
`;
