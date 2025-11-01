'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import cvData from '@/data/cvData.json'

interface ProjectModalProps {
  project: any
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gothic-darker border-2 border-gothic-gold rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <h3 className="font-gothic text-3xl font-bold text-gothic-gold">
              {project.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          {/* Image */}
          <div className="mb-6 rounded-lg overflow-hidden gothic-border">
            <div className="w-full h-64 bg-gothic-gray flex items-center justify-center">
              <span className="text-gray-500">Project Image: {project.image}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-gothic-gold font-semibold text-lg mb-3">Features:</h4>
            <ul className="space-y-2">
              {project.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <span className="text-gothic-gold mt-1">◆</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-gothic-gold font-semibold text-lg mb-3">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gothic-gray border border-gothic-gold/30 text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gothic-gray border border-gothic-gold/30 text-white rounded-md hover:bg-gothic-gold/20 hover:border-gothic-gold transition-all"
              >
                <FaGithub size={20} />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gothic-gold text-gothic-black rounded-md hover:bg-gothic-accent transition-all"
              >
                <HiExternalLink size={20} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

interface ProjectCardProps {
  project: any
  index: number
  onClick: () => void
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="gothic-card gothic-border rounded-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-48 bg-gothic-gray overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Project Image: {project.image}</span>
        </div>
        {project.status === 'in-progress' && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gothic-gold/90 text-gothic-black text-sm rounded-full font-semibold">
            In Progress
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gothic-black to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-gothic text-2xl font-bold text-white mb-3 group-hover:text-gothic-gold transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string, i: number) => (
            <span
              key={i}
              className="px-2 py-1 bg-gothic-gray/50 border border-gothic-gold/20 text-gray-400 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-gothic-gold text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gothic-gold/20">
          <span className="text-gothic-gold text-sm font-semibold flex items-center gap-1">
            <HiCode />
            View Details
          </span>
          <div className="flex gap-2">
            {project.github && (
              <FaGithub className="text-gray-400 hover:text-gothic-gold transition-colors" size={18} />
            )}
            {project.demo && (
              <HiExternalLink className="text-gray-400 hover:text-gothic-gold transition-colors" size={18} />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { projects } = cvData
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-gothic-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gothic-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gothic-crimson/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-gothic text-4xl md:text-5xl font-bold text-gothic-gold mb-4 gothic-ornament">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gothic-gold mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my best work and passion projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href={cvData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gothic-gold text-gothic-gold font-semibold rounded-md hover:bg-gothic-gold hover:text-gothic-black transition-all duration-300"
          >
            <FaGithub size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

