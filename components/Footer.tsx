'use client'

import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <footer className="bg-secondary/50 border-t border-gray-700/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="text-gray-400 text-sm">
                        © 2025 Ezekiel Quintanilla. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}