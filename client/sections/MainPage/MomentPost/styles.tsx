import styled from "@emotion/styled";
import { RED_COLOR, SM_SIZE } from "config";
import tw from "twin.macro";

export const MomentPostWrapper = styled.section`
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
    ${tw`pt-8 pb-12 text-sm`}
    min-height: 200px;
    img {
      width: 70%;
    }
  }
  .post-footer {
    li {
      ${tw`p-1 cursor-pointer rounded-xl hover:bg-gray-100`}
      .count {
        margin: 0 0.3rem;
      }
      .anticon {
        font-size: 1.2rem;
      }
    }
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`py-6 px-4`}
    .image-wrapper {
      .ant-image {
        .ant-image-img {
          height: 250px;
        }
      }
    }
    .post-content {
      img {
        width: 100%;
      }
    }
    .post-footer {
      li {
        .anticon {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
