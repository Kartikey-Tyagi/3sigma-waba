import React, { useEffect, useRef, useState } from "react";
import { CgSortAz } from 'react-icons/cg';
import Sidebar from "../../components/Sidebar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    {
        name: 'Vivek Rana',
        phone: '91 8800688763',
        email: 'Vivek@3isgma crm',
        tags: 'Hot',
        assigned_to: 'AAskas',
        source: 'Facebook',
        last_active: 'Today',
        created_on: 'Today'
    },
    {
        name: 'Vivek Rana',
        phone: '91 8800688763',
        email: 'Vivek@3isgma crm',
        tags: 'Hot',
        assigned_to: 'AAskas',
        source: 'Facebook',
        last_active: 'Today',
        created_on: 'Today'
    },
    {
        name: 'Vivek Rana',
        phone: '91 8800688763',
        email: 'Vivek@3isgma crm',
        tags: 'Hot',
        assigned_to: 'AAskas',
        source: 'Facebook',
        last_active: 'Today',
        created_on: 'Today'
    },
    {
        name: 'Vivek Rana',
        phone: '91 8800688763',
        email: 'Vivek@3isgma crm',
        tags: 'Hot',
        assigned_to: 'AAskas',
        source: 'Facebook',
        last_active: 'Today',
        created_on: 'Today'
    },
    {
        name: 'Vivek Rana',
        phone: '91 8800688763',
        email: 'Vivek@3isgma crm',
        tags: 'Hot',
        assigned_to: 'AAskas',
        source: 'Facebook',
        last_active: 'Today',
        created_on: 'Today'
    },
    {
        name: 'Vivek Rana',
        phone: '91 8800688763',
        email: 'Vivek@3isgma crm',
        tags: 'Hot',
        assigned_to: 'AAskas',
        source: 'Facebook',
        last_active: 'Today',
        created_on: 'Today'
    },
]

// function createData(
//     name: string,
//     phone: string,
//     email: string,
//     tags: string,
//     assigned_to: string,
//     source: string,
//     last_active: string,
//     created_on: string
// ) {
//     return { name, phone, email, tags, assigned_to, source, last_active, created_on };
// }

const Contacts: React.FC = () => {

    return (
        <div id="main" className="main">
            <Sidebar title='Contacts' />
            <div className="contacts">
                <div className="actionBtns d-flex align-items-center justify-content-end my-3">
                    <span className="mx-2"><CgSortAz className="iconLarge" /></span>
                    <button className="mx-2 border bg-transparent px-2 py-1 fw-bold .text-dark">Add contact</button>
                    <button className="mx-2 border bg-transparent px-2 py-1 fw-bold .text-dark">Send broadcast</button>
                </div>
                <div className="contactTableSection border w-100 h-100">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="center">Phone</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Tags</TableCell>
                                    <TableCell align="center">Assigned to</TableCell>
                                    <TableCell align="center">Source</TableCell>
                                    <TableCell align="center">Last active</TableCell>
                                    <TableCell align="center">Created on</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell className="fw-bold" component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        {/* <TableCell align="center">{row.name}</TableCell> */}
                                        <TableCell className="fw-bold" align="center">{row.phone}</TableCell>
                                        <TableCell className="fw-bold" align="center">{row.email}</TableCell>
                                        <TableCell className="fw-bold" align="center">{row.tags}</TableCell>
                                        <TableCell className="fw-bold" align="center">{row.assigned_to}</TableCell>
                                        <TableCell className="fw-bold" align="center">{row.source}</TableCell>
                                        <TableCell className="fw-bold" align="center">{row.last_active}</TableCell>
                                        <TableCell className="fw-bold" align="center">{row.created_on}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
        </div>
    );
};

export default Contacts;
