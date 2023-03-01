import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const imgVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 }},
  hidden: { opacity: 0, y: 100, transition: { duration: 0.7 }}
}
const tableVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 }},
  hidden: { opacity: 0, y: 100, transition: { duration: 0.7 }}
}


export function WorkingHours() {
  const controlImage = useAnimation()
  const controlTable = useAnimation()
  const [ref, inViewAbout] = useInView()

  const [working, setWorking] = useState(false)

  useEffect(() => {
    const date = new Date()
    const day = date.getDay() //0 até 6
    const hours = date.getUTCHours() //0 até 24

    switch (day) {
      case 1: //seg
      case 2: //ter
      case 3: //qua
      case 4: //qui
        if (hours > 9 && hours < 19) setWorking(true)
        else setWorking(false)
        break;

      case 5: //sex
        if (hours > 9 && hours < 17) setWorking(true)
        else setWorking(false)
        break;

      case 6: //sáb
        if (hours > 10 && hours < 17) setWorking(true)
        else setWorking(false)
        break;

      default: //domingo
        setWorking(false)
        break;
    }
  }, [])

  useEffect(() => {
    if (inViewAbout) {
      controlImage.start("visible")
      controlTable.start("visible")
    } else {
      controlImage.start("hidden")
      controlTable.start("hidden")
    }
  }, [controlImage, inViewAbout])


  return (
    <section className="flex items-center mb-24">

      <motion.div
        initial="hidden"
        ref={ref}
        animate={controlImage}
        variants={imgVariant}
        className="hidden md:block flex-1 text-center"

      >
        <div className="relative md:h-[100vh] max-h-[800px] max-w-[500px]">
          <Image src="/img-horas-trabalhadas.jpg" alt="img" fill />
        </div>
      </motion.div>

      <motion.div
       initial="hidden"
       ref={ref}
       animate={controlTable}
       variants={tableVariant}
      className="flex-1 max-w-[550px] text-center sm:text-start"
      >
        <h2 className="text-title">
          {working ? 'Estamos abertos!' : 'Fechados no momento...'}
        </h2>

        <p className="text-lg text-primary/70 mt-5 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab, voluptate deserunt tempore ratione aspernatur officia explicabo fuga distinctio non.</p>

        <table className="table-hours">
          <tbody>
            <tr>
              <td>Segunda - Quinta</td>
              <td>09:00 – 19:00</td>
            </tr>
            <tr>
              <td>Sexta</td>
              <td>09:00 – 17:00</td>
            </tr>
            <tr>
              <td>Sábado</td>
              <td>10:00 – 17:00</td>
            </tr>
            <tr>
              <td>Domingo</td>
              <td>Fechado</td>
            </tr>
          </tbody>
        </table>

        <button
          className="w-full sm:w-fit bg-bg-primary hover:bg-button-primary text-contrast transition-all duration-300 mt-4">
          marcar
        </button>
      </motion.div>
    </section>
  )
}
