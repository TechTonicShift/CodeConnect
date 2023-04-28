import React from 'react'
import { Header } from './'
import Head from 'next/head'
const Layout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    </>
  )
}

export default Layout