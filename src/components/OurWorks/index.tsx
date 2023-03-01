import Image from "next/image";

export function OurWorks() {

  return (
   <section className="bg-bg-primary pb-28 px-3">
    <h2 className="text-contrast mb-10 text-center">Nosso trabalho</h2>

    <div className="grid grid-rows-[7] grid-cols-2 xs:grid-rows-5 xs:grid-cols-3 w-full h-[900px] lg:h-[1500px] gap-4 sm:gap-5">

      <div className="relative row-span-2 xs:row-span-1">
        <Image src='/weDo/img1.jpg' alt={''} fill blurDataURL="/weDo/img1.jpg" placeholder="blur"/>
      </div>

      <div className="relative row-span-2 col-span-2 xs:col-span-1">
        <Image src='/weDo/img2.jpg' alt={''} fill />
      </div>

      <div className="relative row-span-3 xs:row-span-2 sm:row-span-1">
        <Image src='/weDo/img7.jpg' alt={''} fill />
      </div>

      <div className="relative col-span-2 xs:col-span-1">
        <Image src='/weDo/img4.jpg' alt={''} fill />
      </div>

      <div className="relative col-start-1 row-start-1 sm:col-span-2 row-span-2 col-span-3">
        <Image src='/weDo/img5.jpg' alt={''} fill />
      </div>


      <div className="relative row-span-2 col-span-2">
        <Image src='/weDo/img6.jpg' alt={''} fill />
      </div>

      <div className="relative col-span-3 xs:col-span-1 row-span-2">
        <Image src='/weDo/img3.jpg' alt={''} fill />
      </div>
    </div>
   </section>
 )
}
