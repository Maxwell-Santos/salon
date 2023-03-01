import Head from 'next/head'
import { Header } from '@/components/Header'
import { Show } from '@/components/Show'
import { About } from '@/components/About'
import { WorkingHours } from '@/components/WorkingHours'
import { Feedbacks } from '@/components/Feedbacks'
import { Footer } from '@/components/Footer'
import icon from '../assets/arrow-top.svg'
import Image from 'next/image'
import { MostPopular } from '@/components/MostPopular'
import { OurWorks } from '@/components/OurWorks'
import { ProfessionalTeam } from '@/components/ProfessionalTeam'

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
        <Header />
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
