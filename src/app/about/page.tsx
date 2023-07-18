'use client'

import Layout from "@/components/Layout"

export default function About() {
    return (
        <>
            <Layout>
                <div className="flex pb-52 items-center h-screen justify-center text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                    You are in: {About.name}
                </div>
            </Layout>
        </>
    )
}