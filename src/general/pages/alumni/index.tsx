import React from 'react'
import { Helmet } from 'react-helmet-async'
import AlumniProjects from './AlumniProjects'
import Banner from './Banner'
import Presidents from './Presidents'
import RollCall from './RollCall'

const Alumni = () => {
    return (
        <div>
            <Helmet>
                <title>Alumni | Choice Champions</title>
                <meta
                    name="description"
                    content="We have lived through and are proud to have served. We shall continue to serve, providing the roots for the organisation to blossom"
                />
                <meta name="keywords" content="Nust Choice Champions, Peer Educators, Zimbabwe, NUST, health, Choice Champions"/>
            </Helmet>
            <Banner/>
            <AlumniProjects />
            <RollCall />
            <Presidents />
        </div>
    )
}

export default Alumni
