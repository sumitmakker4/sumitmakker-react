import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

export default function DefaultLayout() {
  return (
    <>
      <div className='max-w-[70%] mx-auto py-8'>
        <Navbar/>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
