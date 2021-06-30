import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRID_STYLE, MODAL_STYLE } from "config";

export const FilterWrapper = styled.div`
  width: 50%;
  right: 0;
  ${MODAL_STYLE("5%")};
  .filter-title {
    margin: 1rem 0;
    font-size: 1rem;
    ${FLEX_STYLE("flex-start", "center")};
    .fa-tags {
      font-size: 1rem;
      margin-left: 0.7rem;
    }
    .fa-chart-area {
      font-size: 1.3rem;
      margin-left: 0.7rem;
    }
  }
`;

export const JapanMap = styled.div`
  width: 100%;
  position: relative;
  ${GRID_STYLE("0.5rem", "repeat(3,1fr)")};
  .map {
    ${BORDER_THIN("border", 3)};
    border-radius: 5px;
    padding: 0.5rem;
    cursor: pointer;
    text-align: center;
    &:hover {
      opacity: 0.6;
    }
  }
  .hotkaido {
    background-color: #ff8585;
  }
  .tohoku {
    background-color: #fffb91;
  }
  .kanto {
    background-color: #79ff76;
  }
  .chubu {
    background-color: #8bffe8;
  }
  .kansai {
    background-color: #7272ff;
  }
  .chugoku {
    background-color: #ff9148;
  }
  .shikoku {
    background-color: #d16eff;
  }
  .kyushu {
    background-color: #c5c5c5;
  }
  .okinawa {
    background-color: #c5c5c5;
  }
`;
