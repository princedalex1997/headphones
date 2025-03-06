import React from 'react'
import img1 from "../assets/headphone4.png"
import { motion } from 'framer-motion'
import { fadeUp } from './Services'
import { UpdateFollower } from 'react-mouse-follower'


const Banner = () => {
    return (
        <>
            <main className='flex flex-col h-[600px] justify-around items-center lg:flex-row md:flex-row' >
                <section>
                    <UpdateFollower
                        mouseOptions={{
                            backgroundColor: "white",
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 10,
                            mixBlendMode: "difference",
                        }}
                    >

                        <motion.img
                            initial={{ opacity: 0, x: -100, rotate: -180 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                            src={img1} alt="" className='h-[300px] md:h-[500px]' />
                    </UpdateFollower>
                </section>
                <section >
                    <UpdateFollower
                        mouseOptions={{
                            backgroundColor: "white",
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 8,
                            mixBlendMode: "difference",
                        }}
                    >
                        <motion.h1
                            variants={fadeUp(0.6)}
                            initial="hidden"
                            whileInView="show"
                            className='uppercase text-3xl font-bold w-[460px]' >The Latest Head Phone with the laest techonolgy</motion.h1>
                    </UpdateFollower>
                    <UpdateFollower

                        mouseOptions={{
                            backgroundColor: "white",
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 4,
                            mixBlendMode: "difference",
                        }}>

                        <motion.p
                            variants={fadeUp(0.7)}
                            initial="hidden"
                            whileInView="show"
                            exit="exit"
                            className='w-[500px] mt-4 mb-4' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Maecenas suscipit auctor metus, eget scelerisque enim. Sed molestie metus et aliquet
                            Vestibulum ex justo, porttitor
                            vel aliquet in, molestie ac nulla. Nulla facilisi</motion.p>
                    </UpdateFollower>

                    <UpdateFollower 
                     mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 999,
                        followSpeed: 1.5,
                        scale: 6,
                        mixBlendMode: "difference",
                    }}
                     >
                        <motion.button
                            variants={fadeUp(0.9)}
                            initial="hidden"
                            whileInView="show"
                            exit="exit"
                            class="relative h-[50px] w-40 overflow-hidden border rounded-2xl border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4"><span class="relative z-10">Learn More...</span></motion.button>


                    </UpdateFollower>

                </section>
            </main>
        </>
    )
}

export default Banner