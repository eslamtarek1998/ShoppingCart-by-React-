import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Home from './component/Home'
import About from './component/About'
import Store from './component/Store'
import Navbar from './component/Navbar'
import ShoppingCartContxtProvider from './context/ShoppingCartContext'


export default function App() {
  return (
    <div>

      <ShoppingCartContxtProvider>

      <Navbar/>

       <Container className="mb-4"> 


        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/store' element={<Store/>}/>
              <Route path='/about' element={<About/>}/>
        </Routes>


        </Container>

      </ShoppingCartContxtProvider>

    



      
    </div>
  )
}

