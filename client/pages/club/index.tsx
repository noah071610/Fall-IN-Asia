import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";
import GroupSelectModal from "@components/GroupSelectModal";
import { GRID_STYLE } from "config";
import { Divider } from "antd";
import GruopPreview from "@components/GruopPreview";

export const ClubMainWrapper = styled.div`
  padding: 2rem;
  .club-previews {
    padding: 1rem;
    ${GRID_STYLE("1rem", "repeat(2,1fr)")};
  }
`;

interface IProps {}

const index: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <ClubMainWrapper>
      <CommonTitle title="ファンクラブ" subtitle="仲間と会える空間" />
      <div style={{ margin: "2rem" }} />
      <GroupSelectModal />
      <Divider />
      <div className="club-previews">
        <GruopPreview />
        <GruopPreview />
        <GruopPreview />
      </div>
    </ClubMainWrapper>
  );
};

export default index;
