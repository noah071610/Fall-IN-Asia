import styled from "@emotion/styled";
import { BLACK_COLOR, BLUE_COLOR, BORDER_THIN, FLEX_STYLE, RGB_BLACK, WHITE_COLOR } from "config";
import { Input } from "antd";
const { Search } = Input;

export const FilterWrapper = styled.div`
  overflow: hidden;
  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  .filter-main {
    display: grid;
    grid-template-columns: 2fr 4fr;
    gap: 3rem;
    padding: 2rem;
    margin-bottom: 1rem;
    ${BORDER_THIN("border")};
  }
`;

export const Fillter = styled.div`
  padding: 1rem 0;
  .filter-title {
    margin: 1rem 0;
    font-size: 0.9rem;
    .svg-inline--fa {
      margin-left: 0.5rem;
    }
  }
`;

export const SearchBar = styled(Search)`
  width: 100%;
`;
export const JapanMap = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: relative;
  .map {
    ${BORDER_THIN("border", 5)};
    border-radius: 10px;
    margin: 0.3rem;
    padding: 0.5rem;
  }
  .row {
    display: flex;
    flex-direction: row-reverse;
  }
  .hotkaido {
    width: 120px;
    height: 90px;
    background-color: #ff8585;
    cursor: pointer;
    margin-top: 0;
    margin-bottom: 1rem;
    &:hover {
      opacity: 0.4;
      span {
        font-weight: bold;
      }
    }
  }
  .tohoku {
    width: 90px;
    height: 100px;
    background-color: #fffb91;
    cursor: pointer;
    margin-right: 2rem;
    &:hover {
      opacity: 0.4;
      span {
        font-weight: bold;
      }
    }
  }
  .kanto {
    width: 70px;
    height: 80px;
    background-color: #79ff76;
    cursor: pointer;
    margin-right: 2rem;
    &:hover {
      opacity: 0.4;
      span {
        font-weight: bold;
      }
    }
  }
  .chubu {
    width: 70px;
    height: 80px;
    background-color: #8bffe8;
    cursor: pointer;
    &:hover {
      opacity: 0.4;
      span {
        font-weight: bold;
      }
    }
    padding-bottom: 2rem;
  }
  .kansai {
    width: 70px;
    height: 80px;
    background-color: #7272ff;
    cursor: pointer;
    &:hover {
      opacity: 0.4;
      span {
        font-weight: bold;
      }
    }
  }
  .map-chu-shi {
    ${BORDER_THIN("border", 5)};
    border-radius: 10px;
    margin: 0.3rem;
  }
  .chugoku {
    padding: 0.5rem;
    width: 70px;
    height: 54px;
    background-color: #ff9148;
    cursor: pointer;
    &:hover {
      opacity: 0.4;
      span {
        font-weight: bold;
      }
    }
  }
  .shikoku {
    padding: 0.5rem;
    width: 70px;
    height: 54px;
    background-color: #d16eff;
    cursor: pointer;
    &:hover {
      opacity: 0.4;
      span {
        font-weight: bold;
      }
    }
  }
  .kyushu {
    width: 70px;
    height: 120px;
    background-color: #c5c5c5;
    cursor: pointer;
    &:hover {
      opacity: 0.4;
      span {
        font-weight: bold;
      }
    }
  }
  .okinawa {
    position: absolute;
    top: 2rem;
    left: 2rem;
    padding: 3rem;
    ${BORDER_THIN("border-right")};
    ${BORDER_THIN("border-bottom")};
    &-map {
      border: 5px solid ${WHITE_COLOR};
      border-radius: 10px;
      width: 60px;
      height: 30px;
      background-color: #c5c5c5;
      cursor: pointer;
      &:hover {
        opacity: 0.4;
        span {
          font-weight: bold;
        }
      }
      transform: rotateZ(-45deg);
    }
    span {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
    }
  }
`;
