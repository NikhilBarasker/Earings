import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

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
    }
  ];
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {obj.map((refs, index) => (
          <SwiperSlide>
            <div class="font-[sans-serif] max-w-[350px] h-auto p-8 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative my-12">
              <img
                src="https://readymadeui.com/profile_2.webp"
                class="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7"
              />
              <div className="mt-8 text-center">
                <p className="text-sm text-[#333] leading-relaxed ">
                  {/* The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt. */}
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
