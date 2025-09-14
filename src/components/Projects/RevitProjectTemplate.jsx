import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const RevitProjectTemplate = () => {
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    details: true,
    objectives: true,
    workflow: false,
    features: true,
    visuals: true,
    challenges: false,
    outcome: false,
    skills: true
  });

  const greetings = [
    "Hello",        // English
    "नमस्ते",      // Hindi
    "Hola",         // Spanish
    "Bonjour",      // French
    "Hallo",        // German
    "Ciao",         // Italian
    "こんにちは",      // Japanese
    "你好",           // Chinese
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",   // Punjabi
    "வணக்கம்",        // Tamil
    "નમસ્કાર",       // Gujarati
    "নমস্কার",        // Bengali
    "నమస్కారం",      // Telugu
    "اسلام علیکم"      // Urdu
  ];
 

  const [showIntro, setShowIntro] = useState(true);
  const [greetingIndex, setGreetingIndex] = useState(0);

  React.useEffect(() => {
    if (!showIntro) return;
    if (greetingIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setGreetingIndex(i => i + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [greetingIndex, showIntro]);

  if (showIntro) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        style={{ minHeight: "100vh" }}
      >
        <motion.span
          key={greetings[greetingIndex]}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="text-white text-5xl font-medium font-Satoshi"
        >
          {greetings[greetingIndex]}
        </motion.span>
      </motion.div>
    );
  }
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const SectionHeader = ({ title, isExpanded, onToggle, children }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-6"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 flex items-center justify-between group"
      >
        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
          {title}
        </h2>
        {isExpanded ? (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 py-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#164D9C] text-white">
      {/* Header Section with Back Button and Title (Hotel-style) */}
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="flex items-center gap-6 mb-12">
          {/* Back Button */}
          <Link 
            to="/" 
            className="group flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300"
          >
            <motion.div
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span className="font-Satoshi text-sm font-medium">Back to Home</span>
            </motion.div>
          </Link>
        </div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-medium font-Satoshi mb-10 leading-tight"
        >
          Modern Office Complex
        </motion.h1>
      </div>

      {/* Asymmetrical Image Gallery (Hotel-style) */}
      <div className="max-w-screen-xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Large Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 row-span-2"
          >
            <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1496307661665-3e0b5a158c74?q=80&w=2070&auto=format&fit=crop"
                alt="Office Complex Exterior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-medium mb-2">Exterior View</h3>
                <p className="text-sm opacity-90">Modern glass facade with sustainable design</p>
              </div>
            </div>
          </motion.div>

          {/* Medium Image - Top Right */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[220px] lg:h-[260px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1581092335384-9b6c00b0b1d7?q=80&w=2069&auto=format&fit=crop"
                alt="Open Office Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-medium">Open Office</h3>
              </div>
            </div>
          </motion.div>

          {/* Small Image - Bottom Right */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-[220px] lg:h-[260px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1560446075-2a9930dd4c48?q=80&w=2070&auto=format&fit=crop"
                alt="Lobby Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-medium">Lobby Interior</h3>
              </div>
            </div>
          </motion.div>

          {/* Additional Images Row */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:col-span-1 lg:col-span-1 h-[220px] lg:h-[260px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1599661046289-5613ba3f659e?q=80&w=2070&auto=format&fit=crop"
                alt="Conference Room"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-medium">Conference Room</h3>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="md:col-span-1 lg:col-span-1 h-[220px] lg:h-[260px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop"
                alt="Breakout Area"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-medium">Breakout Area</h3>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="md:col-span-2 lg:col-span-1 h-[220px] lg:h-[260px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2089&auto=format&fit=crop"
                alt="Rooftop Terrace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-medium">Rooftop Terrace</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            
            {/* Project Overview */}
            <SectionHeader
              title="Project Overview"
              isExpanded={expandedSections.overview}
              onToggle={() => toggleSection('overview')}
            >
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  A state-of-the-art 15-story office complex featuring sustainable design principles and cutting-edge BIM technology. This project showcases advanced Revit modeling techniques, comprehensive MEP coordination, and innovative architectural solutions for modern workplace environments.
                </p>
                <p className="text-gray-600">
                  Located in the heart of the business district, this LEED Platinum certified building serves as a model for sustainable commercial development. The project involved extensive collaboration with multiple stakeholders including architects, engineers, contractors, and sustainability consultants.
                </p>
              </div>
            </SectionHeader>

            {/* Project Objectives */}
            <SectionHeader
              title="Project Objectives"
              isExpanded={expandedSections.objectives}
              onToggle={() => toggleSection('objectives')}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Create a fully coordinated 3D BIM model with LOD 400 specifications for accurate construction documentation and clash-free installation.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Achieve LEED Platinum certification through sustainable design integration and energy-efficient building systems.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Deliver comprehensive construction documents with zero major clashes and optimized material quantities.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Implement advanced BIM workflows for improved project coordination and reduced construction timeline.</p>
                </div>
              </div>
            </SectionHeader>

            {/* Workflow / Process */}
            <SectionHeader
              title="Workflow & Process"
              isExpanded={expandedSections.workflow}
              onToggle={() => toggleSection('workflow')}
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Site Analysis & Programming</h4>
                    <p className="text-gray-600 text-sm">Conducted comprehensive site surveys, zoning analysis, and space programming. Developed initial massing studies and established project parameters using Revit conceptual massing tools.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Schematic Design & Model Setup</h4>
                    <p className="text-gray-600 text-sm">Established Revit project template with custom families, shared parameters, and view templates. Created initial building shell and core layout with basic MEP routing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Design Development & Coordination</h4>
                    <p className="text-gray-600 text-sm">Refined architectural details, integrated MEP systems, and performed comprehensive clash detection using Navisworks. Coordinated with structural engineers for optimal system integration.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Construction Documents & Handover</h4>
                    <p className="text-gray-600 text-sm">Generated final construction documents, schedules, and specifications. Delivered coordinated BIM model with embedded data for facility management and future maintenance.</p>
                  </div>
                </div>
              </div>
            </SectionHeader>

            {/* Key Features & Deliverables */}
            <SectionHeader
              title="Key Features & Deliverables"
              isExpanded={expandedSections.features}
              onToggle={() => toggleSection('features')}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    3D Models & Visualizations
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Complete architectural Revit model (LOD 400)</li>
                    <li>• High-resolution 3D renderings and walkthroughs</li>
                    <li>• Virtual reality presentations for client reviews</li>
                    <li>• Interactive 3D model for stakeholder engagement</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                    Construction Documents
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Complete floor plans and elevations</li>
                    <li>• Detailed sections and wall details</li>
                    <li>• Door, window, and finish schedules</li>
                    <li>• Comprehensive specification documents</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Coordination & Analysis
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Comprehensive clash detection reports</li>
                    <li>• Accurate quantity takeoffs and material schedules</li>
                    <li>• Energy analysis and sustainability reports</li>
                    <li>• 4D construction sequencing simulations</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    Specialized Systems
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Integrated HVAC design and coordination</li>
                    <li>• Complete plumbing and electrical layouts</li>
                    <li>• Structural coordination and detailing</li>
                    <li>• Fire safety and egress analysis</li>
                  </ul>
                </div>
              </div>
            </SectionHeader>

            {/* Images / Visuals */}
            <SectionHeader
              title="Project Visuals"
              isExpanded={expandedSections.visuals}
              onToggle={() => toggleSection('visuals')}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* HVAC */}
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden border border-white/15 bg-white/10 backdrop-blur-sm">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-14 h-14 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12h18M12 3v18m-6-6l12-12M6 6l12 12" />
                      </svg>
                      <p className="text-lg font-medium">HVAC</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <ul className="text-sm text-white/80 space-y-2">
                      <li>• VAV systems and duct layouts</li>
                      <li>• AHU/FCU equipment families</li>
                      <li>• Airflow simulation visuals</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Electrical */}
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden border border-white/15 bg-white/10 backdrop-blur-sm">
                  <div className="aspect-video bg-gradient-to-br from-yellow-500/30 to-orange-600/30 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-14 h-14 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3L4 14h5l-1 7 7-11h-5l1-7z" />
                      </svg>
                      <p className="text-lg font-medium">Electrical</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <ul className="text-sm text-white/80 space-y-2">
                      <li>• Lighting layouts and circuits</li>
                      <li>• Panel schedules</li>
                      <li>• Emergency power systems</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Plumbing */}
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden border border-white/15 bg-white/10 backdrop-blur-sm">
                  <div className="aspect-video bg-gradient-to-br from-emerald-500/30 to-teal-600/30 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-14 h-14 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 18c0-3 3-5 3-8 0-3-3-5-3-8m6 16c0-3-3-5-3-8 0-3 3-5 3-8" />
                      </svg>
                      <p className="text-lg font-medium">Plumbing</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <ul className="text-sm text-white/80 space-y-2">
                      <li>• Water supply and drainage</li>
                      <li>• Fixture schedules</li>
                      <li>• Riser diagrams</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Firefighting */}
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden border border-white/15 bg-white/10 backdrop-blur-sm">
                  <div className="aspect-video bg-gradient-to-br from-rose-500/30 to-red-600/30 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-14 h-14 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 2a6 6 0 016 6c0 4-4 6-4 8a2 2 0 11-4 0c0-2-4-4-4-8a6 6 0 016-6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-lg font-medium">Firefighting</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <ul className="text-sm text-white/80 space-y-2">
                      <li>• Sprinkler and hydrant layouts</li>
                      <li>• Fire alarm devices</li>
                      <li>• Egress and safety plans</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </SectionHeader>

            {/* Challenges Faced & Solutions */}
            <SectionHeader
              title="Challenges & Solutions"
              isExpanded={expandedSections.challenges}
              onToggle={() => toggleSection('challenges')}
            >
              <div className="space-y-6">
                <div className="border-l-4 border-orange-400 pl-6 py-4 bg-orange-50 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Complex MEP Coordination</h4>
                  <p className="text-gray-600 text-sm mb-3">The building's dense MEP systems required extensive coordination to avoid conflicts in limited ceiling space while maintaining optimal performance.</p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Implemented advanced clash detection workflows using Navisworks, created custom Revit families for complex equipment, and established weekly coordination meetings with all trades.</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-6 py-4 bg-orange-50 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">LEED Certification Requirements</h4>
                  <p className="text-gray-600 text-sm mb-3">Achieving LEED Platinum certification required careful integration of sustainable design elements without compromising architectural aesthetics.</p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Developed parametric Revit families for green building features, performed energy analysis throughout design phases, and created detailed sustainability documentation.</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-6 py-4 bg-orange-50 rounded-r-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Tight Construction Timeline</h4>
                  <p className="text-gray-600 text-sm mb-3">The aggressive construction schedule required accelerated design phases while maintaining quality and coordination standards.</p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Implemented parallel design workflows, utilized cloud-based collaboration tools, and established rapid prototyping processes for design iterations.</p>
                </div>
              </div>
            </SectionHeader>

            {/* Outcome / Results */}
            <SectionHeader
              title="Outcome & Results"
              isExpanded={expandedSections.outcome}
              onToggle={() => toggleSection('outcome')}
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-4 text-lg">Project Success Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-green-700 mb-2"><strong>Timeline:</strong> Completed 2 weeks ahead of schedule</p>
                    <p className="text-sm text-green-700 mb-2"><strong>Budget:</strong> 5% under budget through value engineering</p>
                    <p className="text-sm text-green-700 mb-2"><strong>Quality:</strong> Zero major RFIs during construction</p>
                  </div>
                  <div>
                    <p className="text-sm text-green-700 mb-2"><strong>LEED Score:</strong> 95/100 points achieved</p>
                    <p className="text-sm text-green-700 mb-2"><strong>Energy Efficiency:</strong> 40% reduction vs. baseline</p>
                    <p className="text-sm text-green-700 mb-2"><strong>Client Satisfaction:</strong> 98% approval rating</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-green-200">
                  <p className="text-green-800">
                    <strong>Overall Impact:</strong> The project successfully delivered a state-of-the-art office complex that serves as a model for sustainable commercial development. The building achieved LEED Platinum certification and has become a landmark in the business district, attracting premium tenants and setting new standards for green building design.
                  </p>
                </div>
              </div>
            </SectionHeader>

            {/* Skills Demonstrated */}
            <SectionHeader
              title="Skills Demonstrated"
              isExpanded={expandedSections.skills}
              onToggle={() => toggleSection('skills')}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4 text-lg">Technical Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">Revit Architecture</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">BIM Coordination</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">3D Modeling</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">Clash Detection</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">Parametric Design</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">Energy Analysis</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">4D Scheduling</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">Custom Families</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4 text-lg">Software & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full font-medium">Autodesk Revit</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full font-medium">Navisworks</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full font-medium">AutoCAD</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full font-medium">Dynamo</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full font-medium">Enscape</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full font-medium">Insight 360</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full font-medium">BIM 360</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full font-medium">Bluebeam</span>
                  </div>
                </div>
              </div>
            </SectionHeader>

          </div>

          {/* Right Column - Project Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <SectionHeader
                title="Project Details"
                isExpanded={expandedSections.details}
                onToggle={() => toggleSection('details')}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">Location</span>
                    <span className="text-sm text-gray-800 font-medium">Downtown Business District</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">Project Type</span>
                    <span className="text-sm text-gray-800 font-medium">Commercial Office</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">Area / Size</span>
                    <span className="text-sm text-gray-800 font-medium">450,000 sq ft</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">Floors</span>
                    <span className="text-sm text-gray-800 font-medium">15 Stories</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">Software Used</span>
                    <span className="text-sm text-gray-800 font-medium">Revit 2024</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">Timeline</span>
                    <span className="text-sm text-gray-800 font-medium">18 Months</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">Role</span>
                    <span className="text-sm text-gray-800 font-medium">BIM Manager</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">Team Size</span>
                    <span className="text-sm text-gray-800 font-medium">12 Members</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">Budget</span>
                    <span className="text-sm text-gray-800 font-medium">$85M</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-sm font-medium text-gray-600">Certification</span>
                    <span className="text-sm text-gray-800 font-medium">LEED Platinum</span>
                  </div>
                </div>
              </SectionHeader>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 bg-white rounded-xl shadow-lg border border-gray-100 p-6"
              >
                <h3 className="font-semibold text-gray-800 mb-4 text-lg">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    View Full Portfolio
                  </button>
                  <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                    Download Project Files
                  </button>
                  <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                    Contact for Similar Projects
                  </button>
                </div>
              </motion.div>

              {/* Project Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg border border-blue-200 p-6"
              >
                <h3 className="font-semibold text-gray-800 mb-4 text-lg">Project Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">BIM Model Size</span>
                    <span className="text-sm font-semibold text-blue-700">2.3 GB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Elements</span>
                    <span className="text-sm font-semibold text-blue-700">45,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Clashes Resolved</span>
                    <span className="text-sm font-semibold text-blue-700">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Drawings Generated</span>
                    <span className="text-sm font-semibold text-blue-700">340+</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevitProjectTemplate;