import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const titleVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 }},
  hidden: { opacity: 0, y: -100}
}
const pricesVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 }},
  hidden: { opacity: 0, x: 100}
}

export function MostPopular() {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) control.start('visible')
    else control.start('hidden')

  }, [control, inView])

  return (
    <section className="flex gap-8 py-32 max-[680px]:flex-col">
      <motion.div
        className="flex-1"
        ref={ref}
        initial="hidden"
        animate={control}
        variants={titleVariant}
      >
        <h2 className="w-full text-center md:text-end md:max-w-[300px] ml-auto">Serviços Populares</h2>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        variants={pricesVariant}
        className="flex-1 md:flex-[1.5] flex flex-col items-center"
      >
        <div className="container">
          <div className="container-header">
            <span>Extenção clássica</span>
            <span>R$ 25</span>
          </div>
          <div className="container-info">
            <span className="block">1 artificial one is superimposed on each of its eyelashes.</span>
            <span className="block">Duration 1.5-2 hours</span>
          </div>
        </div>

        <div className="container">
          <div className="container-header">
            <span>Volume 2D</span>
            <span>R$ 28</span>
          </div>
          <div className="container-info">
            <span className="block">1 artificial one is superimposed on each of its eyelashes.</span>
            <span className="block">Duration 1.5-2 hours</span>
          </div>
        </div>

        <div className="container">
          <div className="container-header">
            <span>Volume 3d</span>
            <span>R$ 35</span>
          </div>
          <div className="container-info">
            <span className="block">1 artificial one is superimposed on each of its eyelashes.</span>
            <span className="block">Duration 1.5-2 hours</span>
          </div>
        </div>

        <div className="container">
          <div className="container-header">
            <span>hollywood volume</span>
            <span>R$ 40</span>
          </div>
          <div className="container-info">
            <span className="block">1 artificial one is superimposed on each of its eyelashes.</span>
            <span className="block">Duration 1.5-2 hours</span>
          </div>
        </div>
        <button
          className="w-full sm:w-fit bg-bg-primary hover:bg-button-primary text-contrast transition-all duration-300 mt-4 self-start">
          marcar
        </button>
      </motion.div>
    </section>
  )
}
