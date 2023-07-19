'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/theme-toggle';
import NavbarData from '@/data/NavbarData';
import { Fade as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/logo';

let Header = () => {

    const router = usePathname();

    function isLinkActive(link: string) {
        return router === link;
    }

    const [mobileMenu, setMobileMenu] = useState(false);

    // const [mounted, setMounted] = useState(false);

    // useEffect(() => {
    //     setMounted(true);
    // }, []);

    // if (!mounted) return null;

    const handleNavLinkClick = () => {
        setTimeout(() => {
            setMobileMenu(false);
        }, 300);
    };

    return (
        <>
            <header className="max-w-7xl mx-auto pl-8 pr-4 sm:px-8 md:mx-8 flex xl:mx-auto h-24 items-center justify-between">
                <Link
                    href="/"
                    onClick={() => setMobileMenu(false)}
                    className="z-10"
                >
                    <div className='flex'>
                        <Logo aria-label="Logo" />
                        <span className='text-xl sm:text-2xl underline'>rent</span>
                    </div>
                </Link>
                <nav className="flex gap-6">
                    <div className="flex justify-center gap-5 items-center">
                        <span className="md:hidden z-10">
                            <Hamburger
                                toggled={mobileMenu}
                                toggle={setMobileMenu}
                                size={24}
                                rounded
                                label="Show menu"
                                hideOutline
                                duration={0.5}
                            />
                        </span>
                    </div>
                    <ul
                        onClick={handleNavLinkClick}
                        className={`md:flex md:items-center z-[1] text-center md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 space-x-4 transition-all ease-in-out duration-500 ${mobileMenu ? "top-[95px]" : "top-[-400px]"
                            }`}
                    >
                        {NavbarData.map((props) => (
                            <Link
                                key={props.id}
                                href={props.url}
                                className={`text-base active:animate-wiggle sm:text-xl px-3 py-2 rounded-lg transition duration-500 ease-in-out ${isLinkActive(props.url)
                                    ? 'bg-purple-600'
                                    : 'hover:bg-purple-400'
                                    }`}
                                target={props.target}
                            >
                                {props.title}
                            </Link>
                        ))}
                    </ul>
                    <div className='flex items-center'>
                        <ThemeToggle />
                    </div>
                </nav>
            </header >
        </>
    );
};

export default Header;