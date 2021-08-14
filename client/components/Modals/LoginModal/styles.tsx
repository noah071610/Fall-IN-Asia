import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRID_STYLE, MD_SIZE, RGB_BLACK, SM_SIZE } from "config";
import tw from "twin.macro";

export const LoginModalWrapper = styled.div`
  ${tw`fixed top-1/2 left-1/2 py-8 px-12 shadow-lg bg-white rounded-2xl`}
  width:600px;
  z-index: 90;
  transform: translate(-50%, -50%);
  .image-wrapper {
    ${tw`py-4`}
    ${FLEX_STYLE("center", "center")};
    img {
      width: 70%;
      height: 85px;
    }
  }
  h4 {
    .login-icon {
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
    .btn-point {
      ${tw`bg-blue-400 hover:bg-blue-500`}
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
  @media (max-width: ${MD_SIZE}) {
    ${tw`w-11/12 px-8 py-12 `}
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`px-4`}
    width: 95%;
    .image-wrapper {
      ${tw`py-3`}
      img {
        height: 50px;
      }
    }
  }
`;
