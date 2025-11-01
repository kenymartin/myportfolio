'use client'

import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import cvData from '@/data/cvData.json'

const particleVariants = {
  animate: {
    y: [0, -20, 0],
    opacity: [0.3, 0.8, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function Hero() {
  const { personalInfo, social } = cvData

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gothic-black"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gothic-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gothic-black via-gothic-darker/50 to-gothic-black" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-gothic-gold text-lg md:text-xl mb-4 font-body tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my realm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="font-gothic text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4 font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-gothic-accent mb-8 font-gothic italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-gothic-gold to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 1, duration: 0.8 }}
          />

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="#contact"
              className="gothic-button px-8 py-3 bg-gothic-gold text-gothic-black font-semibold rounded-md hover:bg-gothic-accent transition-all duration-300 flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <HiOutlineMail size={20} />
            </a>
            <a
              href="#projects"
              className="gothic-button px-8 py-3 border-2 border-gothic-gold text-gothic-gold font-semibold rounded-md hover:bg-gothic-gold hover:text-gothic-black transition-all duration-300"
            >
              <span>View My Work</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gothic-gold transition-all duration-300 hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gothic-gold transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-gothic-gold transition-all duration-300 hover:scale-110"
            >
              <HiOutlineMail size={30} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <p className="text-sm text-gray-500 mb-2 tracking-wider uppercase">Scroll Down</p>
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gothic-gold hover:text-gothic-accent transition-colors"
            >
              <HiArrowDown size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gothic-black to-transparent" />
    </section>
  )
}

