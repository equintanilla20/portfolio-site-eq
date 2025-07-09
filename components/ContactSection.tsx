'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'

export default function ContactSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const contactLinks = [
        {
            name: 'Email',
            href: 'mailto:equintanilla20@gmail.com',
            icon: Mail,
            description: 'Send me an email'
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/equintanilla20/',
            icon: Linkedin,
            description: 'Connect on LinkedIn'
        },
        {
            name: 'GitHub',
            href: 'https://www.github.com/equintanilla20',
            icon: Github,
            description: 'Check out my GitHub'
        }
    ]

    return (
        <section id="contact" ref={ref} className="section-padding bg-secondary/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-300">
                        Let's connect and build something amazing together
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                {contactLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-200">
                                <link.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-200">
                                    {link.name}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {link.description}
                                </p>
                            </div>
                        </div>
                    </motion.a>
                ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-400">
                        I'm always open to new opportunities and collaborations. 
                        Don't hesitate to reach out!
                    </p>
                </motion.div>
            </div>
        </section>
    )
}