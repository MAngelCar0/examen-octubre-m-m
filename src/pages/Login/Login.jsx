import './Login.css'
import { Link } from 'react-router-dom'
export function Login() {
  return (
<div className="bg-[#0B101D] flex flex-col items-center justify-center h-screen dark">
    <h1 className="text-3xl font-bold text-gray-200 mb-2">Iniciar Sesión</h1>
    <h2 className="text-1xl font-bold text-gray-500 mb-7">Bienvenido de nuevo. Accede a tu cuenta.</h2>
  <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
    <form className="flex flex-col">
        <p className="text-sm text-gray-100 mb-4">Email o Nombre De Usuario.</p>
      <input placeholder="tu@ejemplo.com" className="bg-[#0B101D] text-gray-200 border border-transparent rounded-md p-2 mb-4 focus:bg-gray-900 focus:outline-none focus:border-blue-700 transition ease-in-out duration-150" type="email"/>
      <a className="text-sm ml-56 text-blue-500 hover:underline mb-0.5" href="#">¿Olvidaste tu contraseña?</a>
        <p className="text-sm text-gray-100 mb-5">Contraseña.</p>
      <input placeholder="Contraseña" className="bg-[#0B101D] text-gray-200 border border-transparent rounded-md p-2 mb-4 focus:bg-gray-900 focus:outline-none focus:border-blue-900 transition ease-in-out duration-150" type="password"/>
      <div className="flex items-center justify-between flex-wrap">
      </div>
      <button className="bg-gradient-to-r from-indigo-500 to-blue-800 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit" ><Link to="/dashboard">Iniciar Sesión</Link></button> 
    </form>
  </div>
  <p className="text-sm text-gray-500 mt-4">¿No tienes una cuenta? <Link className="text-blue-500 hover:underline" to="/registro">Regístrate</Link></p>
</div>
  )
}
    