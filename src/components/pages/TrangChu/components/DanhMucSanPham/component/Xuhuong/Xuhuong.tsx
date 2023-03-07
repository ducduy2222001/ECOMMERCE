import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";
import CartProductXuHuong from "./CartProductXuHuong/CartProductXuHuong";

const ContentAllPr = styled.div`
  background-color: #ffffff;
`;

const Xuhuong: React.FC = () => (
  <ContentAllPr>
    <Content>
      <CartProductXuHuong />
    </Content>
  </ContentAllPr>
);

export default Xuhuong;
