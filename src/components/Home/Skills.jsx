import React from 'react';
import { motion } from 'motion/react';

const Skills = () => {
  const skillCategories = [
    {
      category: "BIM Software",
      skills: [
        { name: "Autodesk Revit", level: 95, color: "#14CF93" },
        { name: "Navisworks", level: 90, color: "#1430D4" },
        { name: "BIM 360", level: 85, color: "#FB523B" },
        { name: "Dynamo", level: 80, color: "#14CF93" },
        { name: "Bentley MicroStation", level: 75, color: "#1430D4" }
      ]
    },
    {
      category: "CAD & Design",
      skills: [
        { name: "AutoCAD", level: 95, color: "#FB523B" },
        { name: "SketchUp", level: 90, color: "#14CF93" },
        { name: "Rhino 3D", level: 85, color: "#1430D4" },
        { name: "Grasshopper", level: 80, color: "#FB523B" },
        { name: "Lumion", level: 75, color: "#14CF93" }
      ]
    },
    {
      category: "Project Management",
      skills: [
        { name: "Project Coordination", level: 95, color: "#1430D4" },
        { name: "Clash Detection", level: 90, color: "#FB523B" },
        { name: "4D Scheduling", level: 85, color: "#14CF93" },
        { name: "Quantity Takeoff", level: 80, color: "#1430D4" },
        { name: "Team Collaboration", level: 95, color: "#FB523B" }
      ]
    }
  ];

  return (
    <div className='w-full py-32 mt-36 bg-[#F8F8F8]'>
      <div className='max-w-screen-xl mx-auto px-6'>
        <div className="relative mb-20">
          <h1 className="text-[10vw] font-Montreal inline-block text-[#333333]">
            Skills <span className="font-Mazius text-[#14CF93]">&</span> Software
          </h1>
          <div className="absolute bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-white via-[#14CF93] to-white opacity-70"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-Montreal font-medium text-[#333333] mb-8 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#333333] font-medium group-hover:text-[#14CF93] transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-[#666666] text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-[#E5E5E5] rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full transition-all duration-500 group-hover:shadow-lg"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
                          boxShadow: `0 0 10px ${skill.color}40`
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
