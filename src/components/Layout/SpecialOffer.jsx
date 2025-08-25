import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../Product'
import Flex from '../Flex'
import HeadingText from '../HeadingText'

const SpecialOffer = () => {
    const [data, setData] = useState([])

    useEffect(() => {

        async function alldatas() {
            let pdata = await axios.get("https://dummyjson.com/products")
            

            setData(pdata.data.products.slice(9, 13))
        }
        alldatas()

    }, [])
  return (
    <>
        <HeadingText text={'Special Offers'}/>

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

export default SpecialOffer
