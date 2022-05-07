import Image from "next/image";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logoHeader from "../public/assets/img/logo.png";

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar_top">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={logoHeader} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto menuList">
                            <Nav.Link href="">About</Nav.Link>
                            <Nav.Link href="">What We Do</Nav.Link>
                            <Nav.Link href="">All Plans</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto signLogBtn">
                            <Nav.Link href="#home">Sign In</Nav.Link>
                            <Nav.Link href="#link" className="act">Join</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;