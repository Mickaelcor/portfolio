import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

    const links = [
        {
            id: 1,
            style: 'hover:text-sky-500 duration-300',
            child: (
                <>
                    <FaLinkedin size={55} />
                </>
            ),
            href: 'https://www.linkedin.com/in/mickael-correia-67373025a/',
        },
        {
            id: 2,
            style: 'hover:text-sky-500 duration-300',
            child: (
                <>
                    <FaGithub size={55} />
                </>
            ),
            href: 'https://github.com/Mickaelcor',
        },
    ]

    return (
        <div className='flex justify-center gap-7 bg-gradient-to-b from-gray-800 to-black w-full text-white pb-12'>
            {links.map(({ id, child, href, style }) => (
                <div key={id} className={`mt-4 ${style}`}>
                    <a href={href}>{child}</a>
                </div>
            ))}
        </div>
    )
}

export default Footer