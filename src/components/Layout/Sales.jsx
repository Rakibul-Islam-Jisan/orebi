import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import saleOne from "../../assets/saleOne.webp"
import saleTwo from "../../assets/saleTwo.webp"
import saleThree from "../../assets/saleThree.webp"
const Sales = () => {
  return (
    <>
        <div className='py-10'>
            <Container>
                <Flex className={'gap-6'}>
                    <div>
                        <img src={saleOne}></img>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img src={saleTwo}></img>
                        <img src={saleThree}></img>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Sales
