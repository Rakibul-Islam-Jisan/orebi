import React from 'react'
import Container from '../Container'

const Contact = () => {
  return (
    <div className='py-20 text-center'>
        <Container>
          <h2>Fill Up a Form</h2>
          <form className='flex flex-col justify-center items-center'>
            <label>Name</label>
            <input placeholder='Enter Your Name' className='border-b-2 border-black w-[300px]'></input>
          </form>
        </Container>
    </div>
  )
}

export default Contact
