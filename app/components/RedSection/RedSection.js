import React from 'react'

export default function RedSection() {
  return (
    <div>
      <div className="grid grid-cols-2 w-full bg-red-600 py-20">
        <div className="w-full flex flex-col justify-center items-center gap-10">
            <h2 className='text-3xl font-graphic font-bold text-white'>What can we help you achieve?</h2>
            <button className='py-3 px-6 bg-transparent border-1 border-white text-white font-graphic font-semibold text-sm'>LET'S GET TO WORK</button>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10">
            <h2 className='text-3xl font-graphic font-bold text-white'>What can we help you achieve?</h2>
            <button className='py-3 px-6 bg-transparent border-1 border-white text-white font-graphic font-semibold text-sm'>LET'S GET TO WORK</button>
        </div>
      </div>
    </div>
  )
}
