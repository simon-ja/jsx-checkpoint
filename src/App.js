
import React from 'react'
import Nav from './components/navbar/Nav'
import Footer from './components/footer/Footer'
import Fullname from './components/fullname/Fullname'
import Address from './components/address/Address'

const App = () => {
  return (
    <div>
      <Nav  />
      <Fullname />
      <Address />
      <Footer />
    </div>
  )
}

export default App