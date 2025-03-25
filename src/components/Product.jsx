import { useState } from 'react'
import Button from './Button';

const Product = ({val, mover, index}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const containerStyle = {
    backgroundColor: isHovered ? val.color : 'transparent',
    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
  };
  
  const textStyle = {
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
  };
  
  return (
    <div 
      style={containerStyle}
      className="w-full h-[23rem] py-20 text-white"
      onMouseEnter={() => {
        setIsHovered(true);
        mover(index);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 
          style={textStyle} 
          className='text-6xl capitalize font-medium'
        >
          {val.title}
        </h1>
        <div className="details w-1/3">
          <p 
            style={textStyle}
            className='mb-10'
          >
            {val.description}
          </p>
          <div 
            style={{
              opacity: isHovered ? 1 : 0.8,
              transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className='flex items-center gap-5'
          >
            {val.live && <Button title='Live Project' />}
            {val.case && <Button title='Code Base' />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;