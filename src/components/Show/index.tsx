import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper';

import "swiper/css/effect-fade";
import { SwiperSlideComponent } from "./SwiperSlide";

export function Show() {

  return (

    <div>
      <Swiper
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[EffectFade, Autoplay]}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <SwiperSlideComponent
            title="Cabelos lindos, igual modelo"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam corrupti iure, minima nam praesentium nesciunt"
            img="/slide2.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperSlideComponent
            title="melhores profissionais"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam corrupti iure, minima nam praesentium nesciunt"
            img="/slide4.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
