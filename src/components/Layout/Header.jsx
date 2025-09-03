import React, {  useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import logo from "../../assets/logo.png"
import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaUser, FaSortDown, FaShoppingCart  } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
    const [open , setOpen] = useState(false)
    const [openTwo , setOpenTwo] = useState(false)




    
    
  return (
    <>
       <div>
         <div  className='py-8'>
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
                    <div   className='flex gap-1 relative items-center'>
                    <div onClick={()=>setOpen(!open)} className='flex cursor-pointer gap-1 items-center' >
                        <HiBars3CenterLeft />
                    <h3 >Shop by Category</h3>
                    </div>

                    {
                        open && (
                            <ul className='absolute menu z-50 w-[200px] mt-4 left-5 rounded-tr-4xl rounded-br-4xl bg-white shadow-[10px_10px_62px_-21px_rgba(66,68,90,1)] top-[100%]'>
                        <Link to="/shop" >
                            <li className='py-2 pl-4 hover:shadow-[10px_10px_80px_-15px_rgba(0,0,0,0.9)] rounded-tr-4xl duration-500 linear hover:font-black'>Beauty</li>
                        </Link>
                        <Link to="/shop">
                            <li className='py-2 pl-4 hover:shadow-[10px_10px_80px_-15px_rgba(0,0,0,0.9)] duration-500 linear hover:font-black'>Fragrance</li>
                        </Link>
                        <Link to="/shop">
                            <li className='py-2 pl-4 hover:shadow-[10px_10px_80px_-15px_rgba(0,0,0,0.9)] duration-500 linear hover:font-black'>Groceries</li>
                        </Link>
                        <Link to="/shop">
                            <li className='py-2 pl-4 hover:shadow-[10px_10px_80px_-15px_rgba(0,0,0,0.9)] rounded-br-4xl duration-500 linear hover:font-black'>Furniture</li>
                        </Link>
                    </ul>
                        )
                    }
                    </div>

                    <div className='w-[500px] relative'>
                        <input placeholder='Search Products' className='w-full py-[16px] px-[20px] bg-white border-none outline-none '></input>
                        <CiSearch className='absolute top-1/2 -translate-y-1/2 right-[20px]' />
                    </div>
                    <div className='flex relative items-center gap-5'>
                        <div onClick={()=>setOpenTwo(!openTwo)} className='flex items-center gap-1'>
                            <FaUser />
                            <FaSortDown />
                        </div>
                        
                        {
                            openTwo && (
                                <ul className='absolute menu w-[200px] mt-4 right-5 rounded-tl-4xl rounded-br-4xl bg-white shadow-[10px_10px_62px_-21px_rgba(66,68,90,1)] top-[100%]'>
                        <Link to="/shop" >
                            <li className='py-2 pl-4 hover:shadow-[10px_10px_80px_-15px_rgba(0,0,0,0.9)] rounded-tl-4xl duration-500 linear hover:font-black'>Beauty</li>
                        </Link>
                        <Link to="/shop">
                            <li className='py-2 pl-4 hover:shadow-[10px_10px_80px_-15px_rgba(0,0,0,0.9)] rounded-br-4xl duration-500 linear hover:font-black'>Fragrance</li>
                        </Link>
                        
                    </ul>
                            )
                        }

                        <FaShoppingCart />
                    </div>
                </Flex>
            </Container>
        </div>
       </div>
    </>
  )
}

export default Header
