import Head from 'next/head'
import { Inter } from '@next/font/google'

import { Typography } from 'antd';

const { Title } = Typography;

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>{"danyatochkaru's showcase"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={inter.className}>
        <Title level={3}>{"danyatochkaru's showcase"}</Title>
      </main>
    </>
  )
}
