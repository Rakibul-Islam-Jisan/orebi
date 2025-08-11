import React from 'react'
import Container from './Container'
import productOne from "../assets/productOne.png"
import Flex from './Flex'
import Badge from './Badge'
import { IoGitCompareSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";

const Product = () => {
  return (
    <div className='py-6'>
      <Container>
        <div className='w-1/4 relative group overflow-hidden main  h-[376px]'>
          <Badge badgeText={"New"} />
          <img src={productOne}></img>
          <div className='w-full h-[0px] opacity-0 group-hover:h-[180px] group-hover:opacity-100 transition-all duration-500 ease-in-out 
 overlay bg-white/70 absolute bottom-[80px]'>


            <div className='flex flex-col  gap-3 pt-5 items-end'>
              <Flex className={'gap-2'}>
                <h3>Compare</h3>
                <IoGitCompareSharp />
              </Flex>
              <Flex className={'gap-2'}>
                <h3>Add to Cart</h3>
                <FaCartArrowDown />
              </Flex>
              <Flex className={'gap-2'}>
                <h3>View Details</h3>
                <GrOverview />
              </Flex>
              <Flex className={'gap-2'}>
                <h3>Add to WishLisht</h3>
                <FaHeart />
              </Flex>
            </div>

          </div>
          <Flex className={'justify-between pt-3'}>
            <h3>Product Name</h3>
            <h3>Price</h3>
          </Flex>
        </div>
      </Container>
    </div>
  )
}

export default Product
