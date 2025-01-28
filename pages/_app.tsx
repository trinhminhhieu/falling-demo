import './global.css'

import type { AppProps } from 'next/app'

import React from 'react'

import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Falling Demo</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
