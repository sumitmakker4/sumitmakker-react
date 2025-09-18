import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex flex-col items-center shadow-[0_-8px_16px_rgba(248,247,249,0.08)] pt-12 pb-5 mt-20'>
        <span className='font-bold text-2xl border-b-2 uppercase mb-4'>Get in touch</span>

        <span className='text-[#A9A9A9] mt-4'>Click the below button to reach out to me</span>

        <Link to={'/contact'} className='bg-[#F8F7F9] text-[#1F1F1F] hover:!no-underline font-bold rounded-md text-center uppercase px-3 py-2 my-3'>Contact me</Link>

        <span className='text-[#808080] mt-5'>Copyright © Sumit Makker 2025</span>
    </div>
  )
}
