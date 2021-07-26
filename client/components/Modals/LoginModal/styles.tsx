import styled from "@emotion/styled";
import { FLEX_STYLE, GRAY_COLOR, GRID_STYLE, RGB_BLACK, WHITE_STYLE } from "config";
import tw from "twin.macro";

export const LoginModalWrapper = styled.div`
  ${tw`w-96 fixed top-1/2 left-1/2 p-4 z-20 shadow-lg bg-white rounded-2xl`}
  transform:translate(-50%,-65%);
  .image-wrapper {
    padding: 2rem 0;
    ${FLEX_STYLE("center", "center")};
    img {
      width: 50%;
    }
  }
  h4 {
    .icon {
      margin-right: 0.5rem;
    }
    margin: 1rem 0;
  }
  input {
    transition: 0.3s all;
    box-shadow: 0px 0px 5px ${RGB_BLACK(0.15)};
    &:focus {
      border: none;
    }
  }
  .btn-wrapper {
    margin: 2rem 0 1rem 0;
    ${GRID_STYLE(".7rem", "1fr 1fr")};
    button {
      padding: 0.85rem 0;
      background: ${GRAY_COLOR};
      border-radius: 15px;
      &:hover {
        background: ${RGB_BLACK(0.15)};
      }
    }
  }
  .social-login-wrapper {
    li {
      ${tw`mr-4`}
      img {
        ${tw`w-10 h-10`}
      }
    }
  }
`;
