import React, { useState } from 'react'
import CustomInput from '../components/ui/CustomInput'

export default function Contact() {

  const [contactInfo,setContactInfo] = useState({name : '',email : '',message : ''})

  return (
    <div className='flex flex-col bg-[#282828] px-8 py-10 rounded-md max-w-[600px] gap-6 mx-auto'>
      <CustomInput label={'Name'} value={contactInfo.name} type={'text'} onChange={(e) => setContactInfo({...contactInfo,name : e.target.value})}/>
      <CustomInput label={'Email'} value={contactInfo.email} type={'email'} onChange={(e) => setContactInfo({...contactInfo,email : e.target.value})}/>
      <CustomInput label={'Message'} value={contactInfo.message} boxType={'textarea'} onChange={(e) => setContactInfo({...contactInfo,message : e.target.value})}/>
    </div>
  )
}
