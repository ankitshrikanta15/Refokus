import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import Demo from "./components/Projects/Demo"
import Hotel from "./components/Projects/Hotel"
import RevitProjectTemplate from "./components/Projects/RevitProjectTemplate"





const App = () => {
  // const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className="bg-[#FFFFFF] text-[#261B14]">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Demo />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/revit-template" element={<RevitProjectTemplate />} />
      </Routes>
    </div>
  )
}

export default App