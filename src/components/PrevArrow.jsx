import React from 'react'
import { GrFormPrevious } from "react-icons/gr";

const PrevArrow = (props) => {
    const { className, onClick } = props;
  return (
    <>
        <div
      className={'bg-[#111] absolute top-[40%] translate-y-[-50%] w-[60px] h-[60px] flex items-center justify-center rounded-full text-white shadow-2xl z-20 left-2 '}
      
      onClick={onClick}
    > <GrFormPrevious/> </div>
    </>
  )
}

export default PrevArrow
