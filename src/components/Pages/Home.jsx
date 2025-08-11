import React from 'react'
import Header from '../Layout/Header'
import Badge from '../Badge'
import Container from '../Container'
import Product from '../Product'
import Banner from '../Layout/Banner'
import Sales from '../Layout/Sales'
import Terms from '../Layout/Terms'

const Home = () => {
  return (
    <>
        <div>
        <Banner></Banner>
          <Container>
              <Terms/>
              <Sales/>
              <Product />
          </Container>
        </div>
    </>
  )
}

export default Home
