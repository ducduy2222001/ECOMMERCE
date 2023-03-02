import React from "react";
import { Row, Col, Dropdown, Button, MenuProps } from "antd";
import styled from "styled-components";
import SelectClothes from "src/mockdata/SelectClothes";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
];
export default function SelectNamNu() {
  const ColItems = styled.div`
    .selectClothes {
      width: 95%;
      flex-wrap: wrap;
      font-size: 20px;
      font-weight: 600;
    }
    .selectClothes p {
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
    }
  `;

  return (
    <Row
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        marginTop: "50px",
        padding: "0",
      }}
    >
      <ColItems style={{ display: "flex", justifyContent: "center" }}>
        <Col span={8} className="selectClothes">
          <p>THỜI TRANG NAM</p>

          <img src="src/assets/imgs/banners/setNam.jpg" alt="" />
          <Dropdown menu={{ items }} placement="top">
            <Button>top</Button>
          </Dropdown>
        </Col>
      </ColItems>
      <ColItems style={{ display: "flex", justifyContent: "center" }}>
        <Col span={8} className="selectClothes">
          <p>THỜI TRANG NỮ</p>
          <img src="src/assets/imgs/banners/setNu.jpg" alt="" />
        </Col>
      </ColItems>
    </Row>
  );
}
