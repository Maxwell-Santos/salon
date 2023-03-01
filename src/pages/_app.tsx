import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Dancing_Script, Lato } from 'next/font/google'
import "swiper/css";
const lato = Lato({subsets: ['latin'], weight: ['300', '400', '700', '900'] })
const cursive = Dancing_Script({subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
     <style jsx global>
        {`
          :root {
            --lato-font: ${lato.style.fontFamily};
            --cursive-font: ${cursive.style.fontFamily};
          }
        `}
      </style>

        <Component {...pageProps} />
    </>
  )
}
