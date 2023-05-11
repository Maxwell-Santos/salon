import Image from "next/image"
import { ButtonContact } from "../ButtonContact"

export function About() {

  const cards = [
    {
      img: '/topics/1.jpg',
      text: 'Extensão de cílios',
    },
    {
      img: '/topics/2.jpg',
      text: 'Laminação de cílios',
    },
    {
      img: '/topics/3.jpg',
      text: 'Olhos brilhantes',
    },
    {
      img: '/topics/4.jpg',
      text: 'Fácil de remover',
    },
  ]

  return (
    <section className="bg-bg-primary text-contrast p-10">

      <div className="max-w-[1000px] w-full mx-auto flex flex-wrap items-center justify-center gap-10 pt-10 md:pt-20 md:gap-20">

        <div className="text-center flex-1 max-w-[700px] w-full">
          <h2 className="text-contrast">O que fazemos</h2>
          <p className="py-7 mb-3 text-base sm:text-lg text-paragraph">
            Nós trabalhamos com melhora de autoestima, e nisso inclui o melhor tratamento de: cortes de cabelo modernos, limpeza de pele, esfoliação, massagem e hidratação, maquiagem para ocasiões especiais ou para o dia a dia, design de sobrancelhas e cílios e penteados para festas e eventos especiais.

          </p>
          <ButtonContact secondary text="marcar"/>
        </div>

      </div>

      <div className="flex w-full justify-center gap-5 translate-y-24 flex-wrap">
        {
          cards.map(item => (
            <div 
            key={item.text} 
            className={`relative h-[400px] w-[400px] md:w-[300px] flex items-end group cursor-pointer`}
            >

              <div className="relative z-10 pl-4 pb-10 p-2 group-hover:pb-14 transition-all duration-500 bg-gradient-to-t from-[#2c2c2c]">
                <h4 className="uppercase text-4xl font-extrabold">{item.text}</h4>
              </div>
              <Image
                src={item.img}
                alt="Imagem do card"
                className="md:grayscale md:group-hover:grayscale-0 transition-all duration-300"
                fill
                priority
              />
            </div>
          ))
        }
      </div>

    </section>
  )
}
