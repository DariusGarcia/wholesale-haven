import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wholesale Haven</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
