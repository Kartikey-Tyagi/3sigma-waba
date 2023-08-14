import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineFileText, AiOutlineMessage, AiOutlineSearch } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [userdata, setUserdata] = useState<any>({});
    const [isSignoutVisible, setIsSignoutVisible] = useState(false);

    const handleChange = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        let local: any = window.localStorage?.getItem("userData");
        setUserdata(JSON.parse(local));
    }, []);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        setTimeout(() => {
            navigate("/");
        }, 1000);
    };
    return (
        <>
            <header id="top_header">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-between w-75">
                        <Typography variant="h5">{props.title}</Typography>
                        <div className="action_icons d-flex">
                            <AiOutlineSearch className="fs-4 mx-2" />
                            <MdNotificationsActive className="fs-4 mx-2" />
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between w-25">
                        <Typography className="mx-3" variant="body1"> Vivek Rana</Typography>
                        <div className="d-flex flex-column position-relative">
                            <IoMdArrowDropdownCircle className="fs-5 mx-2" onClick={() => setIsSignoutVisible(p => !p)} />
                            {isSignoutVisible && <Typography variant="body2" component='a' onClick={handleLogout} className="sign_out">Sign out</Typography>}
                        </div>

                    </div>
                </div>
            </header>
            <aside id="sidebar" className="sidebar">
                <div className="d-flex align-items-center justify-content-center logo">
                    <a href="/inbox" className="logo d-flex align-items-center">
                        <img src="assets/img/3sigma_logo.png" alt="img" style={{ maxHeight: '34px' }} />
                    </a>
                    {/* <i className="bi bi-list toggle-sidebar-btn"></i> */}
                </div>
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <NavLink style={{ color: '#3FAEFD' }} className="nav-link" to="/inbox">
                            <p className="d-flex align-items-center justify-content-center">
                                <span className="mx-2"><AiOutlineMessage /></span><span>Inbox</span>
                            </p>
                        </NavLink>
                        <NavLink style={{ color: '#3FAEFD' }} className="nav-link" to="/template">
                            {/* <i className="bi bi-house-fill"></i> */}
                            <p className="d-flex align-items-center justify-content-center">
                                <span className="mx-2"><AiOutlineFileText /></span><span>Template</span>
                            </p>
                        </NavLink>
                        <NavLink style={{ color: '#3FAEFD' }} className="nav-link" to="/broadcast">
                            <p className="d-flex align-items-center justify-content-center">
                                <span className="mx-2"><HiSpeakerphone /></span><span>Broadcast</span>
                            </p>
                        </NavLink>
                        <NavLink style={{ color: '#3FAEFD' }} className="nav-link" to="/contacts">
                            <p className="d-flex align-items-center justify-content-center">
                                <span className="mx-2"><BiSolidUser /></span><span>Contacts</span>
                            </p>
                        </NavLink>

                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;
