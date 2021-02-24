import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

function RegistrationTable({ customers, columns }) {
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
                    customers.map(({ name, phone, email, plan, date, paid }, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{phone}</TableCell>
                            <TableCell>{email}</TableCell>
                            <TableCell>{date}</TableCell>
                            <TableCell>{plan}</TableCell>
                            <TableCell>
                                <Button
                                    variant='contained'
                                    size='small'
                                    color={paid ? 'primary' : 'default'}
                                >
                                    {paid ? 'Paid' : 'Due'}
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant='contained'
                                    size='small'
                                    color='secondary'>
                                    Accept
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

export default RegistrationTable
