import React from 'react';
import { motion } from 'motion/react';

const Process = () => {
  const processSteps = [
    {
      id: 1,
      title: "MEP Coordination Approach",
      icon: "⚡",
      color: "#14CF93",
      steps: [
        {
          phase: "Initial Assessment",
          description: "Analyze architectural and structural models to identify MEP routing opportunities and constraints",
          details: ["Review project specifications", "Identify spatial constraints", "Plan optimal routing paths"]
        },
        {
          phase: "3D Modeling & Integration",
          description: "Create detailed MEP models and integrate with architectural and structural systems",
          details: ["Model all MEP systems", "Ensure proper clearances", "Maintain code compliance"]
        },
        {
          phase: "Clash Detection & Resolution",
          description: "Identify conflicts and coordinate solutions with all project stakeholders",
          details: ["Run automated clash detection", "Prioritize conflicts by severity", "Develop resolution strategies"]
        },
        {
          phase: "Final Coordination",
          description: "Ensure all systems work harmoniously and meet project requirements",
          details: ["Validate all clearances", "Update documentation", "Prepare final deliverables"]
        }
      ]
    },
    {
      id: 2,
      title: "Quality Control Methods",
      icon: "🔍",
      color: "#1430D4",
      steps: [
        {
          phase: "Model Validation",
          description: "Comprehensive checks to ensure model accuracy and completeness",
          details: ["Geometry validation", "Parameter verification", "Family compliance checks"]
        },
        {
          phase: "Code Compliance Review",
          description: "Verify all designs meet local building codes and industry standards",
          details: ["Building code analysis", "Accessibility compliance", "Fire safety requirements"]
        },
        {
          phase: "Peer Review Process",
          description: "Multi-level review system to catch errors and improve quality",
          details: ["Internal team review", "Cross-discipline validation", "Client approval process"]
        },
        {
          phase: "Documentation Standards",
          description: "Maintain consistent documentation and deliverable standards",
          details: ["Standardized naming conventions", "Version control protocols", "Quality assurance checklists"]
        }
      ]
    },
    {
      id: 3,
      title: "Collaboration Process",
      icon: "🤝",
      color: "#FB523B",
      steps: [
        {
          phase: "Stakeholder Engagement",
          description: "Establish clear communication channels with all project participants",
          details: ["Regular coordination meetings", "Clear communication protocols", "Shared project platforms"]
        },
        {
          phase: "Multi-Trade Coordination",
          description: "Facilitate seamless collaboration between different construction trades",
          details: ["Trade-specific model reviews", "Conflict resolution sessions", "Integrated design solutions"]
        },
        {
          phase: "Real-Time Updates",
          description: "Maintain current information flow and model synchronization",
          details: ["Cloud-based collaboration", "Live model updates", "Change management protocols"]
        },
        {
          phase: "Final Integration",
          description: "Ensure all trades work together for successful project delivery",
          details: ["Final model consolidation", "As-built documentation", "Handover procedures"]
        }
      ]
    }
  ];

  return (
    <div className='w-full py-32 mt-36 bg-[#F8F8F8]'>
      <div className='max-w-screen-xl mx-auto px-6'>
        <div className="relative mb-20">
          <h1 className="text-[10vw] font-Montreal inline-block text-[#333333]">
            P<span className="font-Mazius text-[#14CF93]">r</span>ocess
          </h1>
          <div className="absolute bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-[#333333] via-[#14CF93] to-[#333333] opacity-70"></div>
        </div>

        <div className="space-y-20">
          {processSteps.map((process, processIndex) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: processIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-12">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mr-6"
                  style={{ backgroundColor: process.color + "20" }}
                >
                  {process.icon}
                </div>
                <h2 className="text-4xl font-Montreal font-medium text-[#333333]">
                  {process.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.steps.map((step, stepIndex) => (
                  <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (processIndex * 0.2) + (stepIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-[#F8F8F8] p-6 rounded-lg h-full hover:shadow-xl transition-all duration-500 cursor-pointer border-l-4"
                         style={{ borderLeftColor: process.color }}
                    >
                      <div className="flex items-center mb-4">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3"
                          style={{ backgroundColor: process.color }}
                        >
                          {stepIndex + 1}
                        </div>
                        <h3 className="text-lg font-Montreal font-medium text-[#333333] group-hover:text-white transition-colors duration-300">
                          {step.phase}
                        </h3>
                      </div>
                      
                      <p className="text-[#666666] group-hover:text-white/90 transition-colors duration-300 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (processIndex * 0.2) + (stepIndex * 0.1) + (detailIndex * 0.05) }}
                            viewport={{ once: true }}
                            className="flex items-center text-sm text-[#666666] group-hover:text-white/80 transition-colors duration-300"
                          >
                            <div 
                              className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                              style={{ backgroundColor: process.color }}
                            ></div>
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-[#14CF93] to-[#1430D4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                      style={{ zIndex: -1 }}
                    ></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#14CF93] to-[#1430D4] p-12 rounded-2xl text-white">
            <h3 className="text-3xl font-Montreal font-medium mb-6">
              Proven Methodology
            </h3>
            <p className="text-white/90 leading-relaxed max-w-4xl mx-auto text-lg">
              My systematic approach to MEP coordination ensures seamless integration of all building systems. 
              Through rigorous quality control and effective collaboration, I deliver projects that exceed expectations 
              while maintaining the highest standards of accuracy and efficiency.
            </p>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-white/80">Team Collaborations</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Process;
