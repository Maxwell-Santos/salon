import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/pagination"

export function Feedbacks() {
  return (
    <section className="text-center py-28">
      <h2 className="mb-10">Feedbacks</h2>

      <div className="swiper-feedbacks max-w-[600px] mx-auto text-primary/70">
        <Swiper
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <p>
            &ldquo;Adorei meu corte de cabelo! O profissional foi muito atencioso e
              me ajudou a escolher o estilo perfeito para mim.&rdquo;
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <p>
              &ldquo;Meu tratamento facial foi maravilhoso! A esteticista utilizou
              produtos naturais e me deixou com a pele radiante.&rdquo;
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <p>
              &ldquo;Meu cabelo estava muito danificado e sem vida, mas depois do
              tratamento capilar que fiz no salão, ele ficou incrível! Recomendo
              muito.&rdquo;
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              &ldquo;Fui para o salão para fazer uma maquiagem para uma festa e fiquei
              muito satisfeita com o resultado! A maquiadora foi muito
              habilidosa e paciente.&rdquo;
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              &ldquo;O salão é lindo e confortável, e os serviços são de primeira
              qualidade. Sempre saio de lá me sentindo renovada e confiante.&rdquo;
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
