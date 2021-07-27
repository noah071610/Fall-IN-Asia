import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRAY_COLOR, GRID_STYLE, RGB_BLACK, WHITE_STYLE } from "config";
import tw from "twin.macro";

export const LoginModalWrapper = styled.div`
  ${tw`fixed top-1/2 left-1/2 py-8 px-12 z-20 shadow-lg bg-white rounded-2xl`}
  transform:translate(-50%,-50%);
  .image-wrapper {
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
  }
  .btn-wrapper {
    margin: 2rem 0 1rem 0;
    ${GRID_STYLE(".7rem", "1fr 1fr")};
    button {
      ${tw`text-white font-bold py-3 bg-gray-300 rounded-xl hover:bg-gray-400`}
    }
  }
  .social-login-divider {
    margin-top: 3rem;
  }
  .social-login-wrapper {
    ${FLEX_STYLE("center", "center")};
    .google-icon {
      ${BORDER_THIN("border")};
    }
    li {
      ${tw`mr-4 rounded-full shadow-md cursor-pointer hover:opacity-70`}
      img {
        ${tw`w-12 h-12`}
        padding:1rem;
      }
    }
    li:last-of-type {
      ${tw`mr-0`}
    }
  }
`;
