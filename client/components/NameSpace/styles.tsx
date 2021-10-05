import styled from "@emotion/styled";
import { FLEX_STYLE, RGB_BLACK } from "config";
import tw from "twin.macro";

export const NameSpaceWrapper = styled.div`
  ${FLEX_STYLE("flex-start", "flex-start")};
  ${tw`cursor-pointer`}
  &:hover {
    p {
      ${tw`underline`}
    }
  }
  .icon {
    ${tw`relative cursor-pointer mr-3`};
    img {
      ${tw`w-10 h-10 rounded-full`};
    }
    .goto-profile-popup {
      ${tw`absolute py-1 px-2 -left-5 -top-8 bg-gray-500 rounded shadow-lg hidden text-center text-xs font-bold text-white`}
      white-space: nowrap;
    }
    &:hover {
      img {
        ${tw`opacity-30`};
      }
      .goto-profile-popup {
        ${tw`block`}
      }
    }
  }
  p {
    ${tw`mt-2 leading-5`}
    font-size:0.83rem;
  }
  span {
    display: inline-block;
  }
  .name-title {
    ${tw`text-sm`}
    ${FLEX_STYLE("flex-start", "center")};
    .comment-date {
      margin-left: 0.6rem;
      color: ${RGB_BLACK(0.3)};
      font-size: 0.75rem;
    }
  }
  .date {
    padding-top: 0.2rem;
    font-size: 0.7rem;
    color: ${RGB_BLACK(0.3)};
  }
`;
