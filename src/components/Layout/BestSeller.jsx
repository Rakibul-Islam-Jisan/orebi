import React, { useEffect, useState } from 'react'
import HeadingText from '../HeadingText'
import Flex from '../Flex'
import Product from '../Product'
import axios from 'axios'
const BestSeller = () => {
    const [data, setData] = useState([])

    useEffect(() => {

        async function alldatas() {
            let pdata = await axios.get("https://dummyjson.com/products")
            

            setData(pdata.data.products.slice(3, 7))
        }
        alldatas()

    }, [])
    return (
        <>
            <HeadingText text={'Our Bestsellers'} />
            <Flex className={'gap-x-5 -mx-3.5 '}>
                {
                    data.map(item => (
                        <Product
                            key={item.id}
                            productImg={item.thumbnail}
                            pName={item.title}
                            pPrice={`$${item.price}`}
                        />
                    ))
                }
            </Flex>
        </>
    )
}

export default BestSeller
