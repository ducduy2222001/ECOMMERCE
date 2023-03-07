import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Col, Row } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

function ItemProps(props: any) {
  return (
    <div className="ItemsPropSub">
      <img
        src={props.image}
        alt=""
        style={{ width: "250px", height: "170px", borderRadius: "5px" }}
      />
      <div className="ItemPropsChil">
        <p className="content__ItemPropsChil-header">{props.title}</p>
        <p className="content__ItemPropsChil-dayPost">
          <CalendarOutlined style={{ marginRight: "5px" }} /> {props.day}
        </p>
        <p className="content__ItemPropsChil-main">{props.content}</p>
        <button className="content__ItemPropsChil-btn">{props.button}</button>
      </div>
    </div>
  );
}

export default function Swippers() {
  return (
    <Swiper
      style={{ height: "300px", width: "100%" }}
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
      className="mySwiper"
    >
      <SwiperSlide>
        <Row
          style={{
            width: "100%",
            display: " flex",
            justifyContent: "center",
          }}
        >
          <Col span={8} className="colSwiper__News">
            <ItemProps
              image="src/assets/imgs/TrangChu/news/anhNew.jpg"
              title="Tiêu Đề"
              day="1/1/1111"
              content="Nội dung..."
              button="XEM THÊM"
            />
          </Col>
          <Col span={8} className="colSwiper__News">
            <ItemProps
              image="src/assets/imgs/TrangChu/news/anhNew.jpg"
              title="Tiêu Đề"
              day="1/1/1111"
              content="Nội dung..."
              button="XEM THÊM"
            />
          </Col>
        </Row>
      </SwiperSlide>
      <SwiperSlide>
        <Row
          style={{
            width: "100%",
            display: " flex",
            justifyContent: "center",
          }}
        >
          <Col span={8} className="colSwiper__News">
            <ItemProps
              image="src/assets/imgs/TrangChu/news/anhNew.jpg"
              title="Tiêu Đề"
              day="1/1/1111"
              content="Nội dung..."
              button="XEM THÊM"
            />
          </Col>
          <Col span={8} className="colSwiper__News">
            <ItemProps
              image="src/assets/imgs/TrangChu/news/anhNew.jpg"
              title="Tiêu Đề"
              day="1/1/1111"
              content="Nội dung..."
              button="XEM THÊM"
            />
          </Col>
        </Row>
      </SwiperSlide>
      <SwiperSlide>
        <Row
          style={{
            width: "100%",
            display: " flex",
            justifyContent: "center",
          }}
        >
          <Col span={8} className="colSwiper__News">
            <ItemProps
              image="src/assets/imgs/TrangChu/news/anhNew.jpg"
              title="Tiêu Đề"
              day="1/1/1111"
              content="Nội dung..."
              button="XEM THÊM"
            />
          </Col>
          <Col span={8} className="colSwiper__News">
            <ItemProps
              image="src/assets/imgs/TrangChu/news/anhNew.jpg"
              title="Tiêu Đề"
              day="1/1/1111"
              content="Nội dung..."
              button="XEM THÊM"
            />
          </Col>
        </Row>
      </SwiperSlide>
    </Swiper>
  );
}
