import React from 'react';
import { Layout } from '@/components';
import 'tailwindcss/tailwind.css';
import '../style/global.scss';
export default function App({ Component, pageProps }) {
  return (
  <Layout> 
  <Component {...pageProps} />
  </Layout>
  )
}
