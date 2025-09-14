import React from 'react';
import { motion } from 'motion/react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "3D BIM Modeling",
      description: "Create detailed 3D Building Information Models using Revit, ensuring accurate representation of architectural, structural, and MEP systems for seamless project coordination.",
      icon: "🏗️",
      color: "#14CF93"
    },
    {
      id: 2,
      title: "Clash Detection",
      description: "Identify and resolve spatial conflicts between different building systems before construction, saving time and reducing costly on-site modifications.",
      icon: "🔍",
      color: "#1430D4"
    },
    {
      id: 3,
      title: "4D Scheduling",
      description: "Integrate project schedules with 3D models to visualize construction sequences, optimize workflows, and improve project timeline management.",
      icon: "📅",
      color: "#FB523B"
    },
    {
      id: 4,
      title: "Quantity Takeoff",
      description: "Generate accurate material quantities and cost estimates directly from BIM models, ensuring precise project budgeting and procurement planning.",
      icon: "📊",
      color: "#14CF93"
    },
    {
      id: 5,
      title: "MEP Coordination",
      description: "Coordinate mechanical, electrical, and plumbing systems within the BIM environment to ensure optimal space utilization and system integration.",
      icon: "⚡",
      color: "#1430D4"
    },
    {
      id: 6,
      title: "As-Built Documentation",
      description: "Create comprehensive as-built documentation and facility management models for efficient building operations and maintenance planning.",
      icon: "📋",
      color: "#FB523B"
    }
  ];

  return (
    <div className='w-full py-32 mt-36 bg-[#F8F8F8]'>
      <div className='max-w-screen-xl mx-auto px-6'>
        <div className="relative mb-20">
          <h1 className="text-[10vw] font-Montreal inline-block text-[#333333]">
            Ser<span className="font-Mazius text-[#14CF93]">v</span>ices
          </h1>
          <div className="absolute bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-white via-[#14CF93] to-white opacity-70"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#F8F8F8] p-8 rounded-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{service.icon}</span>
                <h3 className="text-2xl font-Montreal font-medium text-[#333333] group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-[#666666] group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                {service.description}
              </p>
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#14CF93] to-[#1430D4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                style={{ zIndex: -1 }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
