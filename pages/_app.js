import 'swiper/css';
import 'swiper/css/bundle';

import '../styles/globals.css'

import { Source_Code_Pro } from '@next/font/google';

const SCPFont = Source_Code_Pro({ preload: true, subsets: ['cyrillic', 'latin'] })


export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <style jsx global>{`
    * {
      font-family: ${SCPFont.style.fontFamily}
    }
    `}</style>
  </>
}
