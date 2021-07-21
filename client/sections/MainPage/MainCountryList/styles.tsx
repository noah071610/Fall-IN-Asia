import styled from "@emotion/styled";
import { FONT_STYLE, GRID_STYLE } from "config";

export const MainCountryListWrapper = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: white;
  margin-top: 1rem;
  padding: 1rem;
  .country-card-wrapper {
    ${GRID_STYLE("", "repeat(5,1fr)")};
    margin-bottom: 1rem;
    img {
      width: 3rem;
      height: 3rem;
    }
  }
  h3 {
    ${FONT_STYLE(0.9, true)};
    margin-bottom: 1rem;
  }
`;
