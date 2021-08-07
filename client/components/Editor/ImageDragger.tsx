import React, { FC, SetStateAction, useCallback, useEffect, useState } from "react";
import { Upload } from "antd";
import styled from "@emotion/styled";
import { RGB_BLACK } from "config";
import { memo } from "react";
import { IPrevImage } from "@typings/db";
import { UploadFile } from "antd/lib/upload/interface";
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
  fileList: UploadFile[];
  setPrevImageList?: any;
  setFileList: any;
}

const ImageDragger: FC<IProps> = ({
  setUpImg,
  single,
  fileList,
  setPrevImageList,
  setFileList,
}) => {
  const handleChange = useCallback(
    (info: any) => {
      setFileList(info.fileList);
      if (info.file.status === "done") {
        if (single) {
          setUpImg(info.file.originFileObj);
        } else {
          setUpImg((prev: any) => [...prev, info.file.originFileObj]);
        }
      }
      if (info.file.status === "removed") {
        if (!info.file.originFileObj) {
          setPrevImageList(
            info.fileList
              .filter((v: UploadFile) => {
                return v.originFileObj === undefined;
              })
              .map((v: UploadFile) => {
                return v.url;
              })
          );
        }
        if (single) {
          setUpImg(null);
        } else {
          setUpImg(
            info.fileList.filter((v: any) => {
              return v.originFileObj !== undefined;
            })
          );
        }
      }
    },
    [single, fileList]
  );

  console.log("fileList#", fileList);

  return (
    <ImageDraggerWrapper>
      <Dragger
        showUploadList={true}
        maxCount={single ? 1 : 5}
        multiple={single ? false : true}
        listType="picture"
        className="dragger"
        fileList={fileList || undefined}
        onChange={handleChange}
      >
        <img
          src="https://user-images.githubusercontent.com/74864925/124657825-f38a5500-dedd-11eb-8de9-6ed70a512f24.png"
          alt="drag"
        />
        <h4>이미지 드래그 또는 선택</h4>
      </Dragger>
    </ImageDraggerWrapper>
  );
};

export default memo(ImageDragger);
