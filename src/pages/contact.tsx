import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Envelope, UserCircle, WhatsappLogo } from "phosphor-react";

export default function contact() {

  function submit(event: any){
    event.preventDefault()
  }

  const handlePhone = (event: any) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value: string) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  return (
    <>
    <Head>
      <title>Contato</title>
    </Head>
   <div className="flex min-h-screen">
    <Link 
    href={'/'}
    className="fixed top-4 left-5 sm:left-10 transition-all"
    >
      <ArrowLeft size={32} color="#fbbaa1" weight="light" />
    </Link>

    <div className="flex-1 flex flex-col justify-center md:items-start px-5 sm:p-10 max-[640px]:mt-10">
      <h2 className="self-center mb-5">
        Marcar sessão
      </h2>
      <form className="flex flex-col mx-auto max-[640px]:w-full" onSubmit={submit}>

        <div className="container-input"> 
          <label htmlFor="name">nome</label>
          <div className="relative">
            <UserCircle size={26} weight="light" className="icon"/>
            <input type="text" id="name" name="name" required className="pl-10"/>
          </div>
        </div>

        <div className="container-input">
          <label htmlFor="email">email</label>
          <div className="relative">
            <Envelope size={26} weight="light" className="icon" />
            <input type="email" name="email" id="email" required className="pl-10"/>
          </div>
        </div>
        
        <div className="container-input">
          <label htmlFor="tel">whatsapp</label>

          <div className="relative">
            <WhatsappLogo size={26} weight="light" className="icon"/>
            <input type="tel" name="whatts" id="tel" onKeyUp={handlePhone} maxLength={15} className="pl-10"/>
          </div>
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
