import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import {
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    Assignment as AssignmentIcon,
    Block as BlockIcon,
    Payment as PaymentIcon,
    EventBusy as EventBusyIcon,
    VpnKey as VpnKeyIcon
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const mainList = [
    { icon: <DashboardIcon />, name: 'Dashboard', link: '/admin' },
    { icon: <PeopleIcon />, name: 'Active Customers', link: '/admin/active-customers' },
    { icon: <BlockIcon />, name: 'Blocked Customers', link: '/admin/blocked-customers' },
    { icon: <VpnKeyIcon />, name: 'Pending Registration', link: '/admin/pending-registration' },
]

const secondaryList = [
    { icon: <PaymentIcon />, name: 'Payments', link: '/admin/payments' },
    { icon: <EventBusyIcon />, name: 'Expired Subscriptions', link: '/admin/expired-customers' },
    { icon: <AssignmentIcon />, name: 'All Customers', link: '/admin/all-customers' },
]

export const mainListItems = (
    <div>
        {
            mainList.map((item, index) => (
                <ListItem button key={index} component={Link} to={item.link}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>

            ))
        }
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Reports</ListSubheader>
        {
            secondaryList.map((item, index) => (
                <ListItem button key={index} component={Link} to={item.link}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))
        }
    </div>
);