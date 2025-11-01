'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import cvData from '@/data/cvData.json'

export default function Contact() {
  const { personalInfo, social } = cvData
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // EmailJS Configuration
    // Get these values from: https://dashboard.emailjs.com/
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS not configured. Please set environment variables.')
      setErrorMessage('EmailJS is not configured. Please set up your EmailJS credentials in .env.local file. See EMAILJS_SETUP.md for instructions.')
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 5000)
      return
    }

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
        to_email: personalInfo.email, // Your email address
      }

      // EmailJS v3 requires User ID (not Public Key) - get from Account > General
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      // Success
      setStatus('success')
      setFormState({ name: '', email: '', subject: '', message: '' })
      setErrorMessage('')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error: any) {
      console.error('EmailJS Error:', error)
      
      // Provide more specific error messages
      let message = 'Oops! Something went wrong. Please try again.'
      
      if (error?.text) {
        message = `Error: ${error.text}`
      } else if (error?.message) {
        message = `Error: ${error.message}`
      } else if (error?.status) {
        message = `EmailJS error (${error.status}). Please check your configuration.`
      }
      
      setErrorMessage(message)
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gothic-darker relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gothic-gold/5 rounded-full blur-3xl" />
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gothic-gold mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let&apos;s collaborate and create something extraordinary together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-gothic text-3xl font-bold text-white mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gothic-gold/20 rounded-lg flex items-center justify-center text-gothic-gold group-hover:bg-gothic-gold group-hover:text-gothic-black transition-all">
                  <HiMail size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-white hover:text-gothic-gold transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gothic-gold/20 rounded-lg flex items-center justify-center text-gothic-gold group-hover:bg-gothic-gold group-hover:text-gothic-black transition-all">
                  <HiPhone size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gothic-gold/20 rounded-lg flex items-center justify-center text-gothic-gold group-hover:bg-gothic-gold group-hover:text-gothic-black transition-all">
                  <HiLocationMarker size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-gothic-gold font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gothic-gray border border-gothic-gold/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-gothic-gold hover:border-gothic-gold hover:bg-gothic-gold/10 transition-all"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gothic-gray border border-gothic-gold/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-gothic-gold hover:border-gothic-gold hover:bg-gothic-gold/10 transition-all"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gothic-gray border border-gothic-gold/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-gothic-gold hover:border-gothic-gold hover:bg-gothic-gold/10 transition-all"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gothic-gray border border-gothic-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gothic-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gothic-gray border border-gothic-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gothic-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gothic-gray border border-gothic-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gothic-gold transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gothic-gray border border-gothic-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gothic-gold transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full gothic-button px-8 py-4 bg-gothic-gold text-gothic-black font-semibold rounded-lg hover:bg-gothic-accent transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                </span>
                <HiPaperAirplane size={20} />
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-500 font-semibold"
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <p className="text-red-500 font-semibold mb-2">
                    Oops! Something went wrong.
                  </p>
                  {errorMessage && (
                    <p className="text-red-400 text-sm">
                      {errorMessage}
                    </p>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

