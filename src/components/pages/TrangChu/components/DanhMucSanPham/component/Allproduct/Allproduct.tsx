import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";
import CartProduct from "./CartProductAllProduct/CartProductAllProduct";

const ContentAllPr = styled.div`
  background-color: #ffffff;
`;

const Allproduct: React.FC = () => (
  <ContentAllPr>
    <Content>
      <CartProduct />
    </Content>
  </ContentAllPr>
);

export default Allproduct;
