import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Project | Brent Baylon",
    description: "Personal Portfolio",
    icons: "/icons/logo.svg",
}

export default function Projects() {
    return (
        <div className="flex pb-52 items-center h-screen justify-center text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            You are in: {Projects.name}
        </div>
    )
}