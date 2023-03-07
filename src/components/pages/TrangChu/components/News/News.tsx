import { Row, Col, Pagination } from "antd";
import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Swippers from "./SwippersOfNew/SwippersOfNew";

function News() {
  return (
    <div
      style={{
        borderBottom: "1px #aaa solid",
        width: "100%",
      }}
    >
      <Row>
        <Col span={12}>
          <p
            style={{
              display: "flex ",
              justifyContent: "center",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "50px",
              height: "64px",
            }}
          >
            TIN TỨC MỚI NHẤT
          </p>

          <p
            style={{
              display: "flex ",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "17px",
              opacity: "0.7",
              marginTop: "-18px",
              height: "64px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          </p>
        </Col>
        <Col>
          <Swippers />
        </Col>
      </Row>
    </div>
  );
}

export default News;
