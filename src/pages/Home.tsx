import React from 'react'
import { Navbar, DashBoard } from '../components'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Navbar />
      <DashBoard />
    </>
  )
}

export default Home