import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'
import image1 from "../assets/headphone.png"
import image2 from "../assets/headphone2.png"
import image3 from "../assets/headphone3.png"
import image4 from "../assets/headphone4.png"
import { easeInOut } from 'motion'
import { AnimatePresence } from 'framer-motion'
import { motion } from "framer-motion";



 const fadeUp = (delay) => ({
    hidden: {
        opacity: 1,
        y: 100,
        scale: 0.0
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: delay,
            ease: easeInOut,
        },
    },
    exit: {
        opacity: 0,
        y: 50,
        scale: 0.5,
        transition: {
            duration: 0.2,
            ease: easeInOut,
        },
    }


})

const headphones = [
    {
        id: 1,
        title: "Head Phone Wireless",
        image: image1,
        subtitel: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas suscipit auctor metus, eget scelerisque enim. Sed molestie metus et aliquet
                        Vestibulum ex justo, porttitor
                        vel aliquet in, molestie ac nulla. Nulla facilisi`,
        price: "$100",
        modal: "Brown",
        bgColor: "#8b5958"
    },
    {
        id: 2,
        title: "Head Phone ",
        image: image4,
        subtitel: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas suscipit auctor metus, eget scelerisque enim. Sed molestie metus et aliquet
        Vestibulum ex justo, porttitor
        vel aliquet in, molestie ac nulla. Nulla facilisi`,
        price: "$100",
        modal: "Brown",
        bgColor: "#638153"
    },
    {
        id: 3,
        title: "Head_Phone Wireless",
        image: image2,
        subtitel: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas suscipit auctor metus, eget scelerisque enim. Sed molestie metus et aliquet
                        Vestibulum ex justo, porttitor
                        vel aliquet in, molestie ac nulla. Nulla facilisi`,
        price: "$100",
        modal: "Brown",
        bgColor: "#8d858c"
    },
    {
        id: 4,
        title: "HeadPhone",
        image: image3,
        subtitel: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas suscipit auctor metus, eget scelerisque enim. Sed molestie metus et aliquet
        Vestibulum ex justo, porttitor
        vel aliquet in, molestie ac nulla. Nulla facilisi`,
        price: "$100",
        modal: "Brown",
        bgColor: "#8d858c"
    },
]

const HomePage = () => {
    const [actvieData, setActiveData] = React.useState(headphones[0])
    const handleChange = (val) => {
        setActiveData(val)
    }

    return (
        <>
            <section className='bg-[#151616] text-white pb-10' >
                {/* <UpdateFollower mouseOptions={{
                    backgroundColor: 'white',
                    zIndex: 999,
                    followSpeed: 1.5,
                    scale: 2,
                    mixBlendMode: "difference"
                }} > */}
                <div className=' container grid grid-cols-1 md:grid-cols-2 min-h-[750px]' >
                    <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]  '>
                        <div className='space-y-5 text-center md:text-left ' >
                            <AnimatePresence mode='wait' >
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: 'white',
                                        zIndex: 999,
                                        followSpeed: 1.5,
                                        scale: 8,
                                        mixBlendMode: "difference"
                                    }}   >
                                    <motion.h1
                                        key={actvieData.id}
                                        variants={fadeUp(0.2)}
                                        initial='hidden'
                                        animate="show"
                                        exit="exit"
                                        className='text-3xl lg:text-6xl font-bold font-varela min-h-[120px]'  > {actvieData.title}
                                    </motion.h1>
                                </UpdateFollower>
                            </AnimatePresence>
                            <AnimatePresence mode='wait' >
                                <UpdateFollower mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 999,
                                    followSpeed: 1.5,
                                    scale: 3,
                                    mixBlendMode: "difference"
                                }} >

                                    <motion.p
                                        key={actvieData.id}
                                        variants={fadeUp(0.4)}
                                        initial='hidden'
                                        animate="show"
                                        exit="exit"
                                        className='text-sm leading-loose text-white/80 '> {actvieData.subtitel} </motion.p>
                                </UpdateFollower>

                            </AnimatePresence>
                            <UpdateFollower mouseOptions={{
                                backgroundColor: actvieData.bgColor,
                                zIndex: 999,
                                followSpeed: 1.5,
                                scale: 5,
                                mixBlendMode: "difference"
                            }} >

                                <button className='px-4 py-2 inline-block font-normal rounded-sm' style={{ backgroundColor: actvieData.bgColor }} > Buy & Listen </button>
                            </UpdateFollower>
                            <div className='flex flex-row justify-start items-center' >
                                <div className='w-20 h-[1px] bg-white' ></div>
                                <UpdateFollower mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 999,
                                    followSpeed: 1.5,
                                    scale: 3,
                                    mixBlendMode: "difference",
                                    textFontSize:16
                                }}>

                                    <div className='uppercase text-sm mx-2'> Top HeadPhones For You </div>
                                </UpdateFollower>
                                <div className='w-20 h-[1px] bg-white' ></div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center  md:h-[20px] '>
                            {headphones.map((items) => (
                                    <div key={items.id} className='grid grid-cols-2 place-items-center w-full gap-4  cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3' onClick={() => handleChange(items)} >
                                        <div>
                                            <img src={items.image} alt={items.title} className='w-[200px]' />
                                        </div>
                                        <div className=' space-y-2' >
                                            <p className='font-bold text-2xl' > {items.modal} </p>
                                            <p className='text-xs font-normal text-nowrap' >{items.price} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-end items-center' >
                        <AnimatePresence>
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: actvieData.bgColor,
                                    zIndex: 999,
                                    followSpeed: 1.5,
                                    scale: 12,
                                    mixBlendMode: "difference"
                                }} >

                                <motion.img
                                    key={actvieData.id}
                                    initial={{ opacity: 0, scale: 0.9, y: 100 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                                    exit={{
                                        opacity: 0, scale: 0.9, y: 100, transition: {
                                            duration: 0.2
                                        }
                                    }}
                                    src={actvieData.image} alt={actvieData.title}
                                    className='w-[200px] md:w-[400px] xl:w-[550px]'
                                />
                            </UpdateFollower>
                        </AnimatePresence>
                    </div>
                </div>
                {/* </UpdateFollower> */}
            </section>
        </>
    )
}

export default HomePage