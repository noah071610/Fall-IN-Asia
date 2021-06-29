import React, { FC, useState } from "react";
import { CommentFormWrapper } from "./styles";
import { Input } from "antd";
const { TextArea } = Input;
interface IProps {}

const CommentForm: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <CommentFormWrapper>
      <div className="name-space">
        <a className="icon">
          <img src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" />
        </a>
        <a className="name">佐藤真由美</a>
      </div>
      <TextArea />
    </CommentFormWrapper>
  );
};

export default CommentForm;
