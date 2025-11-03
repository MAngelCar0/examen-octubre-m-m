export function AccesosDashboard() {
  return (
     <div className="bg-gray-800 rounded-xl p-6 flex flex-col space-y-4">
              <h3 className="text-white text-lg font-semibold mb-3">Accesos Directos</h3>
              <button className="bg-gray-700 hover:bg-indigo-700 text-white font-semibold rounded-lg py-2 px-4">Crear Nuevo Proyecto</button>
              <button className="bg-gray-700 hover:bg-indigo-700 text-gray-300 font-semibold rounded-lg py-2 px-4">Añadir Tarea</button>
              <button className="bg-gray-700 hover:bg-indigo-700 text-gray-300 font-semibold rounded-lg py-2 px-4">Invitar Miembro</button>
              <button className="bg-gray-700 hover:bg-indigo-700 text-gray-300 font-semibold rounded-lg py-2 px-4">Generar Reporte</button>
            </div>
    )
}
