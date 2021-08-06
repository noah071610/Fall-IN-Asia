import { css } from "@emotion/react";
import { FLEX_STYLE, GRID_STYLE, RGB_BLACK } from "config";
import tw from "twin.macro";

export const IconCropperModalWrapper = (upImg: ArrayBuffer | string | null) => css`
  ${tw`fixed top-1/2 left-1/2 p-8 shadow-lg bg-white rounded-2xl`}
  width:700px;
  z-index: 90;
  ${upImg && GRID_STYLE("2rem", "repeat(2,1fr)")};
  transform: translate(-50%, -60%);
  .dragger {
    ${tw`w-full rounded-xl`};
    height: 60vh;
    border: 1px solid ${RGB_BLACK(0.08)};
    &:hover {
      border: 1px solid ${RGB_BLACK(0.08)} !important;
    }
    img {
      width: 5rem;
    }
  }
  .image-preview {
    position: relative;
    ${FLEX_STYLE("", "flex-start", "column")};
    .crop-image,
    .no-image {
      ${tw`rounded-xl`}
    }
    .name-space-preview {
      ${tw`w-full h-full flex justify-center`}
      .icon {
        ${tw`w-24 h-24 rounded-full`}
      }
      .cropped-image {
        ${tw`w-full h-full rounded-full`}
      }
    }
    .btn-wrapper {
      ${tw`w-full`}
      ${GRID_STYLE(".5rem", "1fr 1fr")};
      button {
        ${tw`text-white font-bold py-3 bg-gray-300 rounded-xl hover:bg-gray-400`}
      }
      .btn-point {
        ${tw`bg-blue-400 hover:bg-blue-500`}
      }
    }
  }
  @media (max-width: 700px) {
    width: 95%;
    ${tw`p-4`}
    display:block;
    .crop-image-wrapper {
      ${FLEX_STYLE("center", "center")};
      .crop-image {
        div,
        img {
          max-height: 250px;
        }
      }
    }
    .image-preview {
      ${FLEX_STYLE("center", "center")};
      .name-space-preview {
        ${tw`my-4`}
        .icon {
          ${tw`w-16 h-16`}
        }
      }
    }
  }
`;
