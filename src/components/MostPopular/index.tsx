import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ButtonContact } from '../ButtonContact'

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
    <section className="flex gap-8 py-32 max-[680px]:flex-col overflow-x-hidden">
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
              <span>Extensão clássica</span>
              <span>R$ 25</span>
            </div>
            <div className="container-info">
              <span className="block">Extensão simples com cílios</span>
              <span className="block text-sm mt-2">Duração média 40m à 1h</span>
            </div>
          </div>
          <div className="container">
            <div className="container-header">
              <span>Volume 3d</span>
              <span>R$ 35</span>
            </div>
            <div className="container-info">
              <span className="block">Segunda melhor extensão de cílios, com volume ainda maior e maior durabilidade</span>
              <span className="block text-sm mt-2">Duração média 1h30m à 2h</span>
            </div>
          </div>
          <div className="container">
            <div className="container-header">
              <span>hollywood volume</span>
              <span>R$ 40</span>
            </div>
            <div className="container-info">
              <span className="block">Volume avaliado por especialistas a melhor harmonia do seu rosto, com manutenção quando necessário</span>
              <span className="block text-sm mt-2">Duração média 2h</span>
            </div>
          </div>
          <div className="container">
            <div className="container-header">
              <span>Escovação de cabelo</span>
              <span>R$ 30</span>
            </div>
            <div className="container-info">
              <span className="block">Escovação de cabelo básica para te deixar perfeita.</span>
              <span className="block text-sm mt-2">Duração média 35min</span>
            </div>
          </div>
          <div className="container">
            <div className="container-header">
              <span>Corte moderno</span>
              <span>R$ 40</span>
            </div>
            <div className="container-info">
              <span className="block">Cortes de cabelos com profissionais especializados</span>
              <span className="block text-sm mt-2">Duração média 40min</span>
            </div>
          </div>
          <div className="container">
            <div className="container-header">
              <span>Limpeza de pele</span>
              <span>R$ 70</span>
            </div>
            <div className="container-info">
              <span className="block">Limpeza total do rosto com tratamento de acne e óleos para a maciez</span>
              <span className="block text-sm mt-2">Duração média 1h30min</span>
            </div>
          </div>

        <ButtonContact text="marcar"/>
      </motion.div>
    </section>
  )
}
