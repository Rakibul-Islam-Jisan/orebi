import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import axios from 'axios'
import Product from '../Product'

const ShopItem = () => {
    const [data, setData] = useState([])

    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 6;

    useEffect(() => {
    
            async function alldatas() {
                let pdata = await axios.get("https://dummyjson.com/products")
                
    
                setData(pdata.data.products)
            }
            alldatas()
    
        }, [])


       
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    
    const totalPages = Math.ceil(data.length / productsPerPage);

    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
        <Container>
            <Flex className={"justify-between my-10"}>
                <div className='w-[14%] bg-amber-400'></div>
                <div className='w-[86%] '>
                    <Flex className={"flex-wrap"}>
                        {
                                currentProducts.map(item => (
                                    <Product key={item.id} pName={item.title} pPrice={item.price} productImg={item.thumbnail} />
                                ))
                            }
                    </Flex>
                    <Flex className={"justify-center my-4"}>
                        
                            {[...Array(totalPages).keys()].map(page => (
                                <button
                                    key={page + 1}
                                    onClick={() => paginate(page + 1)}
                                    className={`
                                        mx-1 px-3 py-1 rounded-md cursor-pointer transition-colors
                                        ${currentPage === page + 1
                                            ? 'bg-gray-800 text-white font-bold shadow-[10px_10px_62px_-21px_rgba(66,68,90,1)]'
                                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-[10px_10px_62px_-21px_rgba(66,68,90,1)]'
                                        }
                                    `}
                                >
                                    {page + 1}
                                </button>
                            ))}
                    </Flex>
                </div>
            </Flex>
        </Container>
    </>
  )
}

export default ShopItem
