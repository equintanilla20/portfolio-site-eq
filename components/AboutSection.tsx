'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section id="about" ref={ref} className="section-padding bg-secondary/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About
                    </h2>
                    <p className="text-xl text-primary font-semibold">
                        Ready to change the world
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-left"
                    >
                        <h3 className="text-4xl font-bold text-white">
                            Hello!
                        </h3>
                        <p className="font-bold text-white">
                            I'm Ezekiel Quintanilla
                        </p>
                        
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                Though I initially graduated from the University of Texas at Austin in 2014 with a BA in History, I  have since discovered my true passion in software development. My self-taught journey led to my first tech role as a Software QA engineer in 2016.
                            </p>
                            
                            <p>
                                Committed to learning, I earned an Associate's degree in Computer Science in 2020 while working full-time, and I'm now pursuing a Master's degree at Georgia Tech.
                            </p>
                            
                            <p>
                                I'm currently working as a Software Engineer at Whissle, Inc. where we are researching and developing cutting edge speech recognition and natural language processing technologies. I've contributed to full stack development, software testing, and our cloud based CI/CD pipelines.
                            </p>
                            
                            <p>
                                I love learning, adapting, overcoming obstacles, and am never one to back down 
                                from a challenge. Connect with me at the links below!
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="space-y-4">
                                {/* Skills */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                                    <span className="text-white font-semibold">Skills</span>
                                </div>
                                <p className="text-gray-300">Java, Spring Boot, PostgreSQL, TypeScript, Node.js, Python<br/>Full Stack Development, Software Testing, CI/CD Pipelines</p>
                                
                                {/* Experience */}
                                <div className="flex items-center space-x-3 mt-6">
                                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                                    <span className="text-white font-semibold">Experience</span>
                                </div>
                                <p className="text-gray-300"><b>WHISSLE, INC.</b><br/>Software Engineer [2025 - Current]</p>
                                <p className="text-gray-300"><b>INTERACTIONS, LLC</b><br/>Associate Application Developer [2022 - 2024]<br/>Software QA Engineer [2016 - 2022]</p>

                                {/* Education */}
                                <div className="flex items-center space-x-3 mt-6">
                                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                                    <span className="text-white font-semibold">Education</span>
                                </div>
                                <p className="text-gray-300"><b>Georgia Institute of Technology</b><br/>MS - Computer Science [Expected 2026]</p>
                                <p className="text-gray-300"><b>Austin Community College</b><br/>AS - Computer Science [2020]</p>
                                <p className="text-gray-300"><b>University of Texas at Austin</b><br/>BA - History [2014]</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}