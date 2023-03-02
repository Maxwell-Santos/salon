import Image from "next/image";

type SwiperSlideComponentProps = {
  img: string,
  description: string,
  title: string,
}
export function SwiperSlideComponent({ img, description, title }: SwiperSlideComponentProps) {

  return (
    <div className="relative w-full h-[55vh] sm:h-[100vh] max-h-[700px]">
      <Image src={img} alt={"slide"} fill priority />
      <div className="slide-content">
        <h2 className="drop-shadow-sm font-primary uppercase">{title}</h2>
        <p>{description}</p>

        <button
        className="w-full md:w-fit p-4 bg-button-primary border border-[#fbbaa1] hover:bg-transparent hover:border-white mt-5 text-base uppercase tracking-wide transition-all"
        >Marcar sessão</button>
      </div>
    </div>
  )
}
