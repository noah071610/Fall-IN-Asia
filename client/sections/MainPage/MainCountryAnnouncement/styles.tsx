import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";
import tw from "twin.macro";

export const MainCountryAnnouncementWrapper = styled.div`
  ${tw`pt-2`}
  li {
    ${tw`cursor-pointer bg-white rounded-xl mr-3 px-7 py-5 font-bold text-sm hover:shadow-md`}
  }
  .announcement {
    ${tw`p-8 bg-white rounded-2xl mt-4`}
    p,
      span {
      font-size: 0.85rem !important;
      ${tw`leading-8`}
    }
    b {
      font-size: 1rem;
    }
    img {
      width: 100%;
    }
  }
`;
