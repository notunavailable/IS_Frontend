import { SessionProvider } from "next-auth/react"
import { useState } from "react";

import Header from '../components/management/Header'
import Footer from '../components/management/Footer'
import Message from '../components/Message'

import '../styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [messages, setMessages] = useState(null);
  const [messagePointer, setMessagePointer] = useState(-1)

  return (
    <SessionProvider session={session}>
      {messages != null || messagePointer >= 0 ? <Message message={messages[messagePointer]} messagePointer = {messagePointer} setMessagePointer = {setMessagePointer}/> : null}
      <Header />
      <Component {...pageProps} setMessages={setMessages} setMessagePointer = {setMessagePointer}/>
      <Footer />
    </SessionProvider>
  )
}