import React, { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { Button, Input, Upload } from "antd";
import ReactCrop, { Crop } from "react-image-crop";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import "react-image-crop/dist/ReactCrop.css";
import { IconCropperModalWrapper } from "./styles";
import { NameSpaceWrapper } from "@components/NameSpace";
import { changeUserIconAction } from "actions/user";
import { toastErrorMessage } from "config";
const { Dragger } = Upload;

interface IProps {}

const IconCropperModalper: FC<IProps> = () => {
  const dispatch = useDispatch();
  const [blob, setBlob] = useState<Blob | null>(null);
  const [upImg, setUpImg] = useState<ArrayBuffer | string | null>(null);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [completedCrop, setCompletedCrop] = useState<any>(null);
  const [crop, setCrop] = useState<Crop>({ unit: "%", width: 100, height: 100, aspect: 1 / 1 });
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

    new Promise((resolve, reject) => {
      canvas.toBlob((blob: Blob) => {
        if (!blob) {
          console.error("Canvas is empty");
          return;
        }
        resolve(setBlob(blob));
      }, "image/jpeg");
    });
    [completedCrop];
  });

  const handleChange = (info: any) => {
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl: any) => setUpImg(imageUrl));
    }
  };

  const onClickChangeIcon = useCallback(() => {
    if (!blob) {
      toastErrorMessage("이미지를 찾을수없습니다. 다시 시도해주세요.");
      return;
    }
    let form = new FormData();
    form.append("image", blob);
    dispatch(changeUserIconAction(form));
  }, [blob]);

  return (
    <div css={IconCropperModalWrapper(upImg)}>
      {upImg ? (
        <div className="crop-image-wrapper">
          <ReactCrop
            className="crop-image"
            src={upImg as string}
            onImageLoaded={onLoad}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCompletedCrop(c)}
          />
        </div>
      ) : (
        <Dragger
          showUploadList={false}
          multiple={false}
          className="dragger"
          onChange={handleChange}
        >
          <div className="dragger-inside-image">
            <img
              src="https://user-images.githubusercontent.com/74864925/124657825-f38a5500-dedd-11eb-8de9-6ed70a512f24.png"
              alt="drag"
            />
            <p>이미지 드래그 또는 선택</p>
          </div>
        </Dragger>
      )}
      {upImg && (
        <div className="image-preview">
          <NameSpaceWrapper className="name-space-preview">
            <div className="icon">
              <canvas className="cropped-image" ref={previewCanvasRef} />
            </div>
            <div className="user-info">
              <span className="name">{user?.name}</span>
              <span className="date">2021/07/29</span>
            </div>
          </NameSpaceWrapper>
          <div className="btn-wrapper">
            <button onClick={() => setUpImg(null)}>다시 선택</button>
            <button className="btn-point" onClick={onClickChangeIcon}>
              이미지 올리기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(IconCropperModalper);