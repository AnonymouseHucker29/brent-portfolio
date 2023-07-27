"use client"

import SkillsSection from "./section"
import { motion } from "framer-motion"

export default function Skills() {
    return (
        <>
            <motion.div
                className="flex flex-col items-center justify-center min-h-screen"
                initial={{ opacity: 0, translateY: "50px" }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="pt-12 mb-10 text-center text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                    Skills
                </div>
                <SkillsSection />
            </motion.div>
        </>
    )
}