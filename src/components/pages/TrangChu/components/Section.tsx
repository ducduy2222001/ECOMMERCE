import {
  CarOutlined,
  DollarCircleOutlined,
  SecurityScanOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <div className="section">
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Col span={8} className="section__ColSub">
          <CarOutlined style={{ fontSize: "50px" }} />
          <Row className="section__Row">
            <Col span={8} className="section__ColChil">
              GIAO HÀNG MIỄN PHÍ & TRẢ LẠI
            </Col>
            <Col span={8} className="section__ColChil">
              Miễn phí vận chuyển
            </Col>
          </Row>
        </Col>
        <Col span={8} className="section__ColSub">
          <DollarCircleOutlined style={{ fontSize: "50px" }} />
          <Row className="section__Row">
            <Col span={8} className="section__ColChil">
              GIAO HÀNG MIỄN PHÍ & TRẢ LẠI
            </Col>
            <Col span={8} className="section__ColChil">
              Miễn phí vận chuyển
            </Col>
          </Row>
        </Col>
        <Col span={8} className="section__ColSub">
          <SecurityScanOutlined style={{ fontSize: "50px" }} />
          <Row className="section__Row">
            <Col span={8} className="section__ColChil">
              GIAO HÀNG MIỄN PHÍ & TRẢ LẠI
            </Col>
            <Col span={8} className="section__ColChil">
              Miễn phí vận chuyển
            </Col>
          </Row>
        </Col>
        <Col span={8} className="section__ColSub">
          <FieldTimeOutlined style={{ fontSize: "50px" }} />
          <Row className="section__Row">
            <Col span={8} className="section__ColChil">
              GIAO HÀNG MIỄN PHÍ & TRẢ LẠI
            </Col>
            <Col span={8} className="section__ColChil">
              Miễn phí vận chuyển
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Section;
