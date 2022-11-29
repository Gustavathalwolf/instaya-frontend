import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
       <nav className="navbar navbar-dark bg-primary mt-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Instaya</a>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Iniciar sesion</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Registrarse</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/orders-home">Lista de ordenes</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar