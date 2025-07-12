'use client'

import { motion } from 'framer-motion'
import IntroSection from '@/components/IntroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen bg-secondary">
            <Navigation />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <IntroSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
            </motion.div>
        </main>
    );
};