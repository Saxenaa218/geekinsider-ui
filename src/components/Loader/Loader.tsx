// import React from "react";
import { Spin } from "antd";
import { LoaderPropTypes } from "./types";
import { LoadingOutlined } from "@ant-design/icons";
import "./Loader.scss";

const Loader = (props: LoaderPropTypes) => {
  const { fontSize, text } = props;
  return (
    <div className="loader--generic">
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: fontSize || 30 }} spin />
        }
        tip={text}
      />
    </div>
  );
};

export default Loader;
