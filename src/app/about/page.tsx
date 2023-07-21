'use client'

import AboutData from "@/data/AboutData";
import Link from "next/link";
import { Card, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { OnlineIcon } from "@/components/ui/onlineIcon";
import { Dialog, DialogTrigger, DialogHeader, DialogTitle, DialogContent, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
                        <Dialog>
                            <DialogTrigger asChild>
                                <Card className="cursor-pointer hover:animate-pulse container mx-auto p-8 px-8 sm:px-8 md:px-10 flex flex-col items-center rounded-lg space-y-2 mt-5 w-80 sm:w-80 lg:w-[30rem] text-left relative transition-all duration-300 ease-in-out top-0 hover:-top-1 shadow-xl hover:shadow-2xl dark:hover:shadow-3xl">
                                    <CardContent className="flex items-center h-full w-full p-2 sm:mr-8 md:mr-8 lg:mr-0 xl:-mr-8">
                                        <div className="scale-75 sm:scale-50 md:scale-75 lg:scale-90 xl:scale-100">
                                            {props.logo}
                                        </div>
                                        <div className="sm:text-lg md:text-lg lg:text-3xl xl:text-2xl text-black dark:text-white ml-4">
                                            <div className="flex text-xs items-center">
                                                {props.title}<OnlineIcon />
                                            </div>
                                            <div className="flex text-lg">
                                                {props.username}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        You are going to {props.title} page!
                                    </DialogTitle>
                                </DialogHeader>
                                <DialogDescription>
                                    Link:<br />{props.url}
                                </DialogDescription>
                                <DialogFooter>
                                    <Button
                                        asChild
                                        className="bg-purple-500 dark:bg-purple-500 hover:bg-purple-600 dark:hover:bg-purple-600"
                                    >
                                        <Link href={props.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Open in new tab
                                        </Link>
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </motion.div>
                ))}
            </section>
        </ motion.div>
    );
}