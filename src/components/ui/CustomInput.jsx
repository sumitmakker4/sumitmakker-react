import React from 'react'

export default function CustomInput({ label, inputClassName, boxType, type, value, onChange }) {
  return (
    <div className="relative w-full">
      {
        boxType === 'textarea' ?
          <textarea
            value={value}
            onChange={onChange}
            placeholder=" "
            className={`peer px-4 pb-2.5 pt-4 text-sm md:text-base w-full rounded-lg border border-[#C8C8C8] appearance-none focus:border-[#F8F7F9] focus:outline-none focus:ring-0 ${inputClassName}`}
            rows={5}
          ></textarea>
          :
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder=" "
            className={`peer px-4 pb-2.5 pt-4 text-sm md:text-base w-full rounded-lg border border-[#C8C8C8] appearance-none focus:border-[#F8F7F9] focus:outline-none focus:ring-0 ${inputClassName}`}
          />
      }
      <label className={`absolute left-3 px-1 text-[#B0B0B0] transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-[15px] peer-focus:bg-[#282828] peer-focus:text-[#F8F7F9] peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-[15px] peer-[&:not(:placeholder-shown)]:bg-[#282828]`}>
        {label}
      </label>
    </div>
  )
}
