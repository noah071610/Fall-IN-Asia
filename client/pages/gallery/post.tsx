import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";

import UploadImageSection from "@sections/UploadImageSection/";

export const GalleryPostWrapper = styled.div`
  padding: 2rem;
`;

const post = () => {
  return (
    <GalleryPostWrapper>
      <CommonTitle point="ギャラリー" title="" subtitle="イメージアップロード" />
      <UploadImageSection />
    </GalleryPostWrapper>
  );
};

export default post;
