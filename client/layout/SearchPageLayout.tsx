import { FC } from "react";
import styled from "@emotion/styled/macro";
import { FONT_STYLE, LG_SIZE } from "config";
import tw from "twin.macro";
const SearchPageLayoutWrapper = styled.div`
  width: ${LG_SIZE};
  ${tw`mx-auto`};
  .main-title {
    ${tw`text-center mt-12 mb-6`};
    ${FONT_STYLE(1.1, true)}
    span {
      ${tw`block text-sm mt-2`};
    }
  }
  .main-title:first-of-type {
    ${tw`mt-0 mb-6`}
  }
`;

interface SearchPageLayoutProps {}

const SearchPageLayout: FC<SearchPageLayoutProps> = ({ children }) => {
  return <SearchPageLayoutWrapper>{children}</SearchPageLayoutWrapper>;
};

export default SearchPageLayout;
