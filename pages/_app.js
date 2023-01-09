import 'antd/dist/reset.css';
import 'swiper/css';
import 'swiper/css/bundle';

import '../styles/globals.css'

import { Source_Code_Pro } from '@next/font/google';
import { ConfigProvider } from 'antd';


const SCPFont = Source_Code_Pro({ preload: true, subsets: ['cyrillic', 'latin'] })


export default function App({ Component, pageProps }) {
  return <ConfigProvider theme={{
    token: {
      colorBgBase: "#8dafc0",
      colorPrimary: "#222",
      colorLink: "#222",
      colorLinkHover: "#444",
      fontFamily: SCPFont.style.fontFamily,
      fontSize: 16
    }
  }}>
    <Component {...pageProps} />
    <style jsx global>{`
    html {
      font-family: ${SCPFont.style.fontFamily}
    }
    `}</style>
  </ConfigProvider>
}
