import React from 'react'

export const Card = (props) => {
  return (
    <div>

    <div className=' bg-[#F8F8F8] flex py-3 px-6 justify-center'>
    <img 
    src= {props.image}
    alt='Person image'
    className='mr-7 md:w-60 lg:w-auto'
    />

    <div className=' flex flex-col justify-center '>
    <h1 className=' font-[Montserrat] font-bold lg:text-3xl md:text-xl'> {props.heading} </h1>
    <p className=' font-normal font-[Montserrat] lg:text-xl md:text-sm md:overflow-y-auto md:max-h-14
     lg:overscroll-y-none lg:max-h-none '> {props.para} </p>
    </div>
    </div>
    
    </div>
  )
}
