import React from 'react'
import Container from "../Container"
import Flex from "../Flex"
import logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <div className='py-10 bg-[#F5F5F3]'>
      <Container>
        <Flex className={'justify-between'}>
          <div>
            <img src={logo}></img>
            <h3 className='font-semibold text-[25px] pt-3'>More about Orebi Shop</h3>
            <p className='font-normal  '>Lorem ipsum dolor. Enim sint ab ullam, numquam nesciunt in.</p>
          </div>
          <Flex className={'gap-7'}>
          <div>
            <h3 className='font-semibold text-[19px] pb-4'>Shop</h3>
            <ul>
              <li>Accesories</li>
              <li>Clothes</li>
              <li>Electronics</li>
              <li>Home appliances</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold text-[19px] pb-4'>Your account</h3>
            <ul>
              <li>Profile</li>
              <li>Orders</li>
              <li>Addresses</li>
              <li>Account Details</li>
              <li>Payment Options</li>
            </ul>
          </div>
          </Flex>
          <div>
            <h3 className='font-semibold text-[20px]'>Subscribe to our newsletter.</h3>
            <p>A at pellentesque et mattism elementum.</p>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Footer
