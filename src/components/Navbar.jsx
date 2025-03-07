import React, { useState } from 'react';
import { MdMenu, MdClose } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from "framer-motion";

const NavbarLink = [
    { id: 1, title: "Home", path: "#" },
    { id: 2, title: "Category", path: "#" },
    { id: 3, title: "About", path: "#" },
    { id: 4, title: "Blog", path: "#" },
    { id: 5, title: "Contact", path: "#" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='bg-[#151616] text-white py-4 font-varela px-5 sticky top-0 z-50'>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='container flex justify-between items-center'>
                {/* Logo section */}
                <div>
                    <a href="#" className='text-xl font-bold uppercase'>The Exodus</a>
                </div>
                {/* Desktop menu */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-4'>
                        {NavbarLink.map((item) => (
                            <li key={item.id}>
                                <UpdateFollower mouseOptions={{
                                    backgroundColor: 'white',
                                    zIndex: 999,
                                    followSpeed: 1.5,
                                    scale: 4,
                                    mixBlendMode: "difference"
                                }}>
                                    <a href={item.path} className='inline-block py-2 px-3 text-sm uppercase'>{item.title}</a>
                                </UpdateFollower>
                            </li>
                        ))}
                        <div className='ps-14 text-xl'>
                            <UpdateFollower mouseOptions={{
                                backgroundColor: 'white',
                                zIndex: 999,
                                followSpeed: 1.5,
                                scale: 4,
                                mixBlendMode: "difference"
                            }}>
                                <SlEarphones />
                            </UpdateFollower>
                        </div>
                    </ul>
                </div>
                {/* Mobile menu button */}
                <div className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                </div>
            </motion.nav>
            {/* Mobile menu dropdown with smooth transition */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`md:hidden absolute top-16 left-0 w-full bg-[#151616] text-white overflow-hidden`}
            >
                <ul className='flex flex-col items-center gap-4 py-4 px-5'>
                    {NavbarLink.map((item) => (
                        <li key={item.id}>
                            <a href={item.path} className='inline-block py-2 px-3 text-sm uppercase' onClick={() => setMenuOpen(false)}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default Navbar;
