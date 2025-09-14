
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ankitshrikanta/", // Replace with your actual LinkedIn URL
      icon: "💼"
    },
    {
      name: "Twitter",
      url: "https://x.com/ankitshrikanta", // Replace with your actual Twitter URL
      icon: "🐦"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ankitshrikanta/", // Replace with your actual Instagram URL
      icon: "📸"
    }
  ];

  const navigationLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Work",
      path: "#work" // This will scroll to work section on home page
    },
    {
      name: "Services",
      path: "#services" // This will scroll to services section on home page
    },
    {
      name: "Contact",
      path: "/contact"
    }
  ];

  const handleScrollToSection = (sectionId) => {
    if (sectionId.startsWith('#')) {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full bg-[#333333] text-[#F8F8F8]">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-10">
        <div className="basis-1/2">
        <h1 className="text-[10rem] font-semibold leading-none tracking-tight text-[#F8F8F8]">BIM Modeler.</h1>
        </div>
        <div className="basis-1/2 flex gap-3">
        <div className="basis-1/3">
          <h3 className="mb-10 text-[#F8F8F8]/70 capitalize">Socials</h3>
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-2 capitalize text-[#F8F8F8]/60 hover:text-[#14CF93] transition-colors duration-300 group"
            >
              <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
              {social.name}
            </a>
          ))}
        </div>
        <div className="basis-1/3">
          <h3 className="mb-10 text-[#F8F8F8]/70 capitalize">sitemap</h3>
          {navigationLinks.map((link, index) => (
            link.path.startsWith('#') ? (
              <button 
                key={index}
                onClick={() => handleScrollToSection(link.path)}
                className="block mt-2 font-regular capitalize text-[#F8F8F8]/60 hover:text-[#14CF93] transition-colors duration-300 text-left"
              >
                {link.name}
              </button>
            ) : (
              <Link 
                key={index}
                to={link.path}
                className="block mt-2 font-regular capitalize text-[#F8F8F8]/60 hover:text-[#14CF93] transition-colors duration-300"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
        <div className="basis-1/2 flex flex-col items-end justify-between">
          <p className="text-right text-[#F8F8F8]/80">Professional BIM modeling services driven by precision and empowered by cutting-edge technology.</p>
          <div className="mt-10 flex items-center space-x-4">
          <h1 className='font-Mazius text-[#14CF93] text-[4vw] italic tracking-tight'>Ankit Patel</h1>
            {/* <span className="text-[#14CF93] font-medium">Designed by</span>
            <div className="bg-[#F8F8F8] px-4 py-2 rounded-lg">
              <span className="text-[#333333] font-bold">React</span>
            </div> */}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer