import Image from "next/image"

export function About() {

  const cards = [
    {
      img: '/topics/1.jpg',
      text: 'Extensão de silhos',
    },
    {
      img: '/topics/2.jpg',
      text: 'Laminação de silhos',
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

        <div className="text-center flex-1 max-w-[500px] w-full">
          <h2 className="text-contrast">O que fazemos</h2>
          <p className="py-7 text-base sm:text-lg text-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quas maiores impedit fugit nesciunt, eos laudantium. Voluptatem consequatur, expedita dicta neque perferendis rerum non illum ab incidunt voluptates, dolorem culpa.
          </p>
          <button className="w-full sm:w-fit hover:bg-button-primary hover:border-[#fbbaa1] border border-white transition-all">Veja mais</button>
        </div>

      </div>

      <div className="flex w-full justify-center gap-5 translate-y-24 flex-wrap">
        {
          cards.map(item => (
            <div 
            key={item.text} 
            className={`relative h-[400px] w-[400px] md:w-[300px] flex items-end group cursor-pointer`}
            >

              <div className="relative z-10 ml-4 mb-20 group-hover:-translate-y-4 transition-all duration-500">
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
