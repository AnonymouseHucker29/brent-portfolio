"use client"

import SkillsData from "@/data/SkillsData"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { motion } from "framer-motion"

export default function SkillsSection() {

    return (
        <section className="flex flex-wrap items-center justify-center gap-6">
            {SkillsData.map((skills) => (
                <motion.div
                    key={skills.id}
                    initial={{ opacity: 0, translateY: "8px" }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.25,
                        delay: skills.id * 0.05,
                        ease: "easeIn",
                    }}
                >
                    <Card className="container mx-auto sm:px-8 md:px-10 flex flex-col items-center rounded-lg space-y-2 mt-5 w-80 sm:w-80 lg:w-[30rem] text-center relative transition-all duration-300 ease-in-out top-0 hover:-top-1 shadow-xl hover:shadow-2xl dark:hover:shadow-3xl">
                        <CardHeader>
                            <CardTitle className="text-xl">{skills.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap justify-center space-x-3">
                                {skills.icons.map((iconData) => (
                                    <div key={iconData.name}>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <div>
                                                    <div className="hover:animate-pulse cursor-pointer scale-75 sm:scale-75 md:scale-90 lg:scale-90 xl:scale-100">{iconData.logo}</div>
                                                </div>
                                            </PopoverTrigger>
                                            <PopoverContent className="flex items-center text-justify tracking-tighter">
                                                <div>
                                                    <span className="flex justify-center text-xl">
                                                        {iconData.name}
                                                    </span>
                                                    <br />
                                                    <p>{iconData.description}</p>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </section>
    )
}