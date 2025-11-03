import React from 'react';
import { AsideDashboard } from '../../components/AsideDashboard'
import { AccesosDashboard } from '../../components/AccesosDashboard'
import { StadisticasDashboard } from '../../components/StadisticasDashboard'
import { NotificacionesDashboard } from '../../components/NotificacionesDashboard'

export function Dashboard() {
    return (
        <div className="flex min-h-screen bg-gray-900 text-gray-300">
            <AsideDashboard />
            <main className="flex-1 p-6 space-y-6">
                <header className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <h2 className="text-white font-semibold">Bienvenido de nuevo</h2>
                    <img
                        src="https://randomuser.me/api/portraits/men/41.jpg"
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                    />
                </header>
                <section>
                    <h1 className="text-white text-3xl font-bold mb-1">Panel de Control</h1>
                    <p className="text-gray-400 mb-6">Un resumen de la actividad de tu cuenta.</p>
                    <StadisticasDashboard />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <NotificacionesDashboard />
                        <AccesosDashboard />
                    </div>
                </section>
            </main>
        </div>
    );
};

