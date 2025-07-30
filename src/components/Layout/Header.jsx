import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import logo from "../../assets/logo.png"
import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaUser, FaSortDown, FaShoppingCart  } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
        <div className='py-8'>
            <Container>
            <Flex className={"justify-between"}>
                <div className='w-[40%]'>
                    <Link to = "/"><img src={logo}></img></Link>
                </div>
                <div className='w-[60%]'>
                    <ul className='flex  gap-5'>
                        <li className='text-[15px] cursor-pointer font-semibold text-black'>
                            <Link to= "/">Home</Link>
                        </li>
                        <li className='text-[15px] cursor-pointer font-normal hover:font-semibold hover:text-black duration-500 linear text-[#767676]'>
                            <Link to = "/shop">Shop</Link>
                        </li>
                        <li className='text-[15px] cursor-pointer font-normal text-[#767676] hover:font-semibold hover:text-black duration-500 linear'>
                            <Link to= "/about">About</Link>
                        </li>
                        <li className='text-[15px] cursor-pointer font-normal text-[#767676] hover:font-semibold hover:text-black duration-500 linear'>
                            <Link to= "/contact">Contact</Link>
                        </li>
                        <li className='text-[15px] cursor-pointer font-normal text-[#767676] hover:font-semibold hover:text-black duration-500 linear'>Journal</li>
                    </ul>
                </div>
            </Flex>
        </Container>
        </div>

        <div className='py-8 bg-[#F5F5F3]'>
            <Container>
                <Flex className={"justify-between"}>
                    <div className='flex gap-1 items-center'>
                    <HiBars3CenterLeft />
                    <h3>Shop by Category</h3>
                    </div>
                    <div className='w-[500px] relative'>
                        <input placeholder='Search Products' className='w-full py-[16px] px-[20px] bg-white border-none outline-none '></input>
                        <CiSearch className='absolute top-1/2 -translate-y-1/2 right-[20px]' />
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-1'>
                            <FaUser />
                            <FaSortDown />
                        </div>
                        <FaShoppingCart />
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Header
