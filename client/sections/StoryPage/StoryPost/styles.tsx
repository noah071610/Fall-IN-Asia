import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, FONT_STYLE, GRAY_COLOR, HOVER_GRAY, RED_COLOR } from "config";
import tw from "twin.macro";

export const StoryPostWrapper = styled.div`
  ${tw`pb-16 mb-8`}
  ${BORDER_THIN("border-bottom")};
  .story-footer {
    ${tw`mx-8 mt-12`}
    ${FLEX_STYLE("flex-start", "center")};
    ${FONT_STYLE(1.3, true)};
    li {
      ${tw`p-2 cursor-pointer hover:bg-gray-100 rounded-xl`}
      .anticon,
      .count {
        margin-right: 0.5rem;
      }
    }
    .liked {
      .anticon {
        color: ${RED_COLOR};
      }
    }
  }
`;

export const StoryContent = styled.div`
  ${tw`pt-16 pb-24`}
  font-size:1rem;
  line-height: 1.7;
  img {
    width: 50%;
  }
  .ql-size-large {
    ${FONT_STYLE(1.5, true)}
  }
  .ql-size-huge {
    ${FONT_STYLE(2.5, true)}
  }
  .ql-size-small {
    ${FONT_STYLE(0.85, false)}
  }
  ul {
    list-style-type: disc;
    list-style: inherit;
    list-style-position: inside;
  }
  ol {
    list-style-type: decimal;
    list-style: decimal;
    list-style-position: inside;
  }
  li {
    display: list-item;
    list-style: inherit;
    list-style-position: inside;
  }
  .ql-align-center {
    text-align: center;
  }
  .ql-align-right {
    text-align: right;
  }
  blockquote {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 10px solid ${GRAY_COLOR};
  }
  .ql-indent-1 {
    margin-left: 2rem;
  }
  .ql-indent-2 {
    margin-left: 4rem;
  }
  .ql-indent-3 {
    margin-left: 6rem;
  }
  .ql-indent-4 {
    margin-left: 6rem;
  }
  .ql-indent-5 {
    margin-left: 8rem;
  }
`;
