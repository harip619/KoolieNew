import React from 'react'
import Image from 'next/image'
// import {IconsName} from "react-icons/hi2"
function CarListItem({car,distance}) {
  return (
    <div>
      <div className='flex items-center justify-between mt-5 hover'>
        <div className='flex w-full items-center gap-5'>
            <Image src={car.image} width={100} height={100}></Image>
            <div className="flex justify-between w-full">
            <div>
                <h2 className='font-semibold text-[18px]'>{car.name}
                <span>
                    {/* <HiUser/> */}
                </span>
                </h2>
                <p>{car.desc}</p>
            </div>
            <h2 className='tex-[18px] font-semibold'>₹{Math.round(car.amount*distance)}</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CarListItem
