import '../components/AsideDashboard.css'
import { Link } from 'react-router-dom'
export function AsideDashboard() {
    return (
        <aside className="w-64 bg-gray-800 flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center mb-12">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex justify-center items-center text-white font-bold mr-3">
              N
            </div>
            <span className="font-semibold text-white text-lg">NombreApp</span>
          </div>
          <nav className="space-y-4">
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-700 hover:bg-indigo-600">
              Dashboard
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-700 hover:bg-indigo-600">
              Perfil
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-700 hover:bg-indigo-600">
              Configuración
            </a>
          </nav>
        </div>
        <div>
          <button className="block px-4 py-2 rounded-lg hover:bg-gray-700 hover:bg-indigo-600" ><Link to="/">Cerrar Sesión</Link></button>
        </div>
      </aside>
    )
}
