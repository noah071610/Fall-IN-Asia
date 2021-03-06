import { css } from "@emotion/react";

export const resetStyle = (lan: string) => css`
  *::-webkit-scrollbar {
    width: 7px;
  }

  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  *::-webkit-scrollbar-thumb {
    background: rgb(185, 185, 185);
  }

  *::-webkit-scrollbar-thumb:hover {
    background: rgb(153, 153, 153);
  }
  body {
    font-family: ${lan};
  }
  a {
    color: black;
    &:hover {
      color: black;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
  }

  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  input {
    border: none;
    width: 100%;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  .map-gl {
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  .suggestions {
    li {
      width: 100%;
    }
  }
  .mapboxgl-ctrl-geocoder {
    border-radius: 10px;
  }
  .mapboxgl-ctrl-geocoder--input {
    &:focus {
      outline: none;
      border: none;
      border-radius: 10px;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    }
  }
  .basic-input {
    background: white;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    &::placeholder {
      color: rgba(0, 0, 0, 0.25);
    }
    padding: 0.5rem 1rem;
    transition: 0.3s all;
    &:focus {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25) !important;
    }
    &:hover {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25) !important;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  input:-internal-autofill-selected,
  input:-internal-autofill-previewed {
    background-color: white !important;
    box-shadow: 0 0 0 30px white inset, 0px 0px 5px rgba(0, 0, 0, 0.15) !important;
  }

  textarea {
    border: none;
    padding: 0.5rem 0.3rem;
    width: 100%;
    background: none;
    line-height: 1.7;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.25);
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .basic-btn {
    border: none;
    margin: 0;
    padding: 0.6rem 0.8rem;
    overflow: visible;
    cursor: pointer;
    background-color: inherit;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    &:hover {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
    }
  }

  .ant-divider {
    background-color: white;
    .ant-divider-inner-text {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  .toast {
    padding: 0.5rem;
  }

  .ql-toolbar {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: none;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
  .ql-container {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background: white;
    height: 250px;
    padding-bottom: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }

  .ant-select-selector {
    border-radius: 10px !important;
    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.08) !important;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15) !important;
    }
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.08) !important;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15) !important;
    }
  }

  .drop-down {
    transition: 0.25s all;
    height: 100%;
    transform: translateY(0);
  }
  .roll-up {
    transition: 0.1s all;
    height: 0px;
    transform: translateY(-100%);
  }

  .confirm-btn-wrapper {
    margin-top: 0.75rem;
    button {
      padding: 0.2rem 0.4rem;
      border-radius: 10px;
      &:hover {
        background: #f3f4f6;
      }
    }
    button:first-of-type {
      margin-right: 0.5rem;
    }
  }

  .overlay {
    cursor: pointer;
    position: absolute;
    transition: 0.3s all;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  .mobile-overlay {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }

  .post-content {
    padding-top: 4rem;
    padding-bottom: 6rem;
    font-size: 0.875rem;
    line-height: 1.7;
    img {
      width: 70%;
    }
    .ql-size-large {
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: bold;
    }
    .ql-size-huge {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
    .ql-size-small {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    ul {
      list-style-type: disc;
      list-style: inherit;
      list-style-position: inside;
    }
    ol {
      list-style-type: decimal;
      list-style: decimal;
      list-style-position: inside;
    }
    li {
      display: list-item;
      list-style: inherit;
      list-style-position: inside;
    }
    .ql-align-center {
      text-align: center;
    }
    .ql-align-right {
      text-align: right;
    }
    blockquote {
      margin-left: 0px;
      margin-right: 0px;
      padding-left: 20px;
      padding-right: 20px;
      border-left: 10px solid #f3f4f6;
    }
    .ql-indent-1 {
      margin-left: 4rem;
    }
    .ql-indent-2 {
      margin-left: 8rem;
    }
    .ql-indent-3 {
      margin-left: 12rem;
    }
    .ql-indent-4 {
      margin-left: 16rem;
    }
    .ql-indent-5 {
      margin-left: 20rem;
    }
  }

  .anchor-offset-parent {
    position: relative;
  }

  .anchor-offset-controller {
    position: absolute;
    top: -6rem;
  }

  .ant-divider-horizontal.ant-divider-with-text::before,
  .ant-divider-horizontal.ant-divider-with-text::after {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
