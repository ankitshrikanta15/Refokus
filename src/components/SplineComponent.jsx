import Spline from '@splinetool/react-spline';

export default function SplineComponent() {
  return (
    <main className='overflow-hidden'>
      <Spline className='w-[30vh] scale-[120%]'
        scene="https://prod.spline.design/79AaXBq7RobNxB-Y/scene.splinecode" 
      />
    </main>
  );
}
