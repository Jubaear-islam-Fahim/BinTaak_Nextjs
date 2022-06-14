import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import logoHeader from "/public/assets/img/logo.png";
import Link from 'next/link';
import useAuth from '../../Hooks/useAuth';
import { FaUserAlt, FaEdit, FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import { AiFillSetting, AiOutlineLogin } from "react-icons/ai";

const NavBar = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 1);
        });
    }, []);

    const { user, logOutUser } = useAuth()

    // logOutUser()

    return (
        <>
            <Navbar expand="lg" className={scroll ? "navbar_top nabActive" : "navbar_top"}>
                <Container>
                    <Link href="/">
                        <a className='navbar-brand'><Image src={logoHeader} alt="Logo" /></a>
                    </Link>
                    <div className="phone-icon phone-block">
                        {
                            !user ?
                                <div className="signLogBtn">
                                    <Link href="/sign-in"><a className='nav-link'><FaUserAlt /></a></Link>
                                </div>
                                :
                                <div className="user-dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <Image className='rounded-pill' width={40} height={40} src={user.photoURL} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu align="end">
                                            <Dropdown.Item href="#"><FaUserAlt /> My Profile</Dropdown.Item>
                                            <Dropdown.Item href="#"><FaEdit /> Edit Profile</Dropdown.Item>
                                            <Dropdown.Item href="#"><AiFillSetting /> Manage Services</Dropdown.Item>
                                            <Dropdown.Item href="#"><FaEnvelope /> Inbox</Dropdown.Item>
                                            <Dropdown.Item href="#"><AiFillSetting /> Settings</Dropdown.Item>
                                            <Dropdown.Item href="#"><FaQuestionCircle /> Help</Dropdown.Item>
                                            <Dropdown.Item href="#"><AiOutlineLogin /> Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                        }
                    </div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto menuList">
                            <Nav.Link href="">About</Nav.Link>
                            <Nav.Link href="">What We Do</Nav.Link>
                            <Nav.Link><Link href="/services">All Services</Link></Nav.Link>
                        </Nav>
                        <Nav className="ms-auto desktop-block">
                            {
                                !user ?
                                    <div className="signLogBtn">
                                        <Link href="/sign-in"><a className='nav-link'>Sign In</a></Link>
                                        <Link href="/sign-up"><a className='nav-link act'>Join</a></Link>
                                    </div>
                                    :
                                    <div className="user-dropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <Image className='rounded-pill' width={50} height={50} src={user.photoURL} alt="" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#"><FaUserAlt /> My Profile</Dropdown.Item>
                                                <Dropdown.Item href="#"><FaEdit /> Edit Profile</Dropdown.Item>
                                                <Dropdown.Item href="#"><AiFillSetting /> Manage Services</Dropdown.Item>
                                                <Dropdown.Item href="#"><FaEnvelope /> Inbox</Dropdown.Item>
                                                <Dropdown.Item href="#"><AiFillSetting /> Settings</Dropdown.Item>
                                                <Dropdown.Item href="#"><FaQuestionCircle /> Help</Dropdown.Item>
                                                <Dropdown.Item href="#"><AiOutlineLogin /> Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;