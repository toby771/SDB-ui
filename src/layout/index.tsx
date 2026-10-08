import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import Banner from '@/components/banner'

export default function Layout() {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Banner />
      <Footer />
    </>
  )
}
