import '@/styles/globals.css'
import Navbar from './component/Navbar'
import {SessionProvider} from 'next-auth/react'

export default function App({ Component, pageProps, session }) {
  return (
  <>
  <SessionProvider session={session}>
  <Navbar/>
  <Component {...pageProps} />
  </SessionProvider>
  </>
  )
}
