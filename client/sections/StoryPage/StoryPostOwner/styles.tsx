import tw from "twin.macro";
import styled from "@emotion/styled/macro";
import { FLEX_STYLE, HOVER_GRAY } from "config";

export const StoryPostOwnerWrapper = styled.div`
  ${tw`mt-12 w-full`}
  ${FLEX_STYLE("center", "center")};
  .owner-info-wrapper {
    ${FLEX_STYLE("center", "center")};
    ${tw`flex-col w-2/5`}
  }
  .icon {
    img {
      ${tw`w-20 h-20 rounded-full`}
    }
  }
  .info {
    .name {
      ${tw`mt-4 text-center`}
    }
    .introduce {
      ${tw`mt-3`}
    }
  }
  .links {
    ${tw`mt-4`}
    button {
      ${tw`py-2 px-1.5 rounded-md`}
      ${HOVER_GRAY()};
    }
  }
`;
