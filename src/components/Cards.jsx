import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-32 flex gap-1'>
      <Card width={"basis-1/3"} start={false} para={true} heading={"Up Next Culture"} />
      <Card width={"basis-2/3"} start={true} para={false} hover="true" title={`Let's get to it, together.`} wid={"w-[35%]"} />
    </div>
  )
}

export default Cards 