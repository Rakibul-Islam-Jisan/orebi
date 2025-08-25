import React from 'react'
import Header from '../Layout/Header'
import Badge from '../Badge'
import Container from '../Container'
import Product from '../Product'
import Banner from '../Layout/Banner'
import Sales from '../Layout/Sales'
import Terms from '../Layout/Terms'
import Flex from '../Flex'
import NewArrival from '../Layout/NewArrival'
import BestSeller from '../Layout/BestSeller'
import ProductYear from '../Layout/ProductYear'
import HeadingText from '../HeadingText'
import SpecialOffer from '../Layout/SpecialOffer'


const Home = () => {
   
  return (
    <>
        <div>
        <Banner></Banner>
          <Container>
              <Terms/>
              <Sales/>
              <NewArrival/>
              <BestSeller/>
              

              <ProductYear/>

              <SpecialOffer/>
          </Container>
        </div>
    </>
  )
}

export default Home
