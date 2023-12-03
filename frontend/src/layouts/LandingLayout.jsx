import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer  from '../components/Footer'

const LandingLayout = () => {
  return (
    <>
        <Navigation />
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default LandingLayout