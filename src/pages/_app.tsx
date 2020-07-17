import { AppProps } from 'next/app'
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <ZeitProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ZeitProvider>
  )
}

export default App
