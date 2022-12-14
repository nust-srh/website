import React from 'react'
import { Helmet } from 'react-helmet-async'
import Executive from './Executive'
import Objectives from './Objectives'
import Story from './Story'

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Us | Choice Champions</title>
                <meta
                    name="description"
                    content="Nust Choice Champions is a student society that seeks to promote positive health living among students at the university"
                />
                <meta name="keywords" content="Nust Choice Champions, Peer Educators, Zimbabwe, NUST, health, Choice Champions"/>
            </Helmet>
            <Story />
            <Objectives />
            <Executive />
        </div>
    )
}

export default About
