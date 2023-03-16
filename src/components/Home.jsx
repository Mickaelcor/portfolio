import React from 'react';
import HeroImage from "../assets/heroImage2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {

    const DownloadCv = () => {
        const url = process.env.PUBLIC_URL + '/resume.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div name="acceuil" className='w-full bg-gradient-to-b from-black via-black to-gray-800 pt-52 pb-60 2xl:pb-96'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>Développeur web junior</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        En tant que développeur web junior passionné par l'innovation technologique, je suis constamment en train d'apprendre et de me perfectionner pour créer des sites web modernes et efficaces.
                        Actuellement, j'aime travailler sur des applications web en utilisant des technologies comme React, Tailwind, Node JS et MongoDB.
                    </p>

                    <div className='flex gap-8'>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                        >
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                        <button
                            onClick={DownloadCv}
                            duration={500}
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                        >
                            Télécharger mon CV
                            <span className='group-hover:scale-125 duration-300'>
                                <BsDownload size={20} className="ml-3" />
                            </span>
                        </button>
                    </div>
                </div>
                <div className=' max-md:pt-12'>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className='rounded-2xl mx-auto w-2/3 md:w-full'
                    />
                </div>
            </div>
        </div>
    );
};

export default Home