import { Link } from 'react-router-dom'
import './Header.css'   
export function Header (){
    return (
        <header className="Header-Container">
            <h2 className="Header-Title">Mi Aplicacion</h2>
            <Link to="/login" className="Header-Login">Iniciar Sesión</Link>
            <button className="Header-Register"><Link to="/registro">Registrarse</Link></button>
        </header>
    )
}
