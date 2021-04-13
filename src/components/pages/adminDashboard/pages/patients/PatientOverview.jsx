import React from 'react'
import Navbar from '../../layout/Navbar'
import Sidenav from '../../layout/Sidenav'
import AddPatient from './AddPatient';

const PatientOverview = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Sidenav />
            <AddPatient />
        </React.Fragment>
    )
}

export default PatientOverview
