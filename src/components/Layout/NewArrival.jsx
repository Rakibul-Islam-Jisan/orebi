import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import NextArrow from '../NextArrow'
import PrevArrow from '../PrevArrow'
import ProductYear from '../Layout/ProductYear'
import HeadingText from '../HeadingText'
// import productOne from "../../assets/productOne.png"
// import productTwo from "../../assets/productTwo.webp"
// import productThree from "../../assets/productThree.webp"
// import productFour from "../../assets/productFour.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from '../Product';
import axios from 'axios';
const NewArrival = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        async function alldatas() {
            let pdata = await axios.get("https://dummyjson.com/products")
            

            setData(pdata.data.products)
        }
        alldatas()

    }, [])



    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <>
            <HeadingText text={'New Arrivals'} />
            <div className='-px-3'>
                <Slider {...settings}>
                    {
                        data.map(item => (
                            <Product  key={item.id} pName={item.title} pPrice={item.price} productImg={item.thumbnail} />
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default NewArrival
