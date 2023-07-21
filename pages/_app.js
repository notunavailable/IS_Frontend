import { SessionProvider } from "next-auth/react"
import { useState } from "react";

import Header from '../components/management/Header'
import Footer from '../components/management/Footer'
import Message from '../components/Message'

import '../styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [seen, setSeen] = useState(false);
  const [message, setMessage] = useState(null);

  return (
    <SessionProvider session={session}>
      <Message message = {message} setSeen = {setSeen} setMessage = {setMessage} seen = {seen}/>
      <Header />
      <Component {...pageProps} seen={seen} setSeen={setSeen} message={message} setMessage={setMessage} />
      <Footer />
    </SessionProvider>
  )
}