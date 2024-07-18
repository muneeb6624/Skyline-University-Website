import React from 'react'
import newsimg from '../assets/newspic.svg'

export const NewsCard = () => {
    return (
        <div className=' flex '>
            <img src={newsimg} className=' mr-3'/>
            <div className=' flex-col font-[Montserrat]'>
                <h4 className=' text-sm font-normal'> Objectives SHould be ... </h4>
                <p className=' text-xs font-normal'> Lorem ipsum fjjd jdfjd jfdj </p>
            </div>
        </div>
    )
}
