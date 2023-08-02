"use client"

import Link from "next/link"
import ThemeToggle from "@/components/ThemeToggle"
import NavbarData from "@/data/NavbarData"
import { useState } from "react"
import { Fade as Hamburger } from "hamburger-react"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/misc/logo"

export let Navbar = () => {

    const router = usePathname()

    function isLinkActive(link: string) {
        return router === link
    }

    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <header className="max-w-7xl mx-auto px-8 md:px-8 flex items-center justify-between h-24">
            <Link
                href="/"
                onClick={() => setMobileMenu(false)}
            >
                <div className="flex items-center">
                    <Logo aria-label="Logo" />
                </div>
            </Link>
            <nav className="flex gap-6 items-center">
                <div className="flex items-center md:hidden">
                    <Hamburger
                        toggled={mobileMenu}
                        toggle={setMobileMenu}
                        size={24}
                        rounded
                        label="Show menu"
                        hideOutline
                        duration={0.5}
                        color="#af4bfb"
                    />
                </div>
                <ul
                    onClick={() => setMobileMenu(false)}
                    className={`md:flex md:items-center z-[1] text-center md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 space-x-4 transition-all ease-in-out duration-500 ${mobileMenu ? "top-[95px]" : "top-[-400px]"}`}
                >
                    {NavbarData.map((links) => (
                        <Link
                            rel="preload"
                            as={links.url}
                            key={links.id}
                            href={links.url}
                            className={`text-base active:animate-wiggle sm:text-xl px-3 py-2 rounded-lg transition duration-500 ease-in-out ${isLinkActive(links.url)
                                ? "bg-purple-600"
                                : "hover:bg-purple-400"
                                }`}
                            target={links.target}
                        >
                            {links.title}
                        </Link>
                    ))}
                </ul>
                <div className="flex items-center">
                    <ThemeToggle />
                </div>
            </nav>
        </header >
    )
}