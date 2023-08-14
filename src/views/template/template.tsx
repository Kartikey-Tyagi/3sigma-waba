import React from 'react'
import Sidebar from '../../components/Sidebar'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Template = () => {
    return (
        <div id="main" className="main">
            <Sidebar title='Template' />
            <div style={{ border: '1px solid rgb(108 117 125 / 29%)', width: '80%' }} className="template px-5 py-3 my-2 mx-5">
                <h5>Create template</h5>
                <div className="for">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column width-45">
                            <p>Template name</p>
                            <TextField
                                id="outlined-uncontrolled"
                                defaultValue="foo"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder='Enter broadcast nae'
                            />
                        </div>
                        <div className="d-flex flex-column width-45">
                            <p>Template cateory</p>
                            <TextField
                                id="outlined-select-currency"
                                select
                                defaultValue="EUR"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            >
                                {/* {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))} */}
                            </TextField>
                        </div>
                    </div>
                    <div className='d-flex flex-column width-45 my-4'>
                        <p>Language</p>
                        <TextField
                            id="outlined-select-currency"
                            select
                            defaultValue="EUR"
                            placeholder='Select Language'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        >
                        </TextField>
                    </div>
                    <h6>Header (optional)</h6>
                    <div className='d-flex flex-column width-45 my-4'>
                        <p>Type</p>
                        <TextField
                            id="outlined-select-currency"
                            select
                            defaultValue="EUR"
                            placeholder='Select Template'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        >
                        </TextField>
                    </div>
                    <div className='d-flex flex-column width-45 my-4 w-100'>
                        <p className='d-flex justify-content-between'>
                            <span>Body</span>
                            <button className='insertBtn px-2 py-1 rounded fw-bold'>Insert variable</button>
                        </p>
                        <TextField id="outlined-basic" multiline maxRows={10} minRows={3} fullWidth variant="outlined" />
                        <p className='d-flex justify-content-end'>0/1204</p>
                    </div>
                    <div className='d-flex flex-column width-45 my-4 w-100'>
                        <h6>Buttons (optional)</h6>
                        <span className='d-block'>These will be show as clickable buttons below your message.</span>
                        <FormControl className='my-4'>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="None" />
                                <FormControlLabel value="male" control={<Radio />} label="Call to Action" />
                            </RadioGroup>
                        </FormControl>
                        <div className="d-flex">
                            <div className='d-flex flex-column w-25'>
                                <FormLabel className='my-2' id="demo-row-radio-buttons-group-label">Type</FormLabel>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    defaultValue="EUR"
                                    placeholder='Select Template'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                </TextField>
                            </div>
                            <div className='d-flex flex-column width-20 mx-4'>
                                <FormLabel className='my-2' id="demo-row-radio-buttons-group-label">Button Text</FormLabel>
                                <TextField id="outlined-select-currency">
                                </TextField>
                            </div>
                            <div className='d-flex flex-column width-20'>
                                <FormLabel className='my-2' id="demo-row-radio-buttons-group-label">Country</FormLabel>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    defaultValue="EUR"
                                    placeholder='Select Template'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                </TextField>
                            </div>
                            <div style={{ marginLeft: '20px'}} className='d-flex flex-column w-25'>
                                <FormLabel className='my-2' id="demo-row-radio-buttons-group-label">Pone</FormLabel>
                                <TextField id='pone'>
                                </TextField>
                            </div>

                        </div>
                        <div className="d-flex">
                            <div className='d-flex flex-column w-25 '>
                                <FormLabel className='my-2' id="demo-row-radio-buttons-group-label">Type</FormLabel>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    placeholder='Select Template'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                </TextField>
                            </div>
                            <div className='d-flex flex-column width-20 mx-4'>
                                <FormLabel className='my-2' id="demo-row-radio-buttons-group-label">Button Text</FormLabel>
                                <TextField >
                                </TextField>
                            </div>
                            <div className='d-flex flex-column w-25'>
                                <FormLabel className='my-2' id="demo-row-radio-buttons-group-label">Website URL</FormLabel>
                                <TextField>
                                </TextField>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className='px-5 py-2 rounded saveTemplate text-white'>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template