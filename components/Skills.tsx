'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiJavascript, SiTypescript, SiPython, SiPostgresql,
  SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiDotnet, SiExpress, SiGraphql,
  SiAmazon, SiDocker, SiKubernetes, SiGithubactions,
  SiMongodb, SiRedis, SiMysql,
  SiGit, SiJira, SiFigma
} from 'react-icons/si'
import { BiServer, BiCodeAlt } from 'react-icons/bi'
import cvData from '@/data/cvData.json'

const iconMap: { [key: string]: any } = {
  SiJavascript, SiTypescript, SiPython, SiCsharp: BiCodeAlt, SiPostgresql,
  SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiDotnet, SiExpress, SiGraphql, BiServer,
  SiAmazonaws: SiAmazon, SiMicrosoftazure: BiServer, SiDocker, SiKubernetes, SiGithubactions,
  SiMongodb, SiRedis, SiMysql,
  SiGit, SiVisualstudiocode: BiCodeAlt, SiJira, SiFigma,
  SiPostman: BiServer,
}

interface SkillCardProps {
  skill: {
    name: string
    level: number
    icon: string
  }
  index: number
}

function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = iconMap[skill.icon] || BiServer

  return (
    <motion.div
      className="gothic-card gothic-border rounded-lg p-6 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-gothic-gold text-4xl group-hover:scale-110 transition-transform">
          <Icon />
        </div>
        <span className="text-2xl font-bold text-gothic-gold">{skill.level}%</span>
      </div>
      <h4 className="text-white font-semibold text-lg mb-2">{skill.name}</h4>
      <div className="w-full bg-gothic-gray rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-gothic-gold to-gothic-accent h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { skills } = cvData
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Cloud & DevOps', items: skills.cloud },
    { title: 'Databases', items: skills.databases },
    { title: 'Tools', items: skills.tools },
  ]

  return (
    <section id="skills" className="py-20 bg-gothic-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gothic-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gothic-crimson/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-gothic text-4xl md:text-5xl font-bold text-gothic-gold mb-4 gothic-ornament">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gothic-gold mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive arsenal of modern technologies and tools
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="font-gothic text-2xl md:text-3xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="text-gothic-gold">◆</span>
                {category.title}
                <span className="flex-1 h-px bg-gradient-to-r from-gothic-gold/50 to-transparent" />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { label: 'Technologies', value: Object.values(skills).flat().length },
            { label: 'Years Experience', value: '6+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Happy Clients', value: '30+' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 gothic-border rounded-lg gothic-card"
            >
              <div className="text-4xl font-bold text-gothic-gold mb-2 font-gothic">
                {stat.value}
              </div>
              <div className="text-gray-400 uppercase tracking-wide text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

