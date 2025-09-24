import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

export default function DefaultLayout() {

  const location = useLocation();

  return (
    <>
      <Navbar/>
      <div className={`xl:max-w-[80%] 2xl:max-w-[60%] px-4 md:px-6 lg:px-10 xl:px-0 mx-auto pb-8 ${location.pathname == '/' ? 'mt-12 md:mt-20' : 'mt-26 md:mt-30'} lg:mt-40`}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
