import React from "react";
import MasterLayout from "../../../layouts/MasterLayOut";
import { Content } from "antd/lib/layout/layout";
import Swipers from "./components/Swipers/SwipersMain";
import SelectNamNu from "./components/selectNamNu";
import Branch from "./components/Branch/Branch";
import Instagram from "./components/Instagram";
import Section from "./components/Section";
import ListSanPham from "./components/DanhMucSanPham/layout/ListSanPham";
import News from "./components/News/News";

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

        <ListSanPham />
        <Instagram />
        <News />
        <Section />
      </Content>
    </div>
  </MasterLayout>
);

export default TrangChu;
