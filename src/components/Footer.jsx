import React from 'react'
import { MdAddIcCall } from "react-icons/md";
import { HiHomeModern } from "react-icons/hi2";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import img1 from "../assets/cards.webp"
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';


const fadeLeft = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: 90
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: "easeInOut",
            }
        },
    }
}
const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 90
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: "easeInOut",
            }
        },
    }
}

const Footer = () => {
    return (
        <>
            <footer className='mb-10' >
                <p className='w-full h-[1px] bg-white' ></p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-6 mt-5 ' >
                    <motion.section
                        variants={fadeLeft(0.6)}
                        initial="hidden"
                        whileInView="show"
                        className=' px-3  '>
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 999,
                                followSpeed: 1.5,
                                scale: 6,
                                mixBlendMode: "difference",
                            }}
                        >
                            <motion.h1
                                className='text-3xl font-bold pb-4 w-60' >Exdous Shop</motion.h1>
                        </UpdateFollower>
                        <article>
                            <p className='pl-2 pb-3' >Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                Maecenas suscipit auctor metus, dolor sit amet,consectetur adipiscing elit </p>
                        </article>
                        <h3 className='flex items-center gap-2' >  <MdAddIcCall /> +9182883875568</h3>
                        <h3 className='flex items-center gap-2' > <HiHomeModern /> 1485 NW Street St Wilson WY 83014</h3>
                        <article></article>
                    </motion.section>
                    <motion.section
                        variants={fadeLeft(0.7)}
                        initial="hidden"
                        whileInView="show"
                        className=' px-3 mt-[90px] md:mt-0 ' >
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 999,
                                followSpeed: 1.5,
                                scale: 6,
                                mixBlendMode: "difference",
                            }}
                        >

                            <h1 className='text-3xl font-bold pb-4  w-60' >Quck Links</h1>
                        </UpdateFollower>
                        <div className='pl-2 gap-4 ' >
                            <p className='transition-transform duration-300 delay-75  hover:scale-110 hover:underline cursor-pointer  w-20'>Home</p>
                            <p className='transition-transform duration-300 delay-75  hover:scale-110 hover:underline cursor-pointer w-20'>About</p>
                            <p className='transition-transform duration-300 delay-75  hover:scale-110 hover:underline cursor-pointer w-20'>Blog</p>
                            <p className='transition-transform duration-300 delay-75  hover:scale-110 hover:underline cursor-pointer w-20' >Contact</p>
                        </div>
                    </motion.section>
                    <motion.section
                        variants={fadeUp(0.7)}
                        initial="hidden"
                        whileInView="show"
                        className=' px-3 ' >
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 999,
                                followSpeed: 1.5,
                                scale: 6,
                                mixBlendMode: "difference",
                            }}
                        >

                            <h1 className='text-3xl font-bold pb-4 w-60' >Follow as</h1>
                        </UpdateFollower>
                        <div className='flex flex-row  gap-10 pb-4 cursor-pointer' >
                            <FaFacebookF fontSize={24} />
                            <FaInstagramSquare fontSize={24} />
                            <BsGoogle fontSize={24} />
                            <FaYoutube fontSize={24} />
                        </div>
                        <div>
                            <h1 className='pt-3 pb-5' >Payment Methords</h1>
                            <img src={img1} alt="" />
                        </div>
                    </motion.section>
                </div>
            </footer>
        </>
    )
}

export default Footer