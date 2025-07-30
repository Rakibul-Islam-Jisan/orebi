import React from 'react'
import Home from './components/Pages/Home'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/Layout/RootLayout'
import About from './components/Pages/About'
import Shop from './components/Pages/Shop'
import Contact from './components/Pages/Contact'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
