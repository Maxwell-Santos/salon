import Image from "next/image";
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const variant1 = {
  visible: { opacity: 1, y: 0, transition: { duration: .6 } },
  hidden: { opacity: 0, y: 100, transition: {delay: .5}},
}
const variant2 = {
  visible: { opacity: 1, y: 0, transition: { duration: .7 } },
  hidden: { opacity: 0, y: 100, transition: {delay: .5}},
}
const variant3 = {
  visible: { opacity: 1, y: 0, transition: { duration: .8} },
  hidden: { opacity: 0, y: 100, transition: {delay: .5}},
}

export function ProfessionalTeam() {
  const [ref, inView] = useInView()
  const control = useAnimation()

  useEffect(() => {
    inView ? control.start('visible') : control.start('hidden')
  }, [inView])

  return (
    <section>

      <div className="text-center">
        <h2>Nosso time de profissionais</h2>
        <p className="max-w-[700px] mx-auto my-10 text-lg text-primary/70">Nossos profissionais são altamente qualificados e experientes na área de beleza e cuidados pessoais. Eles estão sempre atualizados sobre as últimas tendências e técnicas, e trabalham com produtos de alta qualidade para garantir que nossos clientes recebam os melhores serviços possíveis</p>
      </div>

      <div ref={ref} className="flex flex-col sm:flex-row h-[1500px] max-[650px]:max-w-[400px] w-full gap-5 md:h-[90vh] mx-auto">

        <motion.div
          className="relative flex-1 group overflow-hidden"
          animate={control}
          variants={variant1}
          initial="hidden"
        >
          <Image
            src="/team/img1.jpg"
            alt=""
            fill
            className="people-img"
          />

          <div className="people-info">
            <h3>Luiza Andrade</h3>
          </div>

        </motion.div>

        <motion.div
          className="relative flex-1 group overflow-hidden"
          animate={control}
          variants={variant2}
          initial="hidden"
        >
          <Image
            src="/team/img2.jpg"
            alt=""
            fill
            className="people-img"
          />

          <div className="people-info">
            <h3>Joana Almeida</h3>
          </div>

        </motion.div>

        <motion.div
          className="relative flex-1 group overflow-hidden"
          animate={control}
          variants={variant3}
          initial="hidden"
        >
          <Image
            src="/team/img3.jpg"
            alt=""
            fill
            className="people-img"
          />

          <div className="people-info">
            <h3>Julia Lindonneti</h3>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
