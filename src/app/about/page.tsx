import AboutContent from "./content"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About | Brent Baylon",
    description: "Personal Portfolio",
    icons: "/icons/logo.svg",
}

export default function About() {

    return <AboutContent />
}