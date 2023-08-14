import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TbBroadcast } from 'react-icons/tb';
import { MdCastForEducation } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import Button from '@mui/material/Button';
import { IoSendSharp } from "react-icons/io5";
import Modal from '@mui/material/Modal';
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const tableData = [
    {
        broadcast_name: 'Sample broadcast',
        sent_at: '23rd Nov 2023 06:50 PM',
        receipients: '10,000',
        successful: '99%',
        read: '99%',
        replied: '99%'
    },
    {
        broadcast_name: 'Sample broadcast',
        sent_at: '23rd Nov 2023 06:50 PM',
        receipients: '10,000',
        successful: '99%',
        read: '99%',
        replied: '99%'
    },
    {
        broadcast_name: 'Sample broadcast',
        sent_at: '23rd Nov 2023 06:50 PM',
        receipients: '10,000',
        successful: '99%',
        read: '99%',
        replied: '99%'
    },
    {
        broadcast_name: 'Sample broadcast',
        sent_at: '23rd Nov 2023 06:50 PM',
        receipients: '10,000',
        successful: '99%',
        read: '99%',
        replied: '99%'
    },
    {
        broadcast_name: 'Sample broadcast',
        sent_at: '23rd Nov 2023 06:50 PM',
        receipients: '10,000',
        successful: '99%',
        read: '99%',
        replied: '99%'
    },
]

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            style={{ width: '100%', background: '#EBF0F4 !important' }}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const ModalBoxStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    height: '90vh',
    bgcolor: '#EBF0F4',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

const Broadcast: React.FC = () => {

    const [value, setValue] = useState(0);
    const [openBroadcastModal, setOpenBroadcastModal] = useState(false);
    const [checked, setChecked] = useState([true, false]);
    const [broadcastStep, setBroadcastStep] = useState(0)


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    };

    return (
        <div id="main" className="main">
            <Sidebar title='Broadcast' />
            <div className="broadcast my-3">
                <div className="d-flex flex-column">
                    <div className="broadcast_header d-flex justify-content-between mx-3">
                        <h5>Watsapp Broadcast</h5>
                        <div className="d-flex align-items-center">
                            <Typography className="fw-bold px-3" variant="body2" component='p'>Messaging limit : 10,000 customer /24 hours </Typography>
                            <Button className="text-white" style={{ backgroundColor: '#3FAEFDD1' }} variant="outlined" startIcon={<IoSendSharp className="text-white" />}
                                onClick={() => setOpenBroadcastModal(true)}
                            >
                                New Broadcast
                            </Button>
                        </div>
                    </div>
                    <div className="sideBarBroadcast">
                        <Box sx={{ flexGrow: 1, bgcolor: '#EBF0F4 !important', display: 'flex', height: '100vh' }}>
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{ borderRight: 1, borderColor: 'divider', width: '26%' }}
                            >
                                <Tab classes={{ selected: 'selectedTab' }} className="rounded text-capitalize justify-content-start" style={{ margin: '0 5px', padding: '0 10px' }} icon={<TbBroadcast className="fs-5 text" />} iconPosition="start" label="Broadcast history" {...a11yProps(0)} />
                                <Tab classes={{ selected: 'selectedTab' }} className="rounded text-capitalize justify-content-start" style={{ margin: '0 5px', padding: '0 10px' }} icon={<MdCastForEducation className="fs-5 text" />} iconPosition="start" label="Scheduled broadcast" {...a11yProps(1)} />
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <table className="w-100 broadcastTable">
                                    <thead className="rounded bg-white" style={{ height: '6vh' }}>
                                        <tr className="my-3">
                                            <th className="text-center">Broadcast name</th>
                                            <th className="text-center">Sent at</th>
                                            <th className="text-center">Receipients </th>
                                            <th className="text-center">Successfull</th>
                                            <th className="text-center">Read</th>
                                            <th className="text-center">Replied</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((row, index) => {
                                            return <tr style={{ height: '10vh', background: '#fff' }} key={index}>
                                                <th className="text-center">{row.broadcast_name}</th>
                                                <th className="text-center">{row.sent_at}</th>
                                                <th className="text-center">{row.receipients}</th>
                                                <th className="text-center">{row.successful}</th>
                                                <th className="text-center">{row.read}</th>
                                                <th className="text-center">{row.replied}</th>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Broadcasts
                            </TabPanel>
                        </Box>
                    </div>
                </div>
            </div>
            <Modal
                open={openBroadcastModal}
                onClose={() => setOpenBroadcastModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ModalBoxStyle}>
                    <AiOutlineClose onClick={() => setOpenBroadcastModal(false)} style={{position: 'absolute', right: '5%', cursor: 'pointer'}} />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create broadcast
                    </Typography>
                    {broadcastStep === 0 && <div className="broadcastForm">
                        <div className="my-4">
                            <p>Broadcast name</p>
                            <TextField
                                id="outlined-uncontrolled"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                placeholder='Enter broadcast name'
                            />
                        </div>
                        <div className="my-4">
                            <p>Select template</p>
                            <TextField
                                id="outlined-uncontrolled"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                placeholder='Enter broadcast name'
                            />
                        </div>
                        <p className="my-4">Start time</p>
                        <div className="d-flex my-4 justify-content-between w-75">
                            <div>
                                <p>Date</p>
                                <TextField
                                    id="outlined-uncontrolled"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder='21st august 2023'
                                />
                            </div>
                            <div>
                                <p>Time</p>
                                <TextField
                                    id="outlined-uncontrolled"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder='12:30 PM'
                                />
                            </div>
                        </div>
                    </div>}

                    {broadcastStep === 1 && <div className="broadcastForm">
                        {/* <Typography id="modal-modal-title" variant="h6" component="p">
                            Create broadcast
                        </Typography> */}
                        <div className="d-flex justify-content-between my-4">
                            <Typography id="modal-modal-title" variant="body1" component="h2">
                                Select receipients
                            </Typography>
                            <TextField placeholder='Searc for leads' />
                            <TextField placeholder='Default leads list' />
                            <p><FaFilter /></p>
                        </div>
                        <div className="position-relative my-4">
                            <FormControlLabel
                                className="positon-absolute start-0"
                                style={{ top: '-5%', position: 'absolute' }}
                                label="Select all"
                                control={
                                    <Checkbox
                                        checked={checked[0] && checked[1]}
                                        // indeterminate={checked[0] !== checked[1]}
                                        onChange={handleChange1}
                                    />
                                }
                            ></FormControlLabel>
                            <TextField
                                className="positon-absolute start-0"
                                // style={{ zIndex: -1 }}
                                fullWidth
                                variant="standard"
                            />
                            <p className="position-absolute" style={{ top: 0, left: '50%', transform: 'translateX(-50%)', margin: 0 }}>2043 recipients selected </p>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <FormControlLabel
                                    label="lead 1"
                                    control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                                />
                                <FormControlLabel
                                    label="lead 2"
                                    control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                                />
                                <FormControlLabel
                                    label="lead 3"
                                    control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                                />
                            </Box>
                        </div>
                    </div>}
                    <div className="d-flex justify-content-end">
                        {broadcastStep === 1 && <Button className="text-white mx-2 px-4" sx={{background: '#3FAEFD'}} onClick={() => setBroadcastStep(prev => prev - 1)}>Back</Button>}
                        <Button sx={{background: '#4CB050'}} className="text-white px-4" onClick={() => broadcastStep === 0 ? setBroadcastStep(prev => prev + 1) : null}>{broadcastStep === 0 ? 'Next' : 'Save broadcast'}</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Broadcast;
