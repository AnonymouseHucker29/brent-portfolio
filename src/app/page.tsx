'use client'

import * as React from "react";
import Layout from "@/components/Layout";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex pb-52 items-center h-screen justify-center text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          <TypewriterComponent
            options={{
              strings: ["Hello there! :)", "I'm Brent Baylon", "an aspiring Web Dev"],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 40,
              cursor: "_",
              skipAddStyles: true,
            }}
          />
        </div>
      </Layout>
    </>
  )
}