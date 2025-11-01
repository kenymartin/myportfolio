'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'
import cvData from '@/data/cvData.json'

export default function Footer() {
  const { personalInfo, social } = cvData
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gothic-black border-t border-gothic-gold/20 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gothic-gold to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              className="font-gothic text-3xl font-bold text-gothic-gold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </motion.h3>
            <p className="text-gray-400 mb-4">
              {personalInfo.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gothic-gold transition-all hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gothic-gold transition-all hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gothic-gold transition-all hover:scale-110"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-gothic text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gothic-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-gothic-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      ◆
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-gothic text-xl font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-gothic-gold transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>{personalInfo.phone}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gothic-gold/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-center md:text-left flex items-center gap-2">
              © {currentYear} {personalInfo.name}. Made with{' '}
              <FaHeart className="text-gothic-crimson" /> and dark magic.
            </p>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 border border-gothic-gold/30 text-gray-400 rounded-md hover:border-gothic-gold hover:text-gothic-gold hover:bg-gothic-gold/10 transition-all"
            >
              <span>Back to Top</span>
              <HiArrowUp className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Tech Stack Note */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Built with Next.js 14, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

