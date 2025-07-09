'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function IntroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 gradient-bg opacity-10"></div>
            
            {/* Animated background shapes */}
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl"
            />
            <motion.div
                animate={{
                    rotate: -360,
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-xl"
            />

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Hi, I'm{' '}
                        <span className="text-primary">Zeke</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8"
                    >
                        Software engineer and masters student at Georgia Tech!
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex justify-center space-x-4"
                    >
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                        >
                        Learn More
                        </motion.a>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-secondary transition-colors duration-200"
                        >
                            View Projects
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                <ChevronDown className="text-gray-400 w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    )
}