"use client";
import Link from "next/link";
import Container from "../components/container/Container";
import React from "react";

const NavBar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href.split("#")[1];
        window.scrollTo({
            top: document.getElementById(href)?.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <nav className="nowrap fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 px-1 py-1 text-[#e4ded7] sm:w-[520px] md:p-2 lg:w-[580px]">
            <Container
                width="100%"
                height="50px"
                color="rgba(255, 255, 255, 0.1)"
                borderRadius={10}
                top="0px"
                left="0px"
                angle={0}
            >
                <nav className="nowrap fixed bottom-30 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 rounded-lg px-1 py-1 text-[#e4ded7] sm:w-[520px] md:p-2 lg:w-[580px]">
                    <Link
                        href="#home"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to Home Section"
                    >
                        <h4 className="py-2 px-1 text-[12px] sm:px-3 sm:text-[14px] md:py-1 md:px-3">
                            HOME
                        </h4>
                    </Link>

                    <Link
                        href="#about"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to About Section"
                    >
                        <h4 className="py-2 px-1 text-[12px] sm:px-3 sm:text-[14px] md:py-1 md:px-3">
                            ABOUT
                        </h4>
                    </Link>

                    <Link
                        href="#work"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to Work Section"
                    >
                        <h4 className="py-2 px-1 text-[12px] sm:px-3 sm:text-[14px] md:py-1 md:px-3">
                            WORK
                        </h4>
                    </Link>

                    <Link
                        href="#contact"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to Contact Section"
                    >
                        <h4 className="py-2 px-1 text-[12px] sm:px-3 sm:text-[14px] md:py-1 md:px-3">
                            CONTACT
                        </h4>
                    </Link>
                    
                    {/* Horizontal divider */}
                    <div className="mx-1 h-6 w-px bg-gray-400 opacity-50"></div>
                    
                    {/* Social Icons */}
                    <Link
                        href="https://drive.google.com/file/d/1pocUWTSzQCoZYo1AwNTuL-Zh9W6mponk/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Resume"
                        className="px-1 sm:px-2"
                    >
                        <svg className="h-5 w-5 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M16,18H8v-2h8V18z M16,14H8v-2h8V14z M13,9V3.5L18.5,9H13z" />
                        </svg>
                    </Link>
                    
                    <Link
                        href="https://github.com/sehajmakkar"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="px-1 sm:px-2"
                    >
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Link>
                    
                    <Link
                        href="https://x.com/sehajmakkarr"
                        target="_blank"
                        rel="noopener noreferrer" 
                        aria-label="X (Twitter) Profile"
                        className="px-1 sm:px-2"
                    >
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Link>
                    
                    <Link
                        href="https://linkedin.com/in/sehajmakkar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="px-1 sm:px-2"
                    >
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </Link>
                </nav>
            </Container>
        </nav>
    );
};

export default NavBar;