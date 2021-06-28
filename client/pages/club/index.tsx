import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import GroupCard from "@components/GroupCard";
import GroupSelectModal from "@components/GroupSelectModal";
import { FLEX_STYLE, GRID_STYLE, PINK_COLOR } from "config";
import Slider from "react-slick";
import { Divider } from "antd";
import GruopPreview from "@components/GruopPreview";

export const ClubMainWrapper = styled.div`
  padding: 1rem;
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
