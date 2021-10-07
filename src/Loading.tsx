
   
import React from "react";
import { Spin } from "antd";

export function Loading() {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin />
    </div>
  );
}