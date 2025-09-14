import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-32 flex gap-1'>
      <Card width={"basis-1/3"} start={false} para={true} heading={"BIM Expertise"} title={"Why Choose Me?"} />
      <Card width={"basis-2/3"} start={true} para={false} hover="true" title={`Let's Build Something Amazing Together`} wid={"w-[40%]"} />
    </div>
  )
}

export default Cards 