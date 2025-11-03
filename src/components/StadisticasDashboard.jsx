export function StadisticasDashboard(){
    return(
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 rounded-xl p-5">
              <p className="text-gray-400">Proyectos Activos</p>
              <p className="text-white font-extrabold text-2xl">12</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-5">
              <p className="text-gray-400">Tareas Completadas</p>
              <p className="text-white font-extrabold text-2xl">86</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-5">
              <p className="text-gray-400">Alertas</p>
              <p className="text-white font-extrabold text-2xl">3</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-5">
              <p className="text-gray-400">Miembros del equipo</p>
              <p className="text-white font-extrabold text-2xl">8</p>
            </div>
          </div>
    )
}