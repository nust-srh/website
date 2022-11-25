import React from 'react'
import AlumniProjects from './AlumniProjects'
import Banner from './Banner'
import Presidents from './Presidents'
import RollCall from './RollCall'

const Alumni = () => {
    return (
        <div>
            <Banner/>
            <AlumniProjects />
            <RollCall />
            <Presidents />
        </div>
    )
}

export default Alumni
