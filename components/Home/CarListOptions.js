import { CarListData } from '@/utils/CarListData'
import React, { useState } from 'react'
import CarListItem from './CarListItem'

function CarListOptions({distance}) {
   const [activeIndex,setActiveIndex]=useState();
  return (
    <div className='mt-5 p-5 overflow-auto h-[250px]'>
      <h2 className='text-[22px] font-bold'>Recommended</h2>
      {CarListData.map((item,index)=>(
        <div className={`cursor-pointer p-3 rounded-md border  ${activeIndex==index?'border-[2px]':null}`} onClick={()=>setActiveIndex(index)}>
            <CarListItem car={item} distance={distance}/>
        </div>
      ))}
    </div>
  )
}

export default CarListOptions
    