// 按需加载监听函数
import { Spin } from "antd";
import React from "react";
import ErrorComponent from "./ErrorComponent";

export const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="out-spin">
        <Spin size="large" />
      </div>
    );
  } else if (error) {
    return <ErrorComponent />;
  } else {
    return <ErrorComponent />;
  }
};
