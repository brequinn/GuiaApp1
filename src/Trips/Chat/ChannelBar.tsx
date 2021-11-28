import React from "react";
import { ChatSendMessage } from './ChatSendMessage';
import { Row, Col } from "antd";

export function ChannelBar() {
  return (
    <Row
      gutter={[0, 0]}
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <Col xs={24} sm={24} md={14} lg={14}></Col>
      <Col
        className="chat-bar"
        xs={24}
        sm={24}
        md={10}
        lg={10}
        style={{
          backgroundColor: "white",
          height: 73,
          display: "flex",
          alignItems: "center"
        }}
      >
        <ChatSendMessage />
      </Col>
    </Row>
  );
}