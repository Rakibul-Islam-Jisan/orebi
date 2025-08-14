import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";

const NextArrow = (props) => {
     const { className, onClick } = props;
  return (
    <>
        <div
      className={'bg-[#111] w-[60px] h-[60px] rounded-full flex justify-center items-center text-white absolute top-[40%] translate-y-[-50%] right-2'}
      
      onClick={onClick}
    ><MdOutlineNavigateNext/></div>
    </>
  )
}

export default NextArrow
