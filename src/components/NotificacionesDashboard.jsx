export function NotificacionesDashboard(){
    return(
        <div className="md:col-span-2 bg-gray-800 rounded-xl p-6 space-y-6">
              <h3 className="text-white text-lg font-semibold mb-3">Notificaciones</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white">Actualización del sistema programada</p>
                  <p className="text-gray-400 text-sm">El mantenimiento se realizará el 25 de Diciembre a las 10 PM.</p>
                  <hr className="border-gray-700 mt-3" />
                </div>
                <div>
                  <p className="font-semibold text-white">Nueva factura disponible</p>
                  <p className="text-gray-400 text-sm">Tu factura de Noviembre ya está lista para descargar.</p>
                  <hr className="border-gray-700 mt-3" />
                </div>
                <div>
                  <p className="font-semibold text-white">Recordatorio de reunión</p>
                  <p className="text-gray-400 text-sm">Tienes una reunión de equipo hoy a las 3 PM.</p>
                </div>
              </div>
              <a href="#" className="text-indigo-600 font-semibold mt-4 inline-block">Ver todas las notificaciones</a>
            </div>
    )
}