import React from 'react'
import img1 from "../assets/blogs/blog1.jpg"
import img2 from "../assets/blogs/blog2.jpg"
import img3 from "../assets/blogs/blog3.jpg"
import img4 from "../assets/blogs/blog4.jpg"
import { motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'

const blogsList = [
    {
        id: 1,
        title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Maecenas suscipit auctor metus, eget scelerisque enim. 
                        Vestibulum ex justo, porttitor`,
        img: img1,
        delay: 0.2,
    },
    {
        id: 2,
        title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Maecenas suscipit auctor metus, eget scelerisque enim. 
                        Vestibulum ex justo, porttitor`,
        img: img2,
        delay: 0.4,
    },
    {
        id: 3,
        title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Maecenas suscipit auctor metus, eget scelerisque enim. 
                        Vestibulum ex justo, porttitor`,
        img: img3,
        delay: 0.6,
    },
    {
        id: 4,
        title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Maecenas suscipit auctor metus, eget scelerisque enim. 
                        Vestibulum ex justo, porttitor`,
        img: img4,
        delay: 0.8,
    },
]

const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: -90
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

// #353839

const Blogs = () => {
    return (
        <main className='flex flex-col justify-center items-center mt-6' >
            <section>
                <UpdateFollower 
                mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                }}  >

                <h1 className='text-4xl text-white transition-transform duration-200 hover:scale-125' >Blogs</h1>
                </UpdateFollower>
            </section>
            <section className='flex flex-row  flex-wrap p-5 gap-3 my-3 justify-center items-center   ' >
                {blogsList.map((blogs) => (
                    <motion.div
                        variants={fadeUp(blogs.delay)}
                        initial="hidden"
                        whileInView="show"
                        key={blogs.id}
                        className=' bg-[#353839] max-w-[290px] max-h-[320px]  rounded-4xl  flex flex-col justify-center items-center p-5 transition-transform duration-300 ease-in-out' >
                        <img src={blogs?.img} alt={blogs?.title} className='w-[290px] rounded-2xl transition-transform duration-300 hover:scale-116 ' />
                      <UpdateFollower 
                       mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 999,
                        followSpeed: 1.5,
                        scale: 4,
                        mixBlendMode: "difference",
                    }} 
                      >

                        <p className='pt-3 text-left' > {blogs?.title} </p>
                      </UpdateFollower>
                    </motion.div>
                ))}
            </section>
        </main>
    )
}

export default Blogs