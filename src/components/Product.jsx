import React from 'react'
import Button from './Button';

const Product = ({val, mover, index}) => {

  

  return (
    <div className='w-full h-[23rem] py-20 text-white'>
      <div onMouseEnter={() =>{mover(index)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className='text-6xl capitalize font-medium'>{val.title}</h1>
        <div className="details w-1/3">
          <p className='mb-10'>{val.description}</p>
          <div className='flex items-center gap-5'>
          {val.live && <Button title='Live Project' />}
          {val.case && <Button title='Code Base' />}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product;