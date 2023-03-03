import Image from "next/image";
import { ButtonContact } from "../ButtonContact";

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

        <ButtonContact show text="marcar sessão"/>
      </div>
    </div>
  )
}
