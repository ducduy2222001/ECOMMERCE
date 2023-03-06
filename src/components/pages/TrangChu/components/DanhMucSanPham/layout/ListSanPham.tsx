import { Layout, Row, Col } from "antd";
import { wrap } from "module";
import React from "react";
const { Header, Content, Footer } = Layout;

interface IMasterLayoutProps {
  children: React.ReactNode;
}

const ListSanPham = ({ children }: IMasterLayoutProps) => (
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
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={12} className="header__Selectitems_li">
          <ul>
            <li>ALL SẨN PHẨM </li>
            <li>XU HƯỚNG</li>
            <li>BÁN CHẠY NHẤT</li>
          </ul>
        </Col>
      </Row>
    </Header>
    <Content>{children}</Content>
  </Layout>
);

export default ListSanPham;
