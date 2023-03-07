import React from "react";
import MasterLayout from "../../../layouts/MasterLayOut";
import { Content } from "antd/lib/layout/layout";
import Vision from "./components/Vision";
import { Col, Row } from "antd";

const GioiThieu: React.FC = () => (
  <MasterLayout>
    <div style={{ display: "flex" }}>
      <Content
        style={{
          minHeight: 280,
          backgroundColor: "#ffff",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div className="page-header-wrapper">
          <img
            src="src/assets/imgs/banners/anhCoGai.jpg"
            alt="anh bìa đầu trang"
            style={{
              height: "340px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "100% 0",
            }}
          />
        </div>
        <Row
          style={{
            display: "flex",
            height: "auto",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Col
            span={8}
            style={{
              height: "340px",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              padding: "100px",
              fontSize: "30px",
            }}
          >
            GIỚI THIỆU
          </Col>
        </Row>
        <Vision />
      </Content>
    </div>
  </MasterLayout>
);

export default GioiThieu;
