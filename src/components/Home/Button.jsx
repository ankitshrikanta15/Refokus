import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Button = ({ title = "Start a project" }) => {
  return (
    <div className="group relative w-40 bg-[#333333] text-[#F8F8F8] rounded-full cursor-pointer overflow-hidden">
      <span className="text-sm font-medium px-4 py-2 flex items-center justify-between transition-transform duration-500 ease-out group-hover:-translate-y-[120%]">
        {title}
        <MdOutlineSubdirectoryArrowRight />
      </span>
      <span className="absolute left-0 top-0 w-full text-sm font-medium px-4 py-2 flex items-center justify-between transition-transform duration-500 ease-out translate-y-[120%] group-hover:translate-y-0">
        {title}
        <MdOutlineSubdirectoryArrowRight />
      </span>
    </div>
  )
}
export default Button