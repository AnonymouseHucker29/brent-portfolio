import SkillsContent from "./content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Brent Baylon",
  description: "Personal Portfolio",
  icons: "/icons/logo.svg",
};

export default function Skills() {
  return <SkillsContent />;
}
