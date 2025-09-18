import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const pageLinks = [
        { label: "Home", link: "/" },
        { label: "Projects", link: "/projects" },
        { label: "About", link: "/about" },
        { label: "Contact", link: "/contact" }
    ];

    const socialMediaLinks = [
        { icon : 'pi pi-linkedin', link : 'https://www.linkedin.com/in/sumit-makker'},
        { icon : 'pi pi-instagram', link : 'https://www.instagram.com/sumit__makker'}
    ];

    const PageLink = ({ item }) => {
        return (
            <NavLink 
            to={item.link} 
            className={({ isActive }) => 
                `text-[18px] ${
                isActive ? "!text-[#F8F7F9] font-bold" : "!text-[#A9A9A9] font-normal hover:!text-[#F8F7F9] hover:font-bold"
                }`
            }
            >
            {item.label}
            </NavLink>
        );
    };


    const SocialMediaLink = ({item}) => {
        return <a href={item.link} target='_blank' rel="noreferrer" className={`!font-normal !text-[#A9A9A9] text-[18px] hover:!text-[#F8F7F9] ${item.icon}`}></a>
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`${!hidden && 'shadow-[0_1px_20px_rgba(255,255,255,0.2)]'}
                py-7 fixed top-0 left-0 w-full z-2 
                bg-[#1F1F1F] transition-transform duration-600
                ${hidden ? "-translate-y-full" : "translate-y-0"}
            `}
        >
            <div className='flex justify-between max-w-[60%] mx-auto'>
                <img alt="logo" />

                <div className='flex items-center gap-14'>
                    
                    {/* Page Links */}
                    <div className='flex gap-14'>
                        {pageLinks.map((item, i) => <PageLink key={i} item={item}/>)}
                    </div>
                    
                    {/* Separator */}
                    <div className='border-1 h-full border-[#A9A9A9]'></div>

                    {/* Social Media Links */}
                    <div className='flex items-center gap-10'>
                        {socialMediaLinks.map((item, i) => <SocialMediaLink key={i} item={item}/>)}
                    </div>

                </div>
            </div>
        </nav>
    );
}