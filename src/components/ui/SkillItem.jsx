import React from 'react'

export default function SkillItem({item}){
    return(
      <div className='bg-[#282828] p-3 rounded-md hover:bg-[#303030] transition-colors duration-500 ease-in-out cursor-pointer'>
        <img src={item.icon} className='w-7 h-7'/>
      </div>
    )
  }
