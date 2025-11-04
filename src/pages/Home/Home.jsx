import './Home.css'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Link } from 'react-router-dom'
export function Home (){
    return (
        <><Header /><main className="Home-Container">
            <div className="Separador"></div>
            <article className="Home-Title-Principal">
                <h1>Bienvenido a Nuestra Plataforma</h1>
                <h3>Un espacio diseñado para simplificar tus tareas y potenciar tu productividad. Empieza en Segundos.</h3>
                <Link to="/Login"><button>Comenzar Ahora</button></Link>
            </article>
            <article className="Home-Title">
                <h2>Caracteristicas Principales</h2>
                <h3>Descubre Como Nuestra Plataforma Puede Ayudarte a Alcanzar Tus Objetivos De Manera Mas Eficiente.</h3>
            </article>
            <section className="Home-Cards-Container">
                <div className="Home-Card">
                    <h2>Gestion Centralizada</h2>
                    <p>Accede y Administra Todas Tus Herraientas y Datos Desde Un Unico Panel De Control Intuitivo.</p>
                </div>
                <div className="Home-Card">
                    <h2>Flujos De Trabajo Agiles</h2>
                    <p>Optimisa Tus Procesos y Colabora Con Tu Equipo En Tiempo Real Para Una Mayor Productividad.</p>
                </div>
                <div className="Home-Card">
                    <h2>Seguiridad Confiable</h2>
                    <p>Mnatenemos Tu Informacion Segura Con Protocolos De Encriptacion y Proteccion De Ultima Generacion.</p>
                </div>
                <div className="Separador"></div>
            </section>
        </main><Footer /></>
    )
}