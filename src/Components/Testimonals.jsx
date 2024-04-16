import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";


import SwiperCore from "swiper";

SwiperCore.use([Pagination, Autoplay]);

export default function Testimonals() {
  let obj = [
    {
      id: 1,
      review:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive and the delivery was impressively prompt",
      name: "Akhil Barasker",
      email: "akhilb@gmail.com",
    },
    {
      id: 2,
      review:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive and the delivery was impressively prompt",
      name: "Nitin Bohare",
      email: "nitinb@gmail.com",
    },
    {
      id: 3,
      review:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive and the delivery was impressively prompt",
      name: "Ankoor Soni",
      email: "ankoors@gmail.com",
    },
    {
      id: 4,
      review:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive and the delivery was impressively prompt",
      name: "Ankoor Soni",
      email: "ankoors@gmail.com",
    },
    {
      id: 5,
      review:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive and the delivery was impressively prompt",
      name: "Ankoor Soni",
      email: "ankoors@gmail.com",
    },
    {
      id: 6,
      review:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive and the delivery was impressively prompt",
      name: "Ankoor Soni",
      email: "ankoors@gmail.com",
    },
    {
      id: 7,
      review:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive and the delivery was impressively prompt",
      name: "Ankoor Soni",
      email: "ankoors@gmail.com",
    },
    {
      id: 8,
      review:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive and the delivery was impressively prompt",
      name: "Ankoor Soni",
      email: "ankoors@gmail.com",
    },
    {
      id: 9,
      review:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive and the delivery was impressively prompt",
      name: "Ankoor Soni",
      email: "ankoors@gmail.com",
    },
    {
      id: 10,
      review:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive and the delivery was impressively prompt",
      name: "Ankoor Soni",
      email: "ankoors@gmail.com",
    }
  ];
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={true}
        // navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {obj.map((refs, index) => (
          <SwiperSlide>
            <div class="font-[sans-serif] max-w-[350px] h-auto p-8 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative my-12">
              <img
                src="https://readymadeui.com/profile_2.webp"
                class="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7"
              />
              <div className="mt-8 text-center">
                <p className="text-sm text-[#333] leading-relaxed ">
                  {refs.review}
                </p>
                <h4 className="text-base font-extrabold mt-8">{refs.name}</h4>
                <p>{refs.email}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
