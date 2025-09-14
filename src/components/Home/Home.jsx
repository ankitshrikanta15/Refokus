import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Work from "./Work";
import Products from "./Products";
import Marquees from "./Marquees";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Software from "./Software";
import Process from "./Process";
import Cards from "./Cards";
import Footer from "./Footer";
import Preloader from "./Preloader";
import { AnimatePresence } from "motion/react";
// import SplineComponent from './SplineComponent'
// import Stripes from './Stripes'

const Home = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect( () => {
  //   (
  //     async () => {
  //         setTimeout( () => {
  //           setIsLoading(false);
  //           document.body.style.cursor = 'default'
  //           window.scrollTo(0,0);
  //         }, 3000)
  //     }
  //   )()
  // }, [])

  return (
    <main className="w-full bg-[#F8F8F8] text-[#333333]">
      {/* <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      <NavBar />
      <div id="work">
        <Work />
      </div>
      {/* <Stripes /> */}
      <Products />
      <Marquees />
      <About />
      <div id="services">
        <Services />
      </div>
      <Skills />
      <Software />
      <Process />
      {/* <Cards /> */}
      <Footer />
      {/* <SplineComponent /> */}
    </main>
  );
};

export default Home;
