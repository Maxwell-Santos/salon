import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
import "swiper/css";
const lato = Lato({subsets: ['latin'], weight: ['300', '400', '700', '900'] })

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
     <style jsx global>
        {`
          :root {
            --lato-font: ${lato.style.fontFamily};
          }
        `}
      </style>

        <Component {...pageProps} />
    </>
  )
}
