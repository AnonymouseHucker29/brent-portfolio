"use client"

import Link from "next/link"
import AboutData from "@/data/AboutData"
import { OnlineIcon } from "@/components/misc/onlineIcon"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter } from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"
import { motion } from "framer-motion"

export default function AboutSection() {

    return (
        <section className="flex flex-wrap justify-center items-center gap-6">
            {AboutData.map((about) => (
                <motion.div
                    key={about.id}
                    initial={{ opacity: 0, translateY: "8px" }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.25,
                        delay: about.id * 0.05,
                        ease: "easeIn",
                    }}
                >
                    <Dialog>
                        <DialogTrigger asChild>
                            <Card className="cursor-pointer hover:animate-pulse container mx-auto p-8 px-8 sm:px-8 md:px-10 flex flex-col items-center rounded-lg space-y-2 mt-5 w-80 sm:w-80 lg:w-[30rem] text-center relative transition-all duration-300 ease-in-out top-0 hover:-top-1 shadow-md hover:shadow-2xl dark:hover:shadow-2xl border-2 border-purple-600 dark:border-purple-600">
                                <CardContent className="flex items-center h-full w-full p-2 sm:mr-8 md:mr-8 lg:mr-0 xl:-mr-8">
                                    <div className="scale-75 sm:scale-50 md:scale-75 lg:scale-90 xl:scale-100">
                                        {about.logo}
                                    </div>
                                    <div className="sm:text-lg md:text-lg lg:text-3xl xl:text-2xl text-black dark:text-white ml-4">
                                        <div className="flex text-xs items-center">
                                            {about.title}<OnlineIcon />
                                        </div>
                                        <div className="flex text-lg">
                                            {about.username}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="rounded-xl border-purple-600 dark:border-purple-600">
                            <DialogHeader>
                                <DialogTitle>
                                    You are going to {about.title} page!
                                </DialogTitle>
                            </DialogHeader>
                            <DialogDescription className="break-all">
                                Link:<br />{about.url}
                            </DialogDescription>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button
                                        asChild
                                        className="text-center bg-purple-500 dark:bg-purple-500 hover:bg-purple-600 dark:hover:bg-purple-600"
                                    >
                                        <Link
                                            href={about.url}
                                            target="_blank"
                                            rel="noopener noreferrer preload"
                                            as={about.url}
                                        >
                                            Open in new tab
                                        </Link>
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </motion.div>
            ))}
        </section>
    )
}