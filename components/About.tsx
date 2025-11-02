'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import cvData from '@/data/cvData.json'

export default function About() {
  const { personalInfo, education, certifications } = cvData
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-20 bg-gothic-darker relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gothic-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gothic-crimson/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-gothic text-4xl md:text-5xl font-bold text-gothic-gold mb-4 gothic-ornament">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gothic-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="gothic-border rounded-lg overflow-hidden aspect-square max-w-md mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-gothic-gray to-gothic-dark flex items-center justify-center relative">
                {personalInfo.photo ? (
                  <Image
                    src={personalInfo.photo}
                    alt={`${personalInfo.name} profile photo`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gothic-lightgray/30 flex items-center justify-center mb-4">
                      <span className="text-6xl font-gothic text-gothic-gold">
                        {personalInfo.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 italic">
                      Replace with your photo at {personalInfo.photo}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-gothic text-3xl font-semibold text-white mb-4">
              {personalInfo.title.split('|')[0].trim()}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {personalInfo.summary}
            </p>

            {/* Quick Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-gothic-gold font-semibold min-w-[100px]">Location:</span>
                <span className="text-gray-300">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gothic-gold font-semibold min-w-[100px]">Email:</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-gothic-gold transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Education */}
            {education && education.length > 0 && (
              <div className="mb-6">
                <h4 className="font-gothic text-xl text-gothic-gold mb-3">Education</h4>
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-gothic-gold/30 pl-4 mb-2">
                    <p className="text-white font-semibold">{edu.degree}</p>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.endDate}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <div>
                <h4 className="font-gothic text-xl text-gothic-gold mb-3">Certifications</h4>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-gothic-gold mt-1">◈</span>
                      <div>
                        <p className="text-white">{cert.name}</p>
                        <p className="text-sm text-gray-400">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

