import React, { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { Input, Upload } from "antd";
import ReactCrop, { Crop } from "react-image-crop";
import useInput from "@hooks/useInput";
import router from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import "react-image-crop/dist/ReactCrop.css";
import { NO_IMAGE_URL } from "config";
import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRID_STYLE } from "config";
const { Dragger } = Upload;

const ImageCropWrapper = styled.div`
  .image-crop-section {
    margin-top: 2rem;
    ${GRID_STYLE("1rem", "1fr 1fr")};
    .crop-part {
      padding: 1rem;
      ${BORDER_THIN("border")};
      h4 {
        margin-bottom: 1rem;
      }
      div {
        ${FLEX_STYLE("center", "center")};
      }
    }
    .after,
    .before {
      max-height: 500px;
    }
  }
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
  setBlob: (blob: Blob | null) => void;
}

const ImageCropper: FC<IProps> = ({ setBlob }) => {
  const [url, onChangeUrl, setUrl] = useInput("");
  const [upImg, setUpImg] = useState<ArrayBuffer | string | null>(null);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [completedCrop, setCompletedCrop] = useState<any>(null);
  const [crop, setCrop] = useState<Crop>({ unit: "%", width: 100, height: 100 });
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (!user) {
      router.back();
    }
  }, []);

  const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }
    const image: any = imgRef.current;
    const canvas: any = previewCanvasRef.current;
    const crop: any = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    new Promise(() => {
      canvas.toBlob(
        (blob: Blob) => {
          setBlob(blob);
        },
        "image/png",
        1
      );
    });
  }, [completedCrop]);

  const handleChange = (info: any) => {
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl: any) => setUpImg(imageUrl));
    }
  };

  return (
    <ImageCropWrapper>
      <h3>URLからアップロード</h3>
      <Input
        disabled={upImg ? true : false}
        value={url}
        onChange={onChangeUrl}
        placeholder="https://"
      />
      <h3>ファイルからアップロード</h3>
      <Dragger
        disabled={url ? true : false}
        showUploadList={false}
        multiple={false}
        className="dragger"
        onChange={handleChange}
      >
        <div>
          <img
            src="https://user-images.githubusercontent.com/74864925/124657825-f38a5500-dedd-11eb-8de9-6ed70a512f24.png"
            alt="drag"
          />
          <p>ここにイメージドロップ</p>
        </div>
      </Dragger>
      <div className="image-crop-section">
        <div className="crop-part ">
          <h4>イメージを加工しましょう✂</h4>
          {upImg || url ? (
            <div>
              <ReactCrop
                className="before"
                crossorigin="anonymous"
                src={upImg || url}
                onImageLoaded={onLoad}
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
              />
            </div>
          ) : (
            <img src={NO_IMAGE_URL} alt="no image" />
          )}
        </div>
        <div className="crop-part ">
          <h4>加工結果</h4>
          {upImg || url ? (
            <div>
              <canvas className="after" ref={previewCanvasRef} />
            </div>
          ) : (
            <img src={NO_IMAGE_URL} alt="no image" />
          )}
        </div>
      </div>
    </ImageCropWrapper>
  );
};

export default memo(ImageCropper);
