'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PersonIcon } from "@radix-ui/react-icons";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        <TypewriterComponent
          options={{
            strings: ["Hello there! :)", "I'm Brent Baylon", "an aspiring Web Dev from Philippines"],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: "natural",
            cursor: "|",
          }}
        />
        <Button
          asChild
          variant="outline"
          className="mt-40 p-8 rounded-full border-2 border-purple-600 dark:border-purple-600 hover:bg-purple-600 dark:hover:bg-purple-600 animate-pulse hover:animate-none"
        >
          <Link href="/about">
            <PersonIcon className="mr-2 h-5 w-5" />Get in touch
          </Link>
        </Button>
      </div>
    </div>
  )
}