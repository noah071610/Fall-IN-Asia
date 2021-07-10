import React, { FC, useCallback, useState } from "react";
import { Upload } from "antd";
import styled from "@emotion/styled";
const { Dragger } = Upload;
const ImageDraggerWrapper = styled.div`
  .dragger {
    div {
      padding: 1rem;
      img {
        width: 20%;
      }
    }
  }
`;

interface IProps {
  setUpImg: (value: any) => void;
}

const ImageDragger: FC<IProps> = ({ setUpImg }) => {
  const handleChange = useCallback((info: any) => {
    if (info.file.status === "done") {
      setUpImg((prev: any) => [...prev, info.file.originFileObj]);
    }
  }, []);

  return (
    <ImageDraggerWrapper>
      <h3>イメージアップロード</h3>
      <Dragger showUploadList={true} multiple={true} className="dragger" onChange={handleChange}>
        <div>
          <img
            src="https://user-images.githubusercontent.com/74864925/124657825-f38a5500-dedd-11eb-8de9-6ed70a512f24.png"
            alt="drag"
          />
          <p>ここにイメージドロップ</p>
        </div>
      </Dragger>
    </ImageDraggerWrapper>
  );
};

export default ImageDragger;
