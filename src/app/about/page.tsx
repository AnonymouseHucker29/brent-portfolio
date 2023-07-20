'use client'

import AboutData from "@/data/AboutData";
import Link from "next/link";
import { Card, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen"
            initial={{ opacity: 0, translateY: "50px" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="pt-12 mb-10 text-center text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                I&apos;m online!
            </div>
            <section className="flex flex-wrap justify-center items-center gap-10">
                {AboutData.map((props) => (
                    <motion.div
                        key={props.id}
                        initial={{ opacity: 0, translateY: "8px" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.25,
                            delay: props.id * 0.05,
                            ease: "easeIn",
                        }}
                    >
                        <Link href={props.url} target="_blank">
                            <Card className="p-8 px-8 sm:px-8 md:px-10 flex flex-col items-center rounded-lg space-y-2 mt-5 w-80 sm:w-80 lg:w-[30rem] text-left relative transition-all duration-300 ease-in-out top-0 hover:-top-1 shadow-xl hover:shadow-2xl dark:hover:shadow-3xl">
                                <CardContent className="flex items-center justify-center h-full">
                                    {props.logo}
                                </CardContent>
                                <CardDescription className="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl flex items-center justify-center h-full text-black dark:text-white">
                                    {props.username}
                                </CardDescription>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </section>
        </ motion.div>
    );
}