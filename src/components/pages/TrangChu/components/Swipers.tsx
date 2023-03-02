import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../css/style.css";
import "/src/styles/tailwind.css";
// import required modules
import { EffectCards } from "swiper";
import styled from "styled-components";

const SwiperSlide = styled.div`
  width: 100%;
  display: "block";
  height: "160px";
`;

export default function App() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide
      // style={{ width: "100%", display: "block", height: "160px" }}
      >
        <img src="src/assets/imgs/banners/aoquan1.jpg" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="src/assets/imgs/banners/aoquan2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/assets/imgs/banners/aoquan3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/assets/imgs/banners/aoquan4.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/assets/imgs/banners/aoquan5.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
