import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";

export default function contact() {

  function submit(event: any){
    event.preventDefault()
  }

  return (
    <>
    <Head>
      <title>Contato</title>
    </Head>
   <div className="flex min-h-screen">
    <Link 
    href={'/'}
    className="fixed top-4 left-10 p-2 transition-all"
    >
      <ArrowLeft size={32} color="#fbbaa1" weight="light" />
    </Link>

    <div className="flex-1 flex flex-col justify-center md:items-start p-10">
      <h2 className="self-center mb-5">
        Marcar sessão
      </h2>
      <form className="flex flex-col mx-auto" onSubmit={submit}>

        <div className="container-input"> 
          <label htmlFor="name">nome</label>
          <input type="text" id="name" required/>
        </div>

        <div className="container-input">
          <label htmlFor="email">email</label>
          <input type="email" name="" id="email" required/>
        </div>
        
        <div className="container-input">
          <label htmlFor="tel">whatsapp</label>
          <input type="tel" name="" id="tel" />
        </div>

        <div className="container-input">
          <label htmlFor="service">Serviço</label>
          <select name="" id="service" required>
            <option value="classica">Extensão clássica</option>
            <option value="2d">Volume 2D</option>
            <option value="3d">Volume 3D</option>
            <option value="hollywood">Hollywood volume</option>
          </select>
        </div>

        <button 
        type="submit"
        className="bg-bg-primary hover:bg-contact-section transition-all duration-300 text-white mt-8"
        >Marcar</button>
      </form>
    </div>

    <div className="flex-1 relative hidden md:block">
      <Image 
      src={'/contact/img.jpg'}
      alt=""
      fill
      />
    </div>
   </div>
    </>
 )
}
