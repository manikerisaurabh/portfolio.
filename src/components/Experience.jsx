import React, { useEffect } from 'react'
import html from '../assets/experience/html.png'
import css from '../assets/experience/css.png'
import express from '../assets/experience/express.png'
import javascript from '../assets/experience/javascript.png'
import node from '../assets/experience/node.png'
import flutter from '../assets/experience/flutter.png'
import dotnet from '../assets/experience/dotnet.png'
import react from '../assets/experience/react.png'
import tailwind from '../assets/experience/tailwind.png'
import python from '../assets/experience/python.png'
import mongodb from '../assets/experience/mongodb.png'
import angular from '../assets/experience/angular.png'
import sql from '../assets/experience/sql.png'
import github from '../assets/experience/github.png'
import azur from '../assets/experience/azur.png'
import typescript from '../assets/experience/typescript.png'


import AOS from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const techs = () => [
        {
            id: 1,
            scr: react,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id: 2,
            scr: express,
            title: 'EXPRESS JS',
            style: 'shadow-yellow-500'
        },
        {
            id: 30,
            scr: mongodb,
            title: 'MONGO DB',
            style: 'shadow-yellow-500'
        },
        {
            id: 3,
            scr: angular,
            title: 'ANGULAR',
            style: 'shadow-yellow-500'
        },
        {
            id: 8,
            scr: dotnet,
            title: 'Dot Net',
            style: 'shadow-yellow-800'
        },

        {
            id: 4,
            scr: sql,
            title: 'SQL',
            style: 'shadow-green-500'
        },
        {
            id: 4,
            scr: azur,
            title: 'Azur',
            style: 'shadow-green-500'
        },
        {
            id: 4,
            scr: github,
            title: 'Git Hub',
            style: 'shadow-green-500'
        },
        {
            id: 4,
            scr: typescript,
            title: 'TYPESCRIPT',
            style: 'shadow-green-500'
        },
        {
            id: 4,
            scr: node,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
        {
            id: 5,
            scr: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 7,
            scr: flutter,
            title: 'Flutter',
            style: 'shadow-cyan-800'
        },
    ]

    return (
        <div name="skills" className='bg-gradient-to-b from-gray-800 to-black text-white
     w-full h-full'>
            <div className='max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Skills</p>
                    <p className='py-6'>This are the technologies I've worked with</p>
                </div>

                <div className='w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        techs().map(({ id, scr, title, style }) => (

                            <div data-aos="zoom-in" data-aos-duration="500" key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={scr} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience