import Head from 'next/head'
import { Show } from 'src/components/Show'
import { About } from 'src/components/About'
import { WorkingHours } from 'src/components/WorkingHours'
import { Feedbacks } from 'src/components/Feedbacks'
import { Footer } from 'src/components/Footer'
import icon from '../assets/arrow-top.svg'
import Image from 'next/image'
import { MostPopular } from 'src/components/MostPopular'
import { OurWorks } from 'src/components/OurWorks'
import { ProfessionalTeam } from 'src/components/ProfessionalTeam'

export default function Home() {
  return (
    <>
      <Head>
        <title>Salão Conceito</title>
        <meta name="author" content="Maxwell Alves dos Santos" />
        <meta name="description" content="Portfólio do salão de beleza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className='relative'>
        <Show />
      </div>

      <About />
      <div className='mt-28'>

        <WorkingHours />
        <OurWorks />
        <MostPopular />
        <ProfessionalTeam />
        <Feedbacks />
        <Footer />
      </div>

      <button className='fixed w-[40px] h-[45px] right-6 bottom-6 bg-button-primary p-3' onClick={() => scrollTo(0, 0)}>
        <Image
          src={icon}
          alt="icon"
          width={2}
          className="filter invert"
        />
      </button>
    </>
  )
}
