import { Layout, Row, Col } from "antd";
import React, { SetStateAction, useState } from "react";
import Allproduct from "../component/Allproduct/Allproduct";
import BanChayNhat from "../component/BanChayNhat/BanChayNhat";

import Xuhuong from "../component/Xuhuong/Xuhuong";
const { Header } = Layout;
import "./style.css";
function ListSanPham() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: SetStateAction<number>) => {
    setToggleState(index);
  };
  return (
    <Layout>
      <Header className="header__listProduct ">
        <Row>
          <Col span={12}>
            <p
              style={{
                display: "flex ",
                justifyContent: "center",
                fontSize: "25px",
                fontWeight: "bold",
                marginTop: "50px",
              }}
            >
              DANH MỤC SẢN PHẨM
            </p>

            <p
              style={{
                display: "flex ",
                justifyContent: "center",
                fontSize: "17px",
                opacity: "0.7",
                marginTop: "-18px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={12} className="header__Selectitems_li">
            <ul>
              <li
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                ALL SẨN PHẨM
              </li>
              <li
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                XU HƯỚNG
              </li>
              <li
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                BÁN CHẠY NHẤT
              </li>
            </ul>
            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <Allproduct />
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <Xuhuong />
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <BanChayNhat />
              </div>
            </div>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
}

export default ListSanPham;
