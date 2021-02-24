import { Typography } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux'
import RegistrationTable from '../../components/Tables/RegistrationTable'
import Dashboard from '../../layouts/AdminLayout'

function PendingRegistration() {
    const pendingCustomers = useSelector(state => state.registrationRequest.requests);
    const columns = [
        { headingName: "#" },
        { headingName: "Customers Name" },
        { headingName: "Phone" },
        { headingName: "Email" },
        { headingName: "Registration Date" },
        { headingName: "Plan" },
        { headingName: "Status" },
        { headingName: "Actions" },
    ];
    return (
        <Dashboard>
            <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                noWrap
            >
                Registration Requests
        </Typography>
            <RegistrationTable
                dashboard={true}
                customers={pendingCustomers}
                columns={columns}
            />
        </Dashboard>
    )
}

export default PendingRegistration
