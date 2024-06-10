import React from 'react'
import Subtotal from './Subtotal'

const Checkout = () => {
  return (
    <div>
        <div className=' flex flex-col bg-white py-2 px-2 gap-5'>
        <Subtotal/>
        <button className='px-10 py-1 bg-orange-400'>Procced to Checkout</button>
        </div>
      
    </div>
  )
}

export default Checkout
