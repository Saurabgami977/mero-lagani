import { Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import BlockedUsersTable from '../../components/Tables/BlockedUsersTable'
import Dashboard from '../../layouts/AdminLayout'

function BlockedUsers() {
    const blockedUsers = useSelector(state =>
        state.customer.customers.filter(customer =>
            customer.status === 'expired'
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
                Blocked Users
            </Typography>
            <BlockedUsersTable
                dashboard={true}
                customers={blockedUsers}
                columns={columns}
            />
        </Dashboard>
    )
}

export default BlockedUsers
