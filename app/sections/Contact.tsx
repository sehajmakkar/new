import Link from "next/link";
import { inter } from "../fonts/inter";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords from "../animations/AnimatedWords";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";

const Contact = () => {
    return (
        <motion.section
            className="relative z-10 flex min-h-[100vh] w-full items-center justify-center overflow-hidden py-10 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
            id="contact"
            initial="initial"
            animate="animate"
        >
            <ContactBackground />
            <div className="mx-auto flex w-[95%] flex-col items-center justify-center pt-10 md:w-[90%] md:pt-0">
                <div
                    className={`flex flex-col items-center justify-center ${inter.className} relative w-full sm:items-center lg:max-w-[1440px]`}
                >
                    <AnimatedWords
                        title={"contact"}
                        style={
                            "flex max-w-full flex-col items-center text-center text-[70px] font-extrabold uppercase leading-[1.2em] text-[#e4ded7] sm:text-[100px] md:text-[150px] lg:text-center lg:text-[120px] xl:text-[250px]"
                        }
                    />
                </div>

                <div className="mt-12 flex w-full flex-col items-center justify-center gap-10 sm:mt-20 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
                    <div className="flex w-full max-w-[90%] flex-col items-center text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
                        <AnimatedBody
                            text={
                                "Got a question, proposal, project, or want to work together on something?"
                            }
                            className={
                                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                            }
                        />
                        <Link
                            href="mailto:sehajpreett10@gmail.com?subject=Lets%20work%20together!&amp;body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can"
                            target="_blank"
                            aria-label="Send me an email"
                            className="mt-4 w-auto flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4"
                        >
                            <AnimatedBody text={"Send me an email"} className={""} />
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-[16px] font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:flex-nowrap md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
                        <Link
                            href="https://x.com/sehajmakkarr"
                            target="_blank"
                            aria-label="View Twitter Profile"
                            className="px-2"
                        >
                            <AnimatedTitle
                                text={"TWITTER"}
                                className={
                                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                        <Link
                            href="https://github.com/sehajmakkar"
                            target="_blank"
                            aria-label="View GitHub Profile"
                            className="px-2"
                        >
                            <AnimatedTitle
                                text={"GITHUB"}
                                className={
                                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/sehajmakkar/"
                            target="_blank"
                            aria-label="View LinkedIn Profile"
                            className="px-2"
                        >
                            <AnimatedTitle
                                text={"LINKEDIN"}
                                className={
                                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;