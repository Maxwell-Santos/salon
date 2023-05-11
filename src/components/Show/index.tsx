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
            description="Temos uma equipe de profissionais altamente qualificados e experientes. Nós nos esforçamos para criar um ambiente relaxante e acolhedor para nossos clientes, para que eles se sintam mimados e cuidados durante todo o tempo"
            img="/slide2.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperSlideComponent
            title="melhores profissionais"
            description="Nós nos concentramos em entender as necessidades e desejos de nossos clientes, e trabalhamos em estreita colaboração com eles para criar o visual que desejam"
            img="/slide4.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
