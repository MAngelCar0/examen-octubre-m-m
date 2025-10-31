import '../components/AsideDashboard.css'
export function AsideDashboard() {
    return (
        <div className="dashboard-container">
            <div className="sidebar w-50 bg-[#0B101D]">
                <div className="w-full h-16 flex items-center p-4">
                    <p className="text-white text-2xl bg-blue-700 px-2 rounded font-bold mr-3">N</p>
                    <h1 className="text-1xl font-bold text-white">Nombre app</h1>
                </div>
                <div className="flex flex-col p-4 flex-grow">
                    <a className="text-gray-300 py-2 hover:bg-blue-700 px-4 rounded">Dashboard</a>
                    <a className="text-gray-300 py-2 hover:bg-blue-700 px-4 rounded">Perfil</a>
                    <a className="text-gray-300 py-2 hover:bg-blue-700 px-4 rounded">Configuración</a>
                </div>
                <div className="p-4 ">
                    <a className="text-gray-300 py-2 hover:bg-blue-700 px-4 rounded block">Cerrar sesión</a>
                </div>
            </div>
        </div>    
    )
}