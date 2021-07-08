import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE } from "config";

export const PostingEditorWrapper = styled.div`
  padding-bottom: 5rem;
  h2 {
    font-weight: bold;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${BLUE_COLOR};
  }
  .ant-input {
    padding: 0.5rem;
    margin-bottom: 2rem;
  }
  .post-submit {
    margin-top: 4rem;
    width: 100%;
    ${FLEX_STYLE("flex-end", "center")};
    button {
      width: 20%;
    }
  }
  .ql-editor {
    height: 450px;
    padding: 1rem;
    img {
      width: 50%;
    }
  }
`;
