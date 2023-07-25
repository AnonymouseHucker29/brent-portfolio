"use client"

import SkillsData from "@/data/SkillsData"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { PopoverClose } from "@radix-ui/react-popover"

export default function Skills() {
    return (
        <>
            <div className="flex items-center justify-center h-screen pb-52">
                {SkillsData.map((skills) => (
                    <Card
                        key={skills.id}
                        className="cursor-pointer hover:animate-pulse container mx-auto sm:px-8 md:px-10 flex flex-col items-center rounded-lg space-y-2 mt-5 w-80 sm:w-80 lg:w-[30rem] text-left relative transition-all duration-300 ease-in-out top-0 hover:-top-1 shadow-xl hover:shadow-2xl dark:hover:shadow-3xl"
                    >
                        <CardHeader>
                            <CardTitle className="text-xl">{skills.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-center">
                                {skills.icons.map((iconData) => (
                                    <div key={iconData.name} className="flex flex-col items-center">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <div className="">{iconData.logo}</div>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverClose asChild>
                                                    <div className="flex flex-col items-center space-y-2">
                                                        <div className="text-center">{iconData.name}</div>
                                                    </div>
                                                </PopoverClose>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                ))}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}