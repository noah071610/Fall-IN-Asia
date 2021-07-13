import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRID_STYLE, RGB_BLACK, WHITE_COLOR } from "config";

export const AnnounceMenuWrapper = styled.ul`
  li {
    display: flex;
    padding: 0.5rem 0 0.5rem 1rem;
    transition: 0.3s all;
    cursor: pointer;
    .category {
      ${BORDER_THIN("border")};
      padding: 0.2rem 0.5rem;
      background: ${WHITE_COLOR};
      margin-right: 0.4rem;
      font-size: 0.75rem;
    }
    &:hover {
      background: ${RGB_BLACK(0.15)};
    }
  }
`;

export const ChatMenuWrapper = styled.ul`
  li {
    width: 100%;
    cursor: pointer;
    padding: 0.5rem 0 0.5rem 1rem;
    transition: 0.3s all;
    ${BORDER_THIN("border-bottom")};
    .name-space {
      ${FLEX_STYLE("flex-start", "center")};
      img {
        border-radius: 50%;
        width: 2rem;
        margin-right: 0.5rem;
      }
      span {
        font-weight: bold;
      }
    }
    .recent-message {
      margin: 1rem 0;
      font-size: 0.9rem;
      ${FLEX_STYLE("flex-start", "center")};
    }
    &:hover {
      background: ${RGB_BLACK(0.15)};
    }
  }
`;

export const FanMenuWrapper = styled.div`
  padding-left: 1rem;
  img {
    width: 100%;
  }
  h2 {
    margin: 1rem 0;
    ${FLEX_STYLE("flex-start", "center")};
    button {
      margin: 0 0 0 1rem;
    }
  }
  h4 {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    .group-name {
      font-size: 0.9rem;
      font-weight: bold;
      margin-right: 0.3rem;
    }
    .count {
      color: ${BLUE_COLOR};
      font-weight: bold;
    }
  }
`;

export const StudyMenuWrapper = styled.ul`
  padding-left: 1rem;
  li {
    box-shadow: 1px 1px 8px ${RGB_BLACK(0.08)};
    padding: 1rem;
    .leaderUser-info {
      img {
        width: 100%;
        border-radius: 50%;
      }
      ${GRID_STYLE("1rem", "1fr 3fr")};
      h3 {
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
      h4 {
        margin-bottom: 0.3rem;
      }
    }
    .title {
      margin-top: 0.7rem;
    }
  }
`;

export const SettingMenuWrapper = styled.ul`
  padding-left: 1rem;
  li {
    cursor: pointer;
    display: block;
    transition: 0.3s all;
    ${BORDER_THIN("border")};
    padding: 1rem;
    .anticon {
      margin-right: 1rem;
    }
    &:hover {
      background: ${RGB_BLACK(0.15)};
    }
  }
`;
