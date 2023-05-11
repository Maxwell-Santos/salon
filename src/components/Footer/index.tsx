import {
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  PaperPlaneTilt,
  Phone,
  WhatsappLogo,
  Envelope
} from "phosphor-react"

export function Footer() {
  return (
    <footer className="bg-bg-primary text-contrast pb-0 ">
      <div className="flex flex-col items-center sm:flex-row justify-between border-b border-[#fbbaa148] pb-5">
        <nav className="flex gap-4">
          <a href="http://" className="socialmedia-footer">
            <InstagramLogo size={32} color="#fbbaa1" weight="light" />
          </a>
          <a href="http://" className="socialmedia-footer">
            <WhatsappLogo size={32} color="#fbbaa1" weight="light" />
          </a>
          <a href="http://" className="socialmedia-footer">
            <LinkedinLogo size={32} color="#fbbaa1" weight="light" />
          </a>
        </nav>

        <div className="relative max-w-[350px] flex-1">
         <Envelope weight="thin" size={32}  color="#fbbaa1" className="absolute top-1/2 -translate-y-1/2 left-2"/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 px-4 pl-12 w-full bg-transparent border border-gray-500 mt-3 sm:m-0 appearance-none text-contrast outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly py-10">
        <div className="flex items-center gap-3 sm:flex-col">
          <div className="p-3 rounded-full aspect-square bg-white/10 mb-2">
            <Phone size={32} color="#fbbaa1" weight="fill" />
          </div>

          <span>(11)97776-1749</span>
        </div>

        <div className="flex items-center gap-3 sm:flex-col">
          <div className="p-3 rounded-full aspect-square bg-white/10 mb-2">
            <MapPin size={32} color="#fbbaa1" weight="fill" />
          </div>

          <span>localização</span>
        </div>

        <div className="flex items-center gap-3 sm:flex-col">
          <div className="p-3 rounded-full aspect-square bg-white/10 mb-2">
            <PaperPlaneTilt size={32} color="#fbbaa1" weight="fill" />
          </div>

          <span>exemplo@gmail.com</span>
        </div>
      </div>

      <span className="block text-center py-2 text-sm">
        Copyright &#169;2023{" "}
        <a href="http://maxwellads.vercel.app">Maxwell Santos</a> - Todos os
        direitos reservados.
      </span>
    </footer>
  )
}
