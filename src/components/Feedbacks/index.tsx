import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

export function Feedbacks() {

  return (
    <section className="text-center py-32">
      <h2 className="mb-10">feedbacks</h2>

      <div className="swiper-feedbacks max-w-[650px] mx-auto">
        <Swiper
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa incidunt quibusdam eveniet neque cumque autem. Vitae sapiente nobis ducimus sit incidunt ipsam, unde, repudiandae repellendus inventore eum pariatur eligendi expedita!</p>
          </SwiperSlide>

          <SwiperSlide>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa incidunt quibusdam eveniet neque cumque autem. Vitae sapiente nobis ducimus sit incidunt ipsam, unde, repudiandae repellendus inventore eum pariatur eligendi expedita!</p>
          </SwiperSlide>

          <SwiperSlide>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa incidunt quibusdam eveniet neque cumque autem. Vitae sapiente nobis ducimus sit incidunt ipsam, unde, repudiandae repellendus inventore eum pariatur eligendi expedita!</p>
          </SwiperSlide>
        </Swiper>

      </div>


    </section>
  )
}
