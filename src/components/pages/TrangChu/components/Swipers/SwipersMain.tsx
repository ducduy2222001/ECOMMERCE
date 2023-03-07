import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Col, Row } from "antd";

export default function Swwipers() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[580px]"
      >
        <SwiperSlide>
          <img src="src/assets/imgs/TrangChu/banners/anhGiay.jpg" alt="" />
          <Row className="SwiperSlide__Item">
            <Col span={8} style={{ width: "100%", height: "auto" }}>
              <strong style={{ fontSize: "32px " }}>NEW </strong> <br />
              <strong style={{ fontSize: "46px", letterSpacing: "5px" }}>
                STYLE 2023
              </strong>
              <p style={{ opacity: "0.5", fontSize: "16px" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/imgs/TrangChu/banners/anhNhomNguoi.jpg" alt="" />
          <Row className="SwiperSlide__Item">
            <Col span={8} style={{ width: "100%", height: "auto" }}>
              <strong style={{ fontSize: "32px " }}>NEW </strong> <br />
              <strong style={{ fontSize: "46px", letterSpacing: "5px" }}>
                STYLE 2023
              </strong>
              <p style={{ opacity: "0.5", fontSize: "16px" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/imgs/TrangChu/banners/anhCoGai.jpg" alt="" />
          <Row className="SwiperSlide__Item">
            <Col span={8} style={{ width: "100%", height: "auto" }}>
              <strong style={{ fontSize: "32px " }}>NEW </strong> <br />
              <strong style={{ fontSize: "46px", letterSpacing: "5px" }}>
                STYLE 2023
              </strong>
              <p style={{ opacity: "0.5", fontSize: "16px" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
