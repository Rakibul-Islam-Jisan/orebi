import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa6";
import { FaUndoAlt } from "react-icons/fa";

const Terms = () => {
  return (
    <>
        <div className='py-9'>
            <Container>
                <Flex className={'justify-between'}>
                    <div className='flex items-center gap-2'>
                        <RiNumber2 />
                        <h3>Two Years Waranty</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaTruck />
                        <h3>Free Shiping</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaUndoAlt />
                        <h3>Return Policy in 30 Days</h3>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Terms
