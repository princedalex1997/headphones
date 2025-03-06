import React from 'react'
import { motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'


export const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: 100
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

const BannerText = () => {
    return (
       

        <motion.section
            variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="show"
            className='py-12 text-center bg-[#493B3B] rounded-3xl'>
            <div>
                <div>
                <UpdateFollower
        mouseOptions={{
            backgroundColor: "white",
            zIndex: 999,
            followSpeed: 1.5,
            scale: 6,
            mixBlendMode: "difference",
        }} 
        >
                    <p className='text-3xl font-bold px-2 text-white hover:scale-105 transition-transform duration-300 ease-in-out' >Headphones with good quality  & Affordable price</p>
        </UpdateFollower>
                </div>
            </div>
        </motion.section>
    )
}

export default BannerText