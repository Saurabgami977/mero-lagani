import { Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import ActiveUsersTable from '../../components/Tables/ActiveUsersTable'
import Dashboard from '../../layouts/AdminLayout'

function ActiveUsers() {
    const activeUsers = useSelector(state =>
        state.customer.customers.filter(customer =>
            customer.status === 'active'
        )
    );
    const columns = [
        { headingName: "#" },
        { headingName: "Customers Name" },
        { headingName: "Phone" },
        { headingName: "Email" },
        { headingName: "Subscription Date" },
        { headingName: "Plan" },
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
                Active Users
            </Typography>
            <ActiveUsersTable
                dashboard={true}
                customers={activeUsers}
                columns={columns}
            />
        </Dashboard>
    )
}

export default ActiveUsers
