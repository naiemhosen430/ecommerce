"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SingleProduct from "./SingleProduct";

export default function SingleProductSlider({ item }) {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={item}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        <SwiperSlide className="text-white rounded-xl inline-block cursor-pointer text-center w-full">
          <div className="w-12/12 inline-block">
            <SingleProduct
              className="w-full"
              pname={"bike"}
              price={150000}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKZYgV4IzKeWAiX_9XiMIkKYGm3b_7WE7yQ&usqp=CAU"
              }
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white rounded-xl inline-block cursor-pointer text-center w-full">
          <div className="w-12/12 inline-block">
            <SingleProduct
              className="w-full"
              pname={"bike"}
              price={150000}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkSTODy2CZ05PaP018JIhk8EJMYuH3KyUbA&usqp=CAU"
              }
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white rounded-xl inline-block cursor-pointer text-center w-full">
          <div className="w-12/12 inline-block">
            <SingleProduct
              className="w-full"
              pname={"bike"}
              price={150000}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGIVhWe0-41-o7KH10sj7NXFXHADKLX5TgQ&usqp=CAU"
              }
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white rounded-xl inline-block cursor-pointer text-center w-full">
          <div className="w-12/12 inline-block">
            <SingleProduct
              className="w-full"
              pname={"bike"}
              price={150000}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmyF59ghiywFnpq9zAMQcs2rLCm5Zy4izkg&usqp=CAU"
              }
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white rounded-xl inline-block cursor-pointer text-center w-full">
          <div className="w-12/12 inline-block">
            <SingleProduct
              className="w-full"
              pname={"bike"}
              price={150000}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlPwCdOLp5tj_8GOhE79LTjyjXFuchGWXCA&usqp=CAU"
              }
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white rounded-xl inline-block cursor-pointer text-center w-full">
          <div className="w-12/12 inline-block">
            <SingleProduct
              className="w-full"
              pname={"bike"}
              price={150000}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5GwuNKC_D9f04A7l9Lp6BamW-TnS6QzXiw&usqp=CAU"
              }
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
