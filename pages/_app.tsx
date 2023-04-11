import '@resume-app/styles/globals.css'
import type { AppProps } from 'next/app'
import data from '@resume-app/data/utkarsh';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} {...data} />
}
