import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

export default function DefaultLayout() {
  return (
    <>
      <Navbar/>
      <div className='xl:max-w-[80%] 2xl:max-w-[60%] px-6 lg:px-10 xl:px-0 mx-auto pb-8 mt-40'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
