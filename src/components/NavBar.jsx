import Button from "./Button"


const NavBar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-600">
      <div className="nav-left flex items-center">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className="links flex gap-15 ml-20 font-Satoshi">
        <a className="text-sm" href="#">Home</a>
        <a className="text-sm flex items-center gap-1" href="#"><span style={{boxShadow: "0 0 0.45em #00FF19"}} className="inline-block w-1 h-1 rounded-full bg-green-500"></span>Work</a>
        <a className="text-sm" href="#">Culture</a>
        <div className="line w-[2px] h-5 bg-zinc-700"></div>
        <a className="text-sm" href="#">News</a>
      </div>
    </div>
      <Button />
    </div>
  )
}

export default NavBar