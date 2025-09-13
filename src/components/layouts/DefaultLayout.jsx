import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

export default function DefaultLayout() {
  return (
    <>
      <Navbar/>
      <div className='max-w-[60%] mx-auto pb-8 mt-40'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
