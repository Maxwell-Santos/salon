import Image from "next/image"
import { useEffect, useState } from "react"

export function WorkingHours() {
  
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

  return (
    <section className="flex items-center mb-24">

      <div className="hidden md:block flex-1 text-center">
        <div className="relative md:h-[100vh] max-h-[800px] max-w-[500px]">
          <Image src="/img-horas-trabalhadas.jpg" alt="img" fill />
        </div>
      </div>

      <div className="flex-1 max-w-[550px]">
        <h2 className="text-title">
          {working ? 'estamos abertos!' : 'fechados no momento...'}
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
          className="bg-bg-primary hover:bg-button-primary text-contrast transition-all duration-300 mt-4">
          marcar
        </button>
      </div>
    </section>
  )
}
