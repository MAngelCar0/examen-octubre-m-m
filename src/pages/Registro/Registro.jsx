import './Registro.css'
export function Registro() {
    return (
        <div className="bg-white reg-comtainer">
            <section className="reg-section">
                <h1 className="reg-title">Crea tu Cuenta</h1>
                <p className="reg-subtitle">Regístrate para empezar a usar la aplicacion </p>
            </section>
            <form className="reg-form" >
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">
                                    Nombre
                                </label>
                                <input placeholder="Ingresa tu nombre" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">
                                    Correo Electrónico
                                </label>
                                <input placeholder="tucorreo@ejemplo.com" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">
                                    Contraseña
                                </label>
                                <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Crea una contraseña segura" id="password" type="password" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">
                                    Confirmar Contraseña
                                </label>
                                <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Vuelve a escribir la contraseña" id="confirmPassword" type="password" />
                            </div>


                            <button class="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                                Registrarse
                            </button>
                        </div>
                    </div>
                </div></form>
            <section className="reg-section">
                <p className="reg-subtitle">¿Ya tienes una cuenta? <a href="#" class="font-medium text-primary-600 hover:underline">Inicia sesión</a></p>
            </section>
        </div>
    )
}
