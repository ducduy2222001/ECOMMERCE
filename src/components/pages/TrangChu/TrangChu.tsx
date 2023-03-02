import { Col, Layout, Menu, Row } from "antd";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import MasterLayout from "../../../layouts/MasterLayOut";
import { Content } from "antd/lib/layout/layout";
import Swiper from "swiper";
import Swipers from "./components/Swipers";
import SelectNamNu from "./components/selectNamNu";

const TrangChu: React.FC = () => (
  <MasterLayout>
    <div style={{ display: "flex" }}>
      <Content
        style={{
          minHeight: 280,
          backgroundColor: "#ffff",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Swipers />
        <SelectNamNu />
      </Content>
    </div>
    <div style={{ height: "100px" }}></div>
  </MasterLayout>
);

export default TrangChu;
