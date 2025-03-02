import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Marquees from "./components/Marquees"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import SplineComponent from "./components/SplineComponent"
import Stripes from "./components/Stripes"
import Work from "./components/Work";
import LocomotiveScroll from 'locomotive-scroll';





const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full bg-zinc-900 text-white">
      <NavBar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
      <SplineComponent />
    </div>
  )
}

export default App