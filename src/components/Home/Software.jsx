import React from 'react';
import { motion } from 'motion/react';

const Software = () => {
  const softwareTools = [
    {
      name: "Autodesk Revit",
      category: "BIM Modeling",
      description: "Primary tool for 3D BIM modeling, family creation, and project coordination",
      proficiency: "Expert",
      color: "#14CF93",
      icon: "🏗️"
    },
    {
      name: "Navisworks",
      category: "Clash Detection",
      description: "Advanced clash detection and project review software for large-scale projects",
      proficiency: "Advanced",
      color: "#1430D4",
      icon: "🔍"
    },
    {
      name: "AutoCAD",
      category: "2D Drafting",
      description: "Precision 2D drafting and documentation for detailed construction drawings",
      proficiency: "Expert",
      color: "#FB523B",
      icon: "📐"
    },
    {
      name: "BIM 360",
      category: "Collaboration",
      description: "Cloud-based collaboration platform for project management and coordination",
      proficiency: "Advanced",
      color: "#14CF93",
      icon: "☁️"
    },
    {
      name: "Dynamo",
      category: "Visual Programming",
      description: "Visual programming for Revit automation and parametric design workflows",
      proficiency: "Intermediate",
      color: "#1430D4",
      icon: "⚙️"
    },
    {
      name: "SketchUp",
      category: "3D Modeling",
      description: "Rapid 3D modeling and visualization for conceptual design and presentations",
      proficiency: "Advanced",
      color: "#FB523B",
      icon: "🎨"
    },
    {
      name: "Rhino 3D",
      category: "NURBS Modeling",
      description: "Advanced NURBS modeling for complex architectural geometries and forms",
      proficiency: "Intermediate",
      color: "#14CF93",
      icon: "🦏"
    },
    {
      name: "Lumion",
      category: "Rendering",
      description: "Real-time 3D visualization and architectural rendering for presentations",
      proficiency: "Intermediate",
      color: "#1430D4",
      icon: "🌟"
    }
  ];

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case "Expert": return "#14CF93";
      case "Advanced": return "#1430D4";
      case "Intermediate": return "#FB523B";
      default: return "#666666";
    }
  };

  return (
    <div className='w-full py-32 mt-36 bg-[#F8F8F8]'>
      <div className='max-w-screen-xl mx-auto px-6'>
        <div className="relative mb-20">
          <h1 className="text-[10vw] font-Montreal inline-block text-[#333333]">
            Sof<span className="font-Mazius text-[#14CF93]">t</span>ware
          </h1>
          <div className="absolute bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-[#333333] via-[#14CF93] to-[#333333] opacity-70"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softwareTools.map((software, index) => (
            <motion.div
              key={software.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#F8F8F8] p-6 rounded-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-transparent hover:border-[#14CF93]/20"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{software.icon}</div>
                <h3 className="text-lg font-Montreal font-medium text-[#333333] group-hover:text-white transition-colors duration-300 mb-2">
                  {software.name}
                </h3>
                <span 
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ 
                    backgroundColor: getProficiencyColor(software.proficiency) + "20",
                    color: getProficiencyColor(software.proficiency)
                  }}
                >
                  {software.proficiency}
                </span>
              </div>
              
              <div className="text-center mb-4">
                <span className="text-sm text-[#666666] group-hover:text-white/80 transition-colors duration-300">
                  {software.category}
                </span>
              </div>
              
              <p className="text-sm text-[#666666] group-hover:text-white/90 transition-colors duration-300 text-center leading-relaxed">
                {software.description}
              </p>

              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#14CF93] to-[#1430D4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                style={{ zIndex: -1 }}
              ></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#14CF93] to-[#1430D4] p-8 rounded-lg text-white">
            <h3 className="text-2xl font-Montreal font-medium mb-4">
              Continuous Learning & Certification
            </h3>
            <p className="text-white/90 leading-relaxed max-w-3xl mx-auto">
              I stay updated with the latest BIM technologies and maintain certifications in key software platforms. 
              My expertise spans from basic modeling to advanced automation and cloud collaboration workflows.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Software;
