import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logoHeader from "../../public/assets/img/logo.png";
import Link from 'next/link';

const NavBar = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 1);
        });
    }, []);
    return (
        <>
            <Navbar expand="lg" className={scroll ? "navbar_top nabActive" : "navbar_top"}>
                <Container>
                    <Link href="/">
                        <a className='navbar-brand'><Image src={logoHeader} alt="Logo" /></a>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto menuList">
                            <Nav.Link href="">About</Nav.Link>
                            <Nav.Link href="">What We Do</Nav.Link>
                            <Nav.Link href="">All Plans</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto signLogBtn">
                            <Link href="/sign-in"><a className='nav-link'>Sign In</a></Link>
                            <Link href="/sign-up"><a className='nav-link act'>Join</a></Link>
                            {/* <Nav.Link href="#link" className=""></Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;