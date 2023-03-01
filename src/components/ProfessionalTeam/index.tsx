import Image from "next/image";
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useMemo } from "react";
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
        <p className="max-w-[500px] mx-auto my-10 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid molestiae harum tempore debitis, dignissimos cumque magni? Nobis inventore porro provident in cum</p>
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
            <h3>LUIZA ANDRADE</h3>
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
            <h3>JOANA ALMEIDA</h3>
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
            <h3>JULIA LINDONNETI</h3>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
