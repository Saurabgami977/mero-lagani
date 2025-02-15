import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

function BlockedUsersTable({ customers, columns }) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableCell key={index}>{column.headingName}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {customers.length > 0 ? (
                    customers.map(({ name, phone, email, plan, subscribedDate, status }, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{phone}</TableCell>
                            <TableCell>{email}</TableCell>
                            <TableCell>{subscribedDate}</TableCell>
                            <TableCell>{plan}</TableCell>
                            <TableCell>
                                <Button
                                    variant='contained'
                                    size='small'
                                    color={status === 'active' ? 'primary' : 'default'}>
                                    {status === 'active' ? 'Disable Account' : 'Enable Account'}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                ) : (
                        <TableRow>
                            <TableCell colSpan={6}>No record found!!</TableCell>
                        </TableRow>
                    )}
            </TableBody>
        </Table>
    )
}

export default BlockedUsersTable
