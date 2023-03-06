import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import menuDanhMuc from "@mockdata/Danhmuc";
import ViewListIcon from "@mui/icons-material/ViewList";

const items = menuDanhMuc;

const Menus: React.FC = () => (
  <Dropdown menu={{ items }} className="Dropdown">
    <p onClick={(e) => e.preventDefault()}>
      <Space>
        <p
          style={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "17px",
            height: "64px",
            color: "#ffff",
            padding: " 10px",
          }}
          className="dropdown__list"
        >
          <ViewListIcon
            style={{ fontSize: "30px", color: "#ffff", marginRight: "3px" }}
          />
          DANH MỤC SẢN PHẨM
          <CaretDownOutlined style={{ marginLeft: "20px", fontSize: "15px" }} />
        </p>
      </Space>
    </p>
  </Dropdown>
);

export default Menus;
