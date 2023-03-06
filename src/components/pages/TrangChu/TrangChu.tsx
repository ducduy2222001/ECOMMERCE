import React from "react";
import MasterLayout from "../../../layouts/MasterLayOut";
import { Content } from "antd/lib/layout/layout";
import Swipers from "./components/Swipers/Swipers";
import SelectNamNu from "./components/selectNamNu";
import Branch from "./components/Branch/Branch";
import Allproduct from "./components/DanhMucSanPham/component/Allproduct";
import Instagram from "./components/Instagram";
import Section from "./components/Section";

const TrangChu: React.FC = () => (
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
        <Swipers />
        <SelectNamNu />
        <Branch />
        <Allproduct />
        <Instagram />
        <Section />
      </Content>
    </div>
  </MasterLayout>
);

export default TrangChu;
