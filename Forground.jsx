import React, { useRef } from 'react'
import Card from './Card'

function Forground() {
    const ref = useRef(null);
    // icon,desc,filesize,closeOrDownload,tagDetails
    const data = [
        {
            desc: "This is the background color of the card will be displayed.",
            filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
        },
        {
            desc: "This is the background color of the card will be displayed.",
            filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "This is the background color of the card will be displayed.",
            filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" }
        }
    ]
    return (
        <div ref={ref} className='fixed z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
            {data.map((item, index) => (
             <Card data={item} reference={ref}/>
    ))}
        </div>
    );
}

export default Forground