'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOfficeBuilding, HiCalendar, HiLocationMarker } from 'react-icons/hi'
import cvData from '@/data/cvData.json'

interface ExperienceItemProps {
  experience: {
    company: string
    position: string
    location: string
    startDate: string
    endDate: string | null
    current: boolean
    description: string
    achievements: string[]
    technologies: string[]
  }
  index: number
  isLast: boolean
}

function ExperienceItem({ experience, index, isLast }: ExperienceItemProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <motion.div
      className="relative pb-12"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-1/2 top-12 bottom-0 w-0.5 bg-gradient-to-b from-gothic-gold to-gothic-gold/20 hidden md:block" />
      )}

      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-8 w-4 h-4 bg-gothic-gold rounded-full border-4 border-gothic-darker transform -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          className="absolute inset-0 rounded-full bg-gothic-gold"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content Card */}
      <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
        <div className="gothic-card gothic-border rounded-lg p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            {experience.current && (
              <span className="inline-block px-3 py-1 bg-gothic-gold/20 text-gothic-gold text-sm rounded-full mb-4">
                Current Position
              </span>
            )}
            <h3 className="font-gothic text-2xl font-bold text-white mb-2">
              {experience.position}
            </h3>
            <div className="flex flex-col gap-2 text-gray-400">
              <div className="flex items-center gap-2">
                <HiOfficeBuilding className="text-gothic-gold" />
                <span className="font-semibold text-gothic-gold">{experience.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiLocationMarker className="text-gothic-gold" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCalendar className="text-gothic-gold" />
                <span>
                  {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4 italic">{experience.description}</p>

          {/* Achievements */}
          <div className="mb-6">
            <h4 className="text-gothic-gold font-semibold mb-3">Key Achievements:</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <span className="text-gothic-gold mt-1 flex-shrink-0">◆</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-gothic-gold font-semibold mb-3">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gothic-gray/50 border border-gothic-gold/30 text-gray-300 rounded-full text-sm hover:bg-gothic-gold/10 hover:border-gothic-gold/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { experience } = cvData
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-gothic-darker relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gothic-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gothic-crimson/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-gothic text-4xl md:text-5xl font-bold text-gothic-gold mb-4 gothic-ornament">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gothic-gold mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my career growth and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experience.map((exp, index) => (
            <ExperienceItem
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

