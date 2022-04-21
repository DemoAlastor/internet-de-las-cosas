import React from "react"
import { Link } from 'react-router-dom'

const NavBar = () => {
    const CerrarSesion = () => {
        console.log('sesion cerrada')
    }
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/inicio"} className="nav-link active" aria-current="page" >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/registro"} className="nav-link active" aria-current="page" >Registro</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active" aria-current="page" >Login</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to={"/perfil"}>Perfil</Link></li>
                                <li><Link className="dropdown-item" onClick={CerrarSesion} to={"/"}>Cerrar Sesion</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;