import styled from "@emotion/styled";
import { BORDER_THIN, XLG_SIZE } from "config";
import tw from "twin.macro";

export const FooterWrapper = styled.div`
  ${tw`py-8 px-3 bg-gray-700`}
  ${BORDER_THIN("border-top")};
  .footer-inner {
    width: ${XLG_SIZE};
    ${tw`mx-auto text-white px-8`}
    h1,h2,h3,h4,a {
      ${tw`text-white`}
    }
    h1,
    h2,
    h3 {
      ${tw`font-bold`}
    }
    .footer-top {
      ${tw`mb-8`}
      h1 {
        ${tw`mb-2 text-3xl`}
      }
    }
    .footer-list-wrapper {
      ${tw`flex mb-2`}
      .footer-list {
        ${tw`mr-12 mb-4`}
        h2 {
          ${tw`mb-4`}
        }
        ul {
          li {
            ${tw`block pb-3`}
          }
        }
        .anticon {
          ${tw`mr-2`}
        }
      }
    }
    .license {
      ${tw`mb-4`}
    }
  }
  @media (max-width: 1300px) {
    .footer-inner {
      ${tw`w-full px-2`}
    }
  }
`;
