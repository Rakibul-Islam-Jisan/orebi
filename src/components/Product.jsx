import React from 'react'
import Container from './Container'

import Flex from './Flex'
import Badge from './Badge'
import { IoGitCompareSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Product = ({productImg}) => {
  return (
    <div className='py-6 mx-4'>
      <Container>
        <div className=' relative  group overflow-hidden main  shadow-[10px_10px_62px_-21px_rgba(66,68,90,1)]'>
          <Badge badgeText={"New"} />
          <img className='' src={productImg}></img>
          <div className='w-full h-[0px] pr-5 opacity-0 group-hover:h-[150px] group-hover:opacity-100 transition-all duration-500 ease-in-out 
 overlay bg-white/70 absolute bottom-[50px]'>


            <div className='flex flex-col  gap-3 pt-5 items-end'>
              <Link to="/">
                <Flex className={'gap-2'}>
                <h3>Compare</h3>
                <IoGitCompareSharp />
              </Flex>
              </Link>
              
              <Link to="/">
                <Flex className={'gap-2'}>
                <h3>Add to Cart</h3>
                <FaCartArrowDown />
              </Flex>
              </Link>
              
              <Link to="/">
                <Flex className={'gap-2'}>
                <h3>Add to WishLisht</h3>
                <FaHeart />
              </Flex>
              </Link>
            </div>

          </div>
          <Flex className={'justify-between px-3 pt-5 pb-5'}>
            <h3>Product Name</h3>
            <h3>Price</h3>
          </Flex>
        </div>
      </Container>
    </div>
  )
}

export default Product
