import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRID_STYLE, RGB_BLACK, WHITE_COLOR } from "config";

export const AnnounceMenuWrapper = styled.ul`
  .announce-list {
    padding-left: 1rem;
    box-shadow: 2px 2px 8px ${RGB_BLACK(0.15)};
    margin-bottom: 0.3rem;
    width: 100%;
    padding: 1rem 0 1rem 1rem;
    transition: 0.3s all;
    cursor: pointer;
    .category {
      ${BORDER_THIN("border")};
      display: inline-block;
      padding: 0.2rem 0.5rem;
      background: ${WHITE_COLOR};
      margin-right: 0.4rem;
      font-size: 0.75rem;
    }
    h4 {
      margin-top: 0.5rem;
    }
    &:hover {
      background: ${RGB_BLACK(0.15)};
    }
  }
  .no-chat-box {
    ${FLEX_STYLE("center", "center")};
    flex-direction: column;
    padding: 0 1rem 0 2rem;
    img {
      width: 50%;
      opacity: 0.3;
    }
    span {
      font-weight: bold;
      color: ${BLUE_COLOR};
    }
  }
`;

export const ChatMenuWrapper = styled.ul`
  .chat-list {
    width: 100%;
    cursor: pointer;
    padding: 0.5rem 0 0.5rem 1rem;
    transition: 0.3s all;
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

  .no-chat-box {
    ${FLEX_STYLE("center", "center")};
    flex-direction: column;
    padding: 0 1rem 0 2rem;
    img {
      width: 50%;
      opacity: 0.3;
    }
    span {
      font-weight: bold;
      color: ${BLUE_COLOR};
    }
  }
`;

export const FanMenuWrapper = styled.div`
  padding-left: 1rem;
  .fan-desc {
    padding: 1rem;
    box-shadow: 2px 2px 8px ${RGB_BLACK(0.15)};
    .tag {
      margin: 0.5rem 0.5rem 1rem 0;
    }
    img {
      width: 100%;
      height: 140px;
    }
    h2 {
      margin: 1rem 0;
      font-weight: bold;
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
  }
  h3 {
    font-weight: bold;
    font-size: 1.05rem;
    padding-bottom: 0.8rem;
    border-bottom: 2px solid ${BLUE_COLOR};
  }
`;

export const StudyMenuWrapper = styled.ul`
  .study-list {
    padding-left: 1rem;
    box-shadow: 2px 2px 8px ${RGB_BLACK(0.15)};
    margin-bottom: 0.3rem;
    padding: 1rem;
    transition: 0.3s all;
    cursor: pointer;
    .leaderUser-info {
      img {
        width: 100%;
        border-radius: 50%;
      }
      ${GRID_STYLE("1rem", "1fr 3fr")};
      h3 {
        margin-bottom: 0.8rem;
        font-size: 0.8rem;
        font-weight: bold;
      }
      .tag {
        font-size: 0.65rem;
        padding: 0.2rem;
      }
    }
    .title {
      margin-top: 0.7rem;
      font-size: 0.8rem;
    }
    &:hover {
      background: ${RGB_BLACK(0.15)};
    }
  }
  .no-chat-box {
    ${FLEX_STYLE("center", "center")};
    flex-direction: column;
    padding: 0 1rem 0 2rem;
    img {
      width: 50%;
      opacity: 0.3;
    }
    span {
      font-weight: bold;
      color: ${BLUE_COLOR};
    }
  }
`;

export const SettingMenuWrapper = styled.ul`
  padding-left: 1rem;
  li {
    cursor: pointer;
    display: block;
    transition: 0.3s all;
    box-shadow: 2px 2px 8px ${RGB_BLACK(0.15)};
    margin-bottom: 0.3rem;
    padding: 1rem;
    .anticon {
      margin-right: 1rem;
    }
    &:hover {
      background: ${RGB_BLACK(0.15)};
    }
  }
`;
