import React, { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { UploadImageSectionWrapper } from "./styles";
import { Button, Input, Upload } from "antd";
import ReactCrop, { Crop } from "react-image-crop";
import useInput from "@hooks/useInput";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import "react-image-crop/dist/ReactCrop.css";
import { NO_IMAGE_URL, toastErrorMessage, toastSuccessMessage } from "config";
import { galleryPostCreateAction } from "actions/gallery";
import dynamic from "next/dynamic";
const { Dragger } = Upload;
interface IProps {}

const UploadImageSection: FC<IProps> = () => {
  const [title, onChangeTitle, setTitle] = useInput("");
  const [url, onChangeUrl, setUrl] = useInput("");
  const [upImg, setUpImg] = useState<ArrayBuffer | string | null>(null);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [completedCrop, setCompletedCrop] = useState<any>(null);
  const [blob, setBlob] = useState<Blob | null>(null);
  const [crop, setCrop] = useState<Crop>({ unit: "%", width: 100, height: 100 });
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { galleryPostCreateDone } = useSelector((state: RootState) => state.gallery);
  useEffect(() => {
    if (!user) {
      router.back();
    }
  }, []);
  useEffect(() => {
    if (galleryPostCreateDone) {
      router.push("/gallery");
      toastSuccessMessage("イメージをアップロード致しました！😆");
      setUpImg("");
      setUrl("");
      setTitle("");
      setBlob(null);
    }
  }, [galleryPostCreateDone]);

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

  const onSubmitImage = useCallback(() => {
    if (!blob) {
      toastErrorMessage("イメージがありません！");
      return;
    }
    if (!title) {
      toastErrorMessage("タイトルを作成してください。");
      return;
    }
    const form = new FormData();
    form.append("image", blob);
    form.append("title", String(title));
    dispatch(galleryPostCreateAction(form));
  }, [blob, title]);

  return (
    <UploadImageSectionWrapper>
      <div className="upload-menu">
        <h3>1)&nbsp;イメージのタイトル</h3>
        <Input placeholder="タイトル入力" value={title} onChange={onChangeTitle} />
        <h3>2-1)&nbsp;URLからアップロード</h3>
        <Input
          disabled={upImg ? true : false}
          value={url}
          onChange={onChangeUrl}
          placeholder="https://"
        />
        <h3>2-2)&nbsp;ファイルからアップロード</h3>
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
      </div>
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
      <div className="submit-menu">
        <Button
          onClick={() => {
            router.back();
          }}
        >
          以前のページ
        </Button>
        <Button onClick={onSubmitImage} type="primary">
          アップロード
        </Button>
      </div>
    </UploadImageSectionWrapper>
  );
};

export default memo(UploadImageSection);
