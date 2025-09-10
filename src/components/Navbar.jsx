
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const pageLinks = [
        { label: "Home", link: "/" },
        { label: "Projects", link: "/projects" },
        { label: "About", link: "/about" },
        { label: "Contact", link: "/contact" }
    ];

    const socialMediaLinks = [
        { icon : 'pi pi-linkedin', link : 'https://www.linkedin.com/in/sumit-makker'},
        { icon : 'pi pi-instagram', link : 'https://www.instagram.com/sumit__makker'}
    ]

    const PageLink = ({item}) => {
        return <NavLink href={item.link} className='hover:font-medium !text-[#F8F7F9] text-[18px]'>{item.label}</NavLink>
    }

    const SocialMediaLink = ({item}) => {
        return <a href={item.link} target='_blank' className={`!font-normal !text-[#F8F7F9] text-[18px] ${item.icon}`}></a>
    }

    return (
        <div className='flex justify-between p-5'>
            <img />

            <div className='flex items-center gap-14'>
                
                {/* Page Links */}
                <div className='flex gap-14'>
                    {
                        pageLinks.map(item => <PageLink item={item}/>)
                    }
                </div>
                
                {/* Seperator */}
                <div className='border-1 h-full border-[#F8F7F9]'>
                </div>

                {/* Social Media Links */}
                <div className='flex items-center gap-10'>
                    {
                        socialMediaLinks.map(item => <SocialMediaLink item={item}/>)
                    }
                </div>

            </div>
        </div>
    )
}