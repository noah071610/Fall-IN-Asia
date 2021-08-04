import styled from "@emotion/styled";
import { RED_COLOR } from "config";
import tw from "twin.macro";

export const MomentPostWrapper = styled.div`
  ${tw`mb-8 p-8 rounded-2xl bg-white`}
  .image-wrapper {
    ${tw`py-8 cursor-pointer rounded-xl`}
    .ant-image {
      ${tw`w-full`}
      .ant-image-img {
        ${tw`w-full rounded-xl `}
        height: 450px;
      }
      .anticon {
        font-size: 3rem;
      }
    }
  }
  .liked {
    .anticon {
      color: ${RED_COLOR};
    }
  }
  .post-content {
    ${tw`pt-8 pb-12`}
    min-height: 200px;
    img {
      width: 70%;
    }
  }
  .post-footer {
    li {
      ${tw`py-1 px-2 mr-1 cursor-pointer rounded-xl hover:bg-gray-100`}
      .count {
        margin: 0 0.3rem;
      }
      .anticon {
        font-size: 1.2rem;
      }
    }
  }
`;
