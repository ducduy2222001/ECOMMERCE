import React from "react";
import { Row, Col, Dropdown, Button, MenuProps } from "antd";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Áo sơ mi
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Quần Tây
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Giày
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Dyed Silk Tank
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Quần Jean
      </a>
    ),
  },
];

export default function SelectNamNu() {
  const ColItems = styled.div`
    .selectClothes {
      width: 80%;
      flex-wrap: wrap;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
    }
    .selectClothes p {
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
    }

    .selectClothes img:hover {
      box-shadow: 10px 10px 10px #aaaaaa;
    }

    .selectClothes img {
      border-radius: 15px;
    }

    .selectClothes:hover {
      margin-top: -10px;
    }

    .selectClothes .button__item1,
    .selectClothes .button__item2,
    .selectClothes .button__item3,
    .selectClothes .button__item4,
    .selectClothes .button__item5 {
      position: absolute;
      background-color: black;
      border-radius: 100%;
      color: white;
      height: 30px;
      width: 30px;
    }

    .selectClothes .button__item1 {
      margin-left: 180px;
      margin-top: 130px;
    }

    .selectClothes .button__item2 {
      margin-top: 400px;
      margin-left: 210px;
    }

    .selectClothes .button__item3 {
      margin-top: 630px;
      margin-left: 225px;
    }

    .selectClothes .button__item4 {
      margin-left: 260px;
      margin-top: 135px;
    }

    .selectClothes .button__item5 {
      margin-left: 210px;
      margin-top: 400px;
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
        <Col span={8} className="selectClothes ">
          <p>THỜI TRANG NAM</p>
          <Dropdown
            menu={{ items: [items[0]] }}
            placement="top"
            className="button__item1"
          >
            <Button icon={<PlusOutlined />}></Button>
          </Dropdown>
          <Dropdown
            menu={{ items: [items[1]] }}
            placement="top"
            className="button__item2"
          >
            <Button icon={<PlusOutlined />}></Button>
          </Dropdown>
          <Dropdown
            menu={{ items: [items[2]] }}
            placement="top"
            className="button__item3"
          >
            <Button icon={<PlusOutlined />}></Button>
          </Dropdown>
          <img src="src/assets/imgs/TrangChu/banners/setNam.jpg" alt="" />
        </Col>
      </ColItems>

      <ColItems style={{ display: "flex", justifyContent: "center" }}>
        <Col span={8} className="selectClothes">
          <p>THỜI TRANG NỮ</p>
          <Dropdown
            menu={{ items: [items[3]] }}
            placement="top"
            className="button__item4"
          >
            <Button icon={<PlusOutlined />}></Button>
          </Dropdown>
          <Dropdown
            menu={{ items: [items[4]] }}
            placement="top"
            className="button__item5"
          >
            <Button icon={<PlusOutlined />}></Button>
          </Dropdown>
          <img src="src/assets/imgs/TrangChu/banners/setNu.jpg" alt="" />
        </Col>
      </ColItems>
    </Row>
  );
}
