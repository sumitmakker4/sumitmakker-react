import React from 'react'

export default function Project({item}) {
  return (
    <a href={item.link} target='_blank' className="relative rounded-lg overflow-hidden group">
        <img className="w-full h-full object-cover" src={item.thumbnail} />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <i className='text-xl pi pi-globe me-2' style={{WebkitTextStrokeWidth : '0.7px'}}></i>
            <span className="text-2xl font-bold uppercase">
            {item.title}
            </span>
        </div>
    </a>
  )
}
