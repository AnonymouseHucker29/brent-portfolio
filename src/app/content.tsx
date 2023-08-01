"use client"

import TypewriterComponent from "typewriter-effect"
import { EmailBtn } from "@/components/EmailBtn"
import { motion } from "framer-motion"


export default function HomeContent() {

    return (
        <motion.main
            className="flex items-center justify-center h-screen -mb-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <div className="h-32 overflow-hidden">
                    <TypewriterComponent
                        options={{
                            strings: ["Hello there!", "I'm Brent Baylon", "an aspiring Web Dev from Philippines"],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: "natural",
                            cursor: "|",
                        }}
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <EmailBtn />
                </motion.div>
            </div>
        </motion.main>
    )
}