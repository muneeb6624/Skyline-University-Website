import React from 'react'
import logo from '../assets/logo.svg'
import { Button } from './ui/button'
import footericon from '../icons/footericons.svg'
export const Footer = () => {
    return (
        <div className='flex flex-col justify-center align-middle'>
            <div className=' grid border-b-2 border-b-gray grid-cols-3 gap-x-5 lg:px-36 px-5 py-16'>

                <div className=' flex flex-col'>
                    <img className=' w-20 h-20 mb-4' src={logo} />
                    <p className=' max-w-80%'> Skyline  University College The best
                        university in the world located Somewhere </p>
                </div>


                <div>
                    <div className=' grid grid-cols-3 gap-3'>

                        <div>
                            <ul className='text-gray-600'>
                                <li className='font-bold mb-2'>UNIVERSITY</li>
                                <li>STUDENTS</li>
                                <li>EVENTS</li>
                                <li>GALLERY</li>
                                <li>NEWS</li>
                            </ul>
                        </div><div>
                            <ul className='text-gray-600'>
                                <li className='font-bold mb-2'>SKYLINE</li>
                                <li>CONTACTS</li>
                                <li>CAREER</li>
                                <li>ABOUT US</li>
                                <li>APPLY TO JOB</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-gray-600'>
                                <li className='font-bold mb-2'>ACCOUNT</li>
                                <li>PROFILE</li>
                                <li>STORIES</li>
                                <li>PASSWORD</li>
                                <li>DOWNLOADS</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className=' flex flex-col'>
                    <Button className='bg-[#F7CA18] rounded-none text-white mb-4'>SKYLINE ACCOUNT</Button>
                    <img src={footericon} />
                </div>

            </div>

            <p className=' mx-auto mt-5 mb-5'> ©2022 Skyline University College </p>
        </div>
    )
}
