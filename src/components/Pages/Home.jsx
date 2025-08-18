import React from 'react'
import Header from '../Layout/Header'
import Badge from '../Badge'
import Container from '../Container'
import Product from '../Product'
import Banner from '../Layout/Banner'
import Sales from '../Layout/Sales'
import Terms from '../Layout/Terms'
import Flex from '../Flex'
import productOne from "../../assets/productOne.png"
import productTwo from "../../assets/productTwo.webp"
import productThree from "../../assets/productThree.webp"
import productFour from "../../assets/productFour.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../NextArrow'
import PrevArrow from '../PrevArrow'
import ProductYear from '../Layout/ProductYear'
import HeadingText from '../HeadingText'
const Home = () => {
   var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
  return (
    <>
        <div>
        <Banner></Banner>
          <Container>
              <Terms/>
              <Sales/>
              <HeadingText text={'New Arrivals'}/>
              <Slider {...settings}>
                <Product productImg={productOne} />
                <Product productImg={productTwo} />
                <Product productImg={productThree} />
                <Product productImg={productFour} />
                <Product productImg={productOne} />
                <Product productImg={productTwo} />
              </Slider>
              
              <HeadingText text={'Our Bestsellers'}/>
              <Flex className={'gap-x-5 '}>
                <Product productImg={productOne} />
                <Product productImg={productTwo} />
                <Product productImg={productThree} />
                <Product productImg={productFour} />
              </Flex>

              <ProductYear/>

              <HeadingText text={'Special Offers'}/>
              <Flex className={'gap-x-5 '}>
                <Product productImg={productOne} />
                <Product productImg={productTwo} />
                <Product productImg={productThree} />
                <Product productImg={productFour} />
              </Flex>
          </Container>
        </div>
    </>
  )
}

export default Home
