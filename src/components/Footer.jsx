
const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-10">
        <div className="basis-1/2">
        <h1 className="text-[10rem] font-semibold leading-none tracking-tight">Refokus.</h1>
        </div>
        <div className="basis-1/2 flex gap-3">
        <div className="basis-1/3">
          <h3 className="mb-10 text-zinc-500 capitalize">Socials</h3>
          {["Instagram", "Twitter (X?)", "LinkedIn"].map((item, index) => <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>)}
        </div>
        <div className="basis-1/3">
          <h3 className="mb-10 text-zinc-500 capitalize">sitemap</h3>
          {["home", "work", "careers", "Contact"].map((item, index) => <a key={index} className="block mt-2 font-regular capitalize text-zinc-300">{item}</a>)}
        </div>
        <div className="basis-1/2 flex flex-col items-end">
          <p className="text-right">Refokus is pioneering digital agency driven by design and empowered by technology.</p>
          <img className="w-32 mt-10" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer