import { useRef } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const NavBar = () => {

  const onLogoEnter = () => {
  }

  const onLogoLeave = () => {

  }

  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-600">
      <div className="nav-left flex items-center">
      <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className="links flex gap-15 ml-20 font-Satoshi font-medium">
          <Link to="/" className="text-sm cursor-pointer">
            Home
          </Link>
          <Link to="/project"
            className="text-sm flex items-center gap-1 cursor-pointer"
            href="#"
          >
            <span 
              style={{ boxShadow: "0 0 0.45em #00FF19" }}
              className="inline-block w-1 h-1 rounded-full bg-green-500"
            ></span>
            Projects
          </Link>
          <Link to='/contact'  className="text-sm cursor-pointer" href="#">
          Skills & Tools
          </Link>
          <div className="line w-[2px] h-5 bg-zinc-700"></div>
          <a className="text-sm cursor-pointer" href="#">
            About Me
          </a>
        </div>
      </div>
      <Button title="Resume" />
    </div>
  );
};

export default NavBar;
