import React from 'react';
import concertPlace from '../assets/portfolio/concertPlace.jpg'
import greysBan from '../assets/portfolio/greysBan.jpg'
import yumFit from '../assets/portfolio/yumFit.jpg'
import construct from '../assets/portfolio/construct.jpg'
import { FaWordpress } from 'react-icons/fa'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { TbBrandCss3 } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { GrNode } from 'react-icons/gr'
import { SiJavascript } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { MdOutlineConstruction } from 'react-icons/md'
import { SiPhpmyadmin } from 'react-icons/si'
import { SiIonos } from 'react-icons/si'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: concertPlace,
            style: 'flex items-center justify-around',
            child: (
                <>
                    <AiOutlineHtml5 size={30} className="text-orange-600" />
                    <TbBrandCss3 size={30} className="text-blue-500" />
                    <SiJavascript size={30} className="text-yellow-400" />
                    <FaReact size={30} className="text-sky-400" />
                    <SiTailwindcss size={30} className="text-teal-300" />
                    <GrNode size={30} className="text-green-700" />
                    <SiMongodb size={30} className="text-green-400" />
                </>
            ),
        },
        {
            id: 2,
            src: yumFit,
            href: 'https://yumfit.fr/',
            style: 'flex items-center justify-around',
            child: (
                <>
                    <FaWordpress size={30} className="text-sky-700" />
                    <SiPhpmyadmin size={30} className="text-orange-600" />
                    <SiIonos size={30} className="text-blue-800" />
                </>
            ),
        },
        {
            id: 3,
            src: greysBan,
            style: 'flex items-center justify-around',
            child: (
                <>
                    <AiOutlineHtml5 size={30} className="text-orange-600" />
                    <TbBrandCss3 size={30} className="text-blue-500" />
                    <SiJavascript size={30} className="text-yellow-400" />
                </>
            ),
        },
        {
            id: 4,
            src: construct,
            style: 'flex items-center justify-around text-yellow-500',
            child: (
                <>
                    <MdOutlineConstruction size={30} />
                </>
            ),
        },
        {
            id: 5,
            src: construct,
            style: 'flex items-center justify-around text-yellow-500',
            child: (
                <>
                    <MdOutlineConstruction size={30} />
                </>
            ),
        },
        {
            id: 6,
            src: construct,
            style: 'flex items-center justify-around text-yellow-500',
            child: (
                <>
                    <MdOutlineConstruction size={30} />
                </>
            ),
        },
    ]

    return (
        <div
            name="portfolio"
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white pb-12'
        >

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4'>
                        Portfolio
                    </p>
                    <p className='py-6'>
                        Voici quelques unes de mes réalisations
                    </p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        portfolios.map(({ id, src, href, child, style }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img
                                    src={src}
                                    alt=""
                                    className='rounded-md duration-200 hover:scale-105'
                                />
                                <div className={`mt-4 ${style}`}>
                                    {child}
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:text-sky-400 hover:scale-110'>
                                        <a href={href} target='_blank' rel='noreferrer' >Demo</a>
                                    </button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:text-sky-400 hover:scale-110'>
                                        Code
                                    </button>
                                </div>
                            </div>

                        ))
                    }


                </div>
            </div>

        </div>
    );
};

export default Portfolio