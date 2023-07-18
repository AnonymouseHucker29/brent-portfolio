'use client'

import * as React from "react";
import Layout from "@/components/Layout";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex justify-center items-center h-screen text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <TypewriterComponent
            options={{
              strings: ["Hello there! :)", "I'm Brent Baylon", "an aspiring Web Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </Layout>
    </>
  )
}