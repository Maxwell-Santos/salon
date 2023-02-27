import Image from "next/image";

export function ProfessionalTeam() {

  return (
    <section>
  
      <div className="text-center">
        <h2>Nosso time de profissionais</h2>
        <p className="max-w-[500px] mx-auto my-10 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid molestiae harum tempore debitis, dignissimos cumque magni? Nobis inventore porro provident in cum</p>
      </div>

      <div className="flex flex-col sm:flex-row h-[1500px] max-[650px]:max-w-[400px] w-full gap-5 md:h-[90vh] mx-auto">
        <div className="relative flex-1 group overflow-hidden">
          <Image
            src="/team/img1.jpg"
            alt=""
            fill
            className="people-img"
          />

          <div className="people-info">
            <h3>JOANA ALMEIDA</h3>
          </div>

        </div>
        <div className="relative flex-1 group overflow-hidden">
          <Image
            src="/team/img2.jpg"
            alt=""
            fill
            className="people-img"
          />

          <div className="people-info">
            <h3>JOANA ALMEIDA</h3>
          </div>

        </div>
        <div className="relative flex-1 group overflow-hidden">
          <Image
            src="/team/img3.jpg"
            alt=""
            fill
            className="people-img"
          />

          <div className="people-info">
            <h3>JOANA ALMEIDA</h3>
          </div>

        </div>
      </div>
    </section>
  )
}
