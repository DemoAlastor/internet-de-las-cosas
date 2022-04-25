import React from "react"
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { postLogoff } from '../Services/ServiciosUsuario'

const NavBar = () => {
    const CerrarSesion = () => {
        console.log('sesion cerrada')
        postLogoff()
    }
    return (
        <Navbar bg ='dark' variant = 'dark' collapseOnSelect expand ='lg' >
            <Container>
                <Navbar.Toggle aria-controls = "responsive-navbar-nav"/> 
                <Navbar.Collapse>
                    <Nav className="mx-auto">
                        <Nav.Item>
                            <Link to={"/inicio"} className="nav-link active">Inicio</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={"/registro"} className="nav-link active" >Registro</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={"/"} className="nav-link active" >Login</Link>
                        </Nav.Item>
                        <NavDropdown title = 'Menu'>
                            <Link className="dropdown-item" to={"/perfil"}>Perfil</Link>
                            <Link className="dropdown-item" to={"/Opcion"}>Opcion 2</Link>
                            <NavDropdown.Divider/>
                            <Link className="dropdown-item" onClick={CerrarSesion} to={"/"}>Cerrar Sesion</Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default NavBar;