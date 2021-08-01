import styled from "@emotion/styled";
import { BORDER_THIN, GRID_STYLE } from "config";
import tw from "twin.macro";

export const WithdrawalModalWrapper = styled.div`
  h3 {
    ${tw`text-sm font-bold mb-4 mt-6`}
  }
  h3:first-of-type {
    ${tw`mt-0`}
  }
  ${tw`fixed top-1/2 left-1/2 py-8 px-12 z-30 shadow-lg bg-white rounded-2xl`}
  width:500px;
  transform: translate(-50%, -50%);
  .password-input {
    ${tw`py-2 px-3 hover:shadow-md focus:shadow-md`}
    border-radius:10px;
    ${BORDER_THIN("border")};
  }
  p {
    margin-top: 1rem;
  }
  .btn-wrapper {
    ${tw`w-full mt-8`}
    ${GRID_STYLE(".5rem", "1fr 1fr")};
    button {
      ${tw`text-white font-bold py-3 bg-gray-300 rounded-xl hover:bg-gray-400`}
    }
  }
`;
