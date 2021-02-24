import React from 'react';
import clsx from 'clsx';

import { Button, Grid, Paper, Typography } from '@material-ui/core';

import Dashboard from '../../layouts/AdminLayout';
import { styles } from './AdminDashboard.style.js';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StudentTable from '../../components/Tables/CustomersTable';

function AdminDashboard() {
    const classes = styles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const columns = [
        { headingName: "#" },
        { headingName: "Customers Name" },
        { headingName: "Phone" },
        { headingName: "Email" },
        { headingName: "Subscription Date" },
        { headingName: "Plan" },
        { headingName: "Status" },
    ];

    const AllCustomers = useSelector(state => state.customer.customers)

    const ActiveCustomers = useSelector(state => state.customer.customers
        .filter(customer => customer.status === 'active')
    )
    const ExpiredCustomers = useSelector(state => state.customer.customers
        .filter(customer => customer.status === 'expired')
    )
    const PendingRequest = useSelector(state => state.registrationRequest.requests)

    return (
        <Dashboard>
            <Typography
                component="h5"
                variant="h6"
                color="textSecondary"
                noWrap
                className={classes.pageHeading}
            >
                Admin Dashboard
        </Typography>
            <Grid container spacing={3}>
                {/* Total Active Customers */}
                <Grid item xs={12} md={8} lg={4}>
                    <Paper className={fixedHeightPaper}>
                        {" "}
                        <Typography
                            component="h2"
                            variant="h6"
                            color="primary"
                            gutterBottom
                        >
                            Total Active Users
                        </Typography>
                        <Typography component="p" variant="h4" className={classes.stat}>
                            {ActiveCustomers.length}
                        </Typography>
                        <Button component={Link} to="/admin/active-customers" align="left ">
                            More Info
                        </Button>
                    </Paper>
                </Grid>
                {/* Total Pending Registration */}
                <Grid item xs={12} md={8} lg={4}>
                    <Paper className={fixedHeightPaper}>
                        {" "}
                        <Typography
                            component="h2"
                            variant="h6"
                            color="primary"
                            gutterBottom
                        >
                            Total Pending Registration
                        </Typography>
                        <Typography component="p" variant="h4" className={classes.stat}>
                            {PendingRequest.length}
                        </Typography>
                        <Button component={Link} to="/admin/pending-registration" align="left ">
                            More Info
                        </Button>
                    </Paper>
                </Grid>
                {/* Total Expired Customers */}
                <Grid item xs={12} md={8} lg={4}>
                    <Paper className={fixedHeightPaper}>
                        {" "}
                        <Typography
                            component="h2"
                            variant="h6"
                            color="primary"
                            gutterBottom
                        >
                            Total Expired Subscriptions
                        </Typography>
                        <Typography component="p" variant="h4" className={classes.stat}>
                            {ExpiredCustomers.length}
                        </Typography>
                        <Button component={Link} to="/admin/expired-customers" align="left ">
                            More Info
                        </Button>
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography
                            component="h2"
                            variant="h6"
                            color="primary"
                            gutterBottom
                        >
                            Latest Customers
                        </Typography>

                        <StudentTable
                            dashboard={true}
                            customers={AllCustomers}
                            columns={columns}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Dashboard>
    )
}

export default AdminDashboard
