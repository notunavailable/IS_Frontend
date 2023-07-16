import { SessionProvider } from "next-auth/react"

import Header from '../components/management/Header'
import Footer from '../components/management/Footer'

import '../styles/globals.css'

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps}/>
      <Footer />
    </SessionProvider>
  )
}