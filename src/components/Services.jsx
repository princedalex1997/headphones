import React from 'react'
import obj1 from "../assets/icons/obj1.png"
import obj2 from "../assets/icons/obj2.png"
import obj3 from "../assets/icons/obj3.png"
import obj4 from "../assets/icons/obj4.png"
import { UpdateFollower } from 'react-mouse-follower'
import { easeInOut, motion } from 'framer-motion'
import { delay } from 'motion'
// import { delay } from 'motion'

const headphones = [
    {
        id: 1,
        title: "Top-Notch Security",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Maecenas suscipit auctor metus, eget scelerisque enim. 
                        Vestibulum ex justo, porttitor`,
        icon: obj1, // Replace with an actual icon if needed
        bgColor: "#1E3A8A", // Dark blue for trust
        delay: 0.2,
    },
    {
        id: 2,
        title: "Guaranteed Warranty",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Maecenas suscipit auctor metus, eget scelerisque enim. 
        Vestibulum ex justo, porttitor`,
        icon: obj2,
        bgColor: "#047857",
        delay: 0.4,  // Green for reliability
    },
    {
        id: 3,
        title: "Affordable Pricing",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Maecenas suscipit auctor metus, eget scelerisque enim. 
        Vestibulum ex justo, porttitor`,
        icon: obj3,
        bgColor: "#F59E0B",
        delay: 0.6,  // Yellow for affordability
    },
];

export const fadeUp = (delay) => {
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

const Services = () => {
    return (
        <main className='bg-[#535250] text-black flex flex-col justify-center pt-5 items-center' >
            <h2 className='mb-3 font-extrabold text-5xl' >Services</h2>
            <section className='grid grid-cols-1  mb-5 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 border-0 ga ' >

                {headphones.map((item) => (
                    <motion.div
                        variants={fadeUp(item.delay)}
                        initial="hidden"
                        whileInView="show"
                        key={item.id} className='rounded-3xl mx-3 flex flex-col justify-center items-center shadow-[0_35px_50px_-15px_rgba(0,0,0,0.3)]
                    transition-transform duration-300 ease-in-out hover:-translate-y-2 sm:gap-4 mb-5 '  >
                        <img src={item.icon} alt={item.title} className='w-[100px]' />
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 999,
                                followSpeed: 1.5,
                                scale: 6,
                                mixBlendMode: "difference",
                            }} >
                            <motion.h1 className='text-2xl font-bold' >{item.title} </motion.h1>
                        </UpdateFollower>
                        <UpdateFollower mouseOptions={{
                            backgroundColor: "white",
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 4,
                            mixBlendMode: "difference",
                        }}>

                            <h4 className='px-4 py-2 text-left'>{item.description} </h4>
                        </UpdateFollower>
                    </motion.div>
                ))}
            </section>

        </main>
    )
}

export default Services

