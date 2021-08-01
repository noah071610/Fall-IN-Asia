import React, { FC, useCallback } from "react";
import { Upload } from "antd";
import styled from "@emotion/styled";
import { RGB_BLACK } from "config";
import { memo } from "react";
const { Dragger } = Upload;
const ImageDraggerWrapper = styled.div`
  .dragger {
    border-radius: 15px;
    border: 1px solid ${RGB_BLACK(0.08)};
    &:hover {
      border: 1px solid ${RGB_BLACK(0.08)} !important;
    }
    img {
      width: 5rem;
    }
  }
  .ant-upload-list-item-list-type-picture {
    border-radius: 10px;
  }
`;

interface IProps {
  setUpImg: (value: any) => void;
  single?: boolean;
}

const ImageDragger: FC<IProps> = ({ setUpImg, single }) => {
  const handleChange = useCallback(
    (info: any) => {
      if (info.file.status === "done") {
        if (single) {
          setUpImg(info.file.originFileObj);
        } else {
          setUpImg((prev: any) => [...prev, info.file.originFileObj]);
        }
      }
    },
    [single]
  );

  return (
    <ImageDraggerWrapper>
      <Dragger
        showUploadList={true}
        multiple={single ? false : true}
        listType="picture"
        className="dragger"
        onChange={handleChange}
      >
        <img
          src="https://user-images.githubusercontent.com/74864925/124657825-f38a5500-dedd-11eb-8de9-6ed70a512f24.png"
          alt="drag"
        />
        <h4>이미지 드래그</h4>
      </Dragger>
    </ImageDraggerWrapper>
  );
};

export default memo(ImageDragger);
