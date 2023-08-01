import HomeContent from "./content"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home | Brent Baylon",
  description: "Personal Portfolio",
  icons: "/icons/logo.svg",
}

export default function Home() {
  return <HomeContent />
}