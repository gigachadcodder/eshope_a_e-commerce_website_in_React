import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-2'>
        <Header/>
        <Home/>
    </div>
  )
}

export default HomePage
