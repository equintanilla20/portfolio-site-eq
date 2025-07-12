'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
    title: string
    description: string
    link: string
    bg: string
    tags: string[]
};

function ProjectCard({ title, description, link, bg, tags }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="project-card bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
        >
            <div className="h-64 p-4 w-full rounded-lg mb-4 flex flex-col" style={{ background: bg }}>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-gray-300 leading-relaxed">{description}</p>
                </div>
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                        <span>View Project</span>
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const projects = [
        {
            title: "Discrete Time Event Simulator",
            description: "Simulation of the scheduling and running of processes on a CPU with a priority queue, arrival/departure handlers for processes, and variable lambda and average service time values.",
            link: "https://github.com/equintanilla20/CS3360/tree/main/pa2",
            bg: "linear-gradient(135deg, #1e1b4b 0%, #141821 100%)",
            tags: ["C++", "VSCode"]
        },
        {
            title: "Sudoku Solver",
            description: "An application using a backtracking algorithm to solve Sudoku puzzles",
            link: "https://github.com/equintanilla20/javaOOP/tree/master/JavaSudokuFinal",
            bg: "linear-gradient(135deg, #1e3a8a 0%, #141821 100%)",
            tags: ["Java", "Eclipse"]
        },
        {
            title: "Jammming",
            description: "A webapp used to build Spotify playlists and save them to the user's account - Made for the Codecademy Build Front End Webapps course & certification",
            link: "https://equintanilla20.github.io/jammming_v2",
            bg: "linear-gradient(135deg, #15803d 0%, #141821 100%)",
            tags: ["Javascript", "React", "Node", "VSCode"]
        },
        {
            title: "Ravenous",
            description: "A webapp for searching cuisines in a given city - Made for the Codecademy Build Front End Webapps course & certification",
            link: "https://equintanilla20.github.io/ravenous",
            bg: "linear-gradient(135deg, #991b1b 0%, #141821 100%)",
            tags: ["Javascript", "React", "Node", "VSCode"]
        }
    ];

    return (
        <section id="projects" ref={ref} className="section-padding">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        GitHub Projects
                    </h2>
                    <p className="text-xl text-gray-300">
                        Check out some of my projects below!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/equintanilla20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                    >
                        <Github size={20} />
                        <span>View More on GitHub</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};