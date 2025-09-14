import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "contact@bimmodeler.com",
      description: "Send me a message anytime"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call for urgent inquiries"
    },
    {
      icon: "📍",
      title: "Location",
      value: "New York, NY",
      description: "Available for remote work"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/bimmodeler",
      description: "Connect professionally"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#333333]">
      {/* Header */}
      <div className="bg-[#333333] text-[#F8F8F8] py-8">
        <div className="max-w-screen-xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-[#14CF93] hover:text-white transition-colors duration-300 mb-4">
            <IoIosArrowRoundBack className="text-2xl mr-2" />
            Back to Home
          </Link>
          <h1 className="text-[8vw] font-Montreal font-medium">
            Get In <span className="font-Mazius text-[#14CF93]">T</span>ouch
          </h1>
          <p className="text-xl text-[#F8F8F8]/80 mt-4 max-w-2xl">
            Ready to start your next BIM project? Let's discuss how I can help bring your vision to life.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-Montreal font-medium mb-8 text-[#333333]">
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14CF93] focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14CF93] focus:border-transparent transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14CF93] focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14CF93] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="educational">Educational</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14CF93] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project requirements, timeline, and any specific BIM modeling needs..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#14CF93] text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-[#12B885] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
                >
                  Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-Montreal font-medium mb-8 text-[#333333]">
                Contact Information
              </h2>
              <p className="text-lg text-[#666666] leading-relaxed mb-8">
                I'm always excited to discuss new BIM projects and help bring your architectural visions to life. 
                Whether you need 3D modeling, MEP coordination, or full project support, I'm here to help.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-3xl">{info.icon}</div>
                  <div>
                    <h3 className="font-medium text-[#333333] text-lg">{info.title}</h3>
                    <p className="text-[#14CF93] font-medium">{info.value}</p>
                    <p className="text-[#666666] text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-[#14CF93] to-[#1430D4] p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-Montreal font-medium mb-4">
                Why Work With Me?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Expert BIM modeling with 5+ years experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Proven track record of successful project delivery
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Advanced MEP coordination and clash detection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Collaborative approach with all project stakeholders
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
