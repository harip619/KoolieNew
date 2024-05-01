import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { IoPersonCircleSharp } from "react-icons/io5";

function Header() {
    const headerMenu=[
        {
            id:1,
            name:'Profile',
            icon:'/profile.png'
        },
        {
            id:2,
            name:'Package',
            icon:'/download (1).jpg'
        }
    ]

    return (
        <div className='p-5 pb-4 pl-10 border-b-[4px] border-gray-200 flex items-center justify-between bg-red-600'>
            <div className='flex gap-24 items-center '>
                <Image src='/logo.png' height={70} width={70} alt='picture not' />
                <div className='flex gap-6 items-center'>
                    {headerMenu.map((item) => (
                        <button key={item.id} className='flex gap-2 items-center bg-transparent border-none cursor-pointer hover:bg-gray-200 rounded-md p-2' >
                            <Image src={item.icon} width={17} height={17} />
                            <h2 className='text-[14px] font-medium'>{item.name}</h2>
                        </button>
                    ))}
                </div>
            </div>
            <UserButton />
        </div>
    )
}

export default Header
