import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";
import ListSanPham from "../layout/ListSanPham";
import CartProduct from "./CartProduct/CartProduct";

const ContentAllPr = styled.div`
  background-color: #ffffff;
`;

const Allproduct: React.FC = () => (
  <ListSanPham>
    <ContentAllPr>
      <Content className="h-[550px] w-[1419.2px] ">
        <Row
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Col
            span={8}
            style={{
              paddingTop: "50px",
            }}
          >
            <CartProduct />
          </Col>
          <Col
            span={8}
            style={{
              paddingTop: "50px",
            }}
          >
            <CartProduct />
          </Col>
          <Col
            span={8}
            style={{
              paddingTop: "50px",
            }}
          >
            <CartProduct />
          </Col>
          <Col
            span={8}
            style={{
              paddingTop: "50px",
            }}
          >
            <CartProduct />
          </Col>
        </Row>
      </Content>
    </ContentAllPr>
  </ListSanPham>
);

export default Allproduct;
