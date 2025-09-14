import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Hotel = () => {
  return (
    <div className="min-h-screen bg-[#164D9C] text-white">
      {/* Header Section with Back Button and Title */}
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
          className="text-7xl md:text-8xl font-medium font-Satoshi mb-16 leading-tight"
        >
          Hotel Project
        </motion.h1>
      </div>

      {/* Asymmetrical Image Gallery */}
      <div className="max-w-screen-xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Large Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 row-span-2"
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury Hotel Lobby"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-medium mb-2">Luxury Lobby</h3>
                <p className="text-sm opacity-90">Grand entrance with modern elegance</p>
              </div>
            </div>
          </motion.div>

          {/* Medium Image - Top Right */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[240px] lg:h-[290px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Hotel Room Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-medium">Premium Suite</h3>
              </div>
            </div>
          </motion.div>

          {/* Small Image - Bottom Right */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-[240px] lg:h-[290px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                alt="Hotel Restaurant"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-medium">Fine Dining</h3>
              </div>
            </div>
          </motion.div>

          {/* Additional Images Row */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:col-span-1 lg:col-span-1 h-[240px] lg:h-[290px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Hotel Pool Area"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-medium">Infinity Pool</h3>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="md:col-span-1 lg:col-span-1 h-[240px] lg:h-[290px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Hotel Spa"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-medium">Wellness Spa</h3>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="md:col-span-2 lg:col-span-1 h-[240px] lg:h-[290px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
                alt="Hotel Rooftop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-medium">Rooftop Bar</h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hotel;
