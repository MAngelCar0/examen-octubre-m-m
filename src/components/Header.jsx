import './Header.css'   
export function Header (){
    return (
        <header className="Header-Container">
            <h2 className="Header-Title">Mi Aplicacion</h2>
            <a href="" className="Header-Login">Iniciar Sesión</a>
            <button className="Header-Register"><a href="">Registrarse</a></button>
        </header>
    )
}
