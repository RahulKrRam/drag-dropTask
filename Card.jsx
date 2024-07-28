import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
function Card({ data,reference}) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-5 overflow-hidden'>
            <FaRegFileAlt />
            {/* icon,text,footer,data,tag */}
            <p className='reletive text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between px-8 py-3 mb-5'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoMdClose /> : <HiOutlineDownload size=".7em" color='#fff' />}
                    </span>

                </div>
                {
                    data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                    )
                }

            </div>
        </motion.div>
    )
}

export default Card