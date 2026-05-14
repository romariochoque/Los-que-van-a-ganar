<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manq'a y Wayna - Plataforma de Apoyo</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Nunito', sans-serif; background-color: #fffaf4; color: #1f2937; }
        .bg-orange-brand { background-color: #ff6b00; }
        .text-orange-brand { color: #ff6b00; }
        .border-orange-brand { border-color: #ff6b00; }
        .blur-content { filter: blur(8px); pointer-events: none; user-select: none; transition: filter 0.3s; }
        .modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1000; justify-content: center; align-items: center; backdrop-filter: blur(4px); }
        .modal.active { display: flex; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    </style>
</head>
<body>

    <header class="bg-white px-8 py-6 flex flex-col md:flex-row justify-between items-center shadow-sm sticky top-0 z-40">
        <div class="cursor-pointer" onclick="mostrarInicio()">
            <h1 class="text-4xl font-extrabold flex items-center gap-3 text-gray-900">
                <i class="fas fa-heart text-orange-brand"></i> Manq'a y Wayna
            </h1>
            <p class="text-gray-500 mt-1 font-semibold">Apoyando emprendedores bolivianos con tradición y corazón</p>
        </div>
        <div class="text-right mt-4 md:mt-0 flex flex-col items-end">
            <h2 class="text-3xl font-extrabold text-orange-brand">Bs. 23.900</h2>
            <p class="text-gray-500 text-sm font-semibold mb-2">Total recaudado</p>
            <button onclick="mostrarRegistro()" class="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded-full font-bold transition">
                <i class="fas fa-user-plus mr-1"></i> Crear mi Perfil
            </button>
        </div>
    </header>

    <div id="pantalla-inicio" class="max-w-7xl mx-auto px-8 py-8">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Todos los Emprendedores</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition cursor-pointer" onclick="entrarComoTurista()">
                <div class="relative h-56 bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1590736912338-316f71d18445?auto=format&fit=crop&w=800" class="w-full h-full object-cover">
                    <span class="absolute top-4 right-4 bg-orange-brand text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Gastronomía</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-extrabold text-gray-900 mb-1">Romario choque cabezas</h3>
                    <p class="text-sm text-gray-500 mb-3"><i class="fas fa-map-marker-alt mr-1"></i> La Paz, Bolivia</p>
                    <p class="text-sm text-gray-600 mb-6 line-clamp-2">Platos tradicionales preparados con ingredientes orgánicos.</p>
                    <button class="w-full bg-orange-brand text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition">Ver Perfil Completo</button>
                </div>
            </div>

            <div id="tarjeta-nuevo" class="hidden bg-white rounded-[2rem] shadow-sm border border-orange-200 overflow-hidden hover:shadow-lg transition cursor-pointer" onclick="verMiPerfil()">
                <div class="relative h-56 bg-orange-50 flex items-center justify-center">
                    <img id="card-img-nuevo" src="" class="w-full h-full object-cover hidden">
                    <i id="card-icon-nuevo" class="fas fa-camera text-4xl text-orange-300"></i>
                    <span id="card-rubro-nuevo" class="absolute top-4 right-4 bg-orange-brand text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Nuevo</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-extrabold text-gray-900 mb-1" id="card-nombre-nuevo">Nombre</h3>
                    <p class="text-sm text-gray-500 mb-3"><i class="fas fa-map-marker-alt mr-1"></i> Emprendedor Registrado</p>
                    <button class="w-full bg-orange-brand text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition">Ver Perfil Completo</button>
                </div>
            </div>
        </div>
    </div>

    <div id="pantalla-registro" class="hidden max-w-3xl mx-auto px-8 py-12">
        <div class="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 relative">
            <button onclick="mostrarInicio()" class="absolute top-8 right-8 text-gray-400 hover:text-gray-800"><i class="fas fa-times text-2xl"></i></button>
            <h2 class="text-3xl font-extrabold text-gray-900 mb-2" id="titulo-formulario">Crea tu Perfil Exclusivo</h2>
            <p class="text-gray-500 mb-8 font-semibold" id="subtitulo-formulario">Protege tu cuenta con una contraseña para ser el único que pueda editarla.</p>
            
            <form id="form-registro" class="space-y-6">
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-6">
                    <label class="block text-xs font-extrabold text-gray-700 uppercase mb-2"><i class="fas fa-lock text-orange-brand mr-1"></i> Crea una Contraseña (Obligatorio)</label>
                    <input type="password" id="reg-password" required placeholder="Escribe una contraseña secreta..." class="w-full p-3 rounded-xl border border-gray-300 focus:border-orange-brand outline-none font-bold">
                    <p class="text-xs text-gray-400 mt-2">Necesitarás esta contraseña si quieres cambiar tus fotos o cuenta bancaria más adelante.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div><label class="block text-xs font-extrabold text-gray-500 uppercase mb-1">Tu Nombre Completo</label><input type="text" id="reg-nombre" required class="w-full p-3 rounded-xl border border-gray-200 focus:border-orange-brand outline-none"></div>
                    <div><label class="block text-xs font-extrabold text-gray-500 uppercase mb-1">Categoría / Rubro</label><input type="text" id="reg-rubro" required placeholder="Ej: Gastronomía" class="w-full p-3 rounded-xl border border-gray-200 focus:border-orange-brand outline-none"></div>
                </div>
                
                <div><label class="block text-xs font-extrabold text-gray-500 uppercase mb-1">Número de Cuenta Bancaria</label><input type="text" id="reg-banco" required placeholder="Ej: Cta: 16778876" class="w-full p-3 rounded-xl border border-gray-200 focus:border-orange-brand outline-none"></div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-orange-50 p-6 rounded-2xl border border-orange-100">
                    <div>
                        <label class="block text-xs font-extrabold text-gray-700 uppercase mb-2"><i class="fas fa-image text-orange-brand mr-1"></i> Foto Principal</label>
                        <input type="file" id="reg-imagen-principal" accept="image/*" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-orange-100 file:text-orange-brand">
                    </div>
                    <div>
                        <label class="block text-xs font-extrabold text-gray-700 uppercase mb-2"><i class="fas fa-qrcode text-orange-brand mr-1"></i> Código QR Bancario</label>
                        <input type="file" id="reg-imagen-qr" accept="image/*" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-orange-100 file:text-orange-brand">
                    </div>
                </div>

                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                    <label class="block text-xs font-extrabold text-gray-700 uppercase mb-2">
                        <i class="fas fa-photo-film text-orange-brand mr-1"></i> Galería Exclusiva (Imágenes y Videos)
                    </label>
                    <input type="file" id="reg-galeria" accept="image/*,video/*" multiple class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-orange-100 file:text-orange-brand">
                    <p class="text-xs text-gray-400 mt-2">Puedes seleccionar varios archivos a la vez para tu galería.</p>
                </div>
                
                <div><label class="block text-xs font-extrabold text-gray-500 uppercase mb-1">Historia Corta</label><textarea id="reg-historia" rows="3" class="w-full p-3 rounded-xl border border-gray-200 focus:border-orange-brand outline-none"></textarea></div>
                
                <button type="submit" id="btn-guardar-form" class="w-full bg-orange-brand text-white py-4 rounded-xl font-extrabold text-lg shadow-lg hover:bg-orange-600 transition mt-4">Guardar y Proteger Perfil</button>
            </form>
        </div>
    </div>

    <div id="pantalla-perfil" class="hidden max-w-6xl mx-auto px-8 py-8">
        <div class="flex justify-between items-center mb-6">
            <button onclick="mostrarInicio()" class="text-gray-500 hover:text-orange-brand font-bold"><i class="fas fa-arrow-left mr-2"></i> Volver a Todos</button>
            
            <button id="btn-editar-perfil" onclick="pedirContraseñaParaEditar()" class="hidden bg-gray-900 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-gray-800 transition">
                <i class="fas fa-edit mr-1"></i> Editar Mi Perfil
            </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2 space-y-6">
                <h1 class="text-4xl font-extrabold text-gray-900" id="det-nombre">Nombre</h1>
                
                <div class="w-full h-80 md:h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <img id="det-imagen-principal" src="" class="w-full h-full object-cover">
                </div>
                
                <p class="text-orange-brand font-extrabold uppercase tracking-widest text-sm mt-2" id="det-rubro">Rubro</p>
                
                <div class="mt-8 border-b border-gray-100 pb-8">
                    <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Historia</h2>
                    <div class="text-gray-600 leading-relaxed space-y-4 font-medium" id="det-historia"></div>
                </div>

                <div class="mt-8">
                    <h2 class="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                        <i class="far fa-images"></i> Galería Exclusiva
                    </h2>
                    <div id="det-galeria-container" class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 text-center">
                    <p class="text-sm text-gray-500 font-bold mb-4 uppercase tracking-widest">Apoya Escaneando</p>
                    <div class="inline-flex justify-center items-center w-48 h-48 border-2 border-dashed border-gray-200 rounded-3xl mb-4 overflow-hidden bg-gray-50 relative">
                        <i id="icono-qr-default" class="fas fa-qrcode text-6xl text-gray-400 absolute"></i>
                        <img id="det-imagen-qr" src="" class="w-full h-full object-cover hidden z-10 relative">
                    </div>
                    <p class="text-sm text-gray-400 font-bold" id="det-banco">Cta: ---</p>
                </div>

                <h3 class="text-xl font-extrabold text-gray-900 mt-8 mb-4">Recompensas para Donantes</h3>
                
                <div class="bg-white border border-gray-100 p-6 rounded-[2rem] hover:shadow-md transition">
                    <h4 class="font-extrabold text-lg text-gray-900 flex items-center gap-2 mb-2">
                        <i class="fas fa-video text-orange-brand"></i> Video de Cocina en Vivo
                    </h4>
                    <p class="text-sm text-gray-600 mb-6 font-medium">Sesión exclusiva donde preparo un plato tradicional explicando cada secreto y técnica ancestral.</p>
                    <button class="bg-orange-brand text-white px-5 py-2 rounded-full font-bold text-sm shadow-md hover:scale-105 transition">Desde Bs. 100</button>
                </div>

                <div class="bg-white border border-gray-100 p-6 rounded-[2rem] hover:shadow-md transition">
                    <h4 class="font-extrabold text-lg text-gray-900 flex items-center gap-2 mb-2">
                        <i class="fas fa-book-open text-orange-brand"></i> Cena Especial + Libro
                    </h4>
                    <p class="text-sm text-gray-600 mb-6 font-medium">Cena preparada personalmente para 2 personas más un libro digital con 20 recetas ancestrales.</p>
                    <button class="bg-orange-brand text-white px-5 py-2 rounded-full font-bold text-sm shadow-md hover:scale-105 transition">Desde Bs. 250</button>
                </div>
            </div>
        </div>
    </div>

    <div id="modal-seguridad" class="modal">
        <div class="bg-white w-full max-w-sm rounded-[2rem] p-8 shadow-2xl relative m-4 text-center">
            <button onclick="cerrarModalSeguridad()" class="absolute top-5 right-5 text-gray-400 hover:text-gray-800"><i class="fas fa-times text-xl"></i></button>
            <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-lock text-2xl text-orange-brand"></i>
            </div>
            <h2 class="text-2xl font-extrabold text-gray-900 mb-2">Seguridad</h2>
            <p class="text-sm text-gray-500 font-semibold mb-6">Ingresa tu contraseña para editar este perfil.</p>
            
            <input type="password" id="input-verificar-password" class="w-full p-3 rounded-xl border border-gray-300 focus:border-orange-brand outline-none text-center font-bold mb-4" placeholder="Tu contraseña secreta">
            
            <button onclick="verificarYEditar()" class="w-full bg-gray-900 text-white py-3 rounded-xl font-extrabold text-lg hover:bg-black transition">Verificar y Entrar</button>
        </div>
    </div>

    <script>
        let perfilUsuario = null; 
        let modoEdicion = false;

        function ocultarTodo() {
            document.getElementById('pantalla-inicio').classList.add('hidden');
            document.getElementById('pantalla-registro').classList.add('hidden');
            document.getElementById('pantalla-perfil').classList.add('hidden');
        }

        function mostrarInicio() {
            ocultarTodo();
            document.getElementById('pantalla-inicio').classList.remove('hidden');
        }

        function mostrarRegistro() {
            modoEdicion = false;
            document.getElementById('titulo-formulario').innerText = "Crea tu Perfil Exclusivo";
            document.getElementById('btn-guardar-form').innerText = "Guardar y Proteger Perfil";
            if(!perfilUsuario) document.getElementById('form-registro').reset();
            
            ocultarTodo();
            document.getElementById('pantalla-registro').classList.remove('hidden');
        }

        document.getElementById('form-registro').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const passwordIngresada = document.getElementById('reg-password').value;

            if (!modoEdicion) {
                perfilUsuario = {
                    password: passwordIngresada,
                    nombre: document.getElementById('reg-nombre').value,
                    rubro: document.getElementById('reg-rubro').value,
                    banco: document.getElementById('reg-banco').value,
                    historia: document.getElementById('reg-historia').value,
                    fotoURL: "",
                    qrURL: "",
                    galeria: [] // NUEVO: Array para guardar imágenes y videos
                };
            } else {
                perfilUsuario.password = passwordIngresada;
                perfilUsuario.nombre = document.getElementById('reg-nombre').value;
                perfilUsuario.rubro = document.getElementById('reg-rubro').value;
                perfilUsuario.banco = document.getElementById('reg-banco').value;
                perfilUsuario.historia = document.getElementById('reg-historia').value;
            }

            const inputFoto = document.getElementById('reg-imagen-principal').files[0];
            const inputQR = document.getElementById('reg-imagen-qr').files[0];
            const inputGaleria = document.getElementById('reg-galeria').files; // Múltiples archivos

            if (inputFoto) perfilUsuario.fotoURL = URL.createObjectURL(inputFoto);
            if (inputQR) perfilUsuario.qrURL = URL.createObjectURL(inputQR);

            // NUEVO: Procesar archivos de la galería si subió alguno nuevo
            if (inputGaleria.length > 0) {
                perfilUsuario.galeria = []; // Limpiamos la anterior y cargamos los nuevos
                for(let i = 0; i < inputGaleria.length; i++) {
                    perfilUsuario.galeria.push({
                        url: URL.createObjectURL(inputGaleria[i]),
                        tipo: inputGaleria[i].type // Para saber si es image o video
                    });
                }
            }

            document.getElementById('tarjeta-nuevo').classList.remove('hidden');
            document.getElementById('card-nombre-nuevo').innerText = perfilUsuario.nombre;
            document.getElementById('card-rubro-nuevo').innerText = perfilUsuario.rubro;
            if(perfilUsuario.fotoURL) {
                document.getElementById('card-img-nuevo').src = perfilUsuario.fotoURL;
                document.getElementById('card-img-nuevo').classList.remove('hidden');
                document.getElementById('card-icon-nuevo').classList.add('hidden');
            }

            verMiPerfil();
        });

        function verMiPerfil() {
            if(!perfilUsuario) return;

            document.getElementById('det-nombre').innerText = perfilUsuario.nombre;
            document.getElementById('det-rubro').innerText = perfilUsuario.rubro;
            document.getElementById('det-banco').innerText = perfilUsuario.banco;
            document.getElementById('det-historia').innerHTML = `<p>${perfilUsuario.historia}</p>`;
            
            if(perfilUsuario.fotoURL) document.getElementById('det-imagen-principal').src = perfilUsuario.fotoURL;
            
            if(perfilUsuario.qrURL) {
                document.getElementById('det-imagen-qr').src = perfilUsuario.qrURL;
                document.getElementById('det-imagen-qr').classList.remove('hidden');
                document.getElementById('icono-qr-default').classList.add('hidden');
            }

            // NUEVO: Renderizar la Galería
            const galeriaContainer = document.getElementById('det-galeria-container');
            galeriaContainer.innerHTML = ''; // Limpiar el contenedor

            if (perfilUsuario.galeria && perfilUsuario.galeria.length > 0) {
                perfilUsuario.galeria.forEach(archivo => {
                    let elementoHtml = '';
                    
                    // Si el archivo es un video, le ponemos el icono de Play encima
                    if (archivo.tipo.startsWith('video/')) {
                        elementoHtml = `
                            <div class="aspect-square bg-black rounded-2xl relative overflow-hidden group cursor-pointer" onclick="alert('Contenido bloqueado. Se requiere donación.')">
                                <video src="${archivo.url}" class="w-full h-full object-cover blur-content"></video>
                                <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10">
                                    <i class="fas fa-play text-white text-3xl z-20"></i>
                                </div>
                            </div>
                        `;
                    } else {
                        // Si es imagen
                        elementoHtml = `
                            <div class="aspect-square bg-gray-100 rounded-2xl relative overflow-hidden group cursor-pointer" onclick="alert('Contenido bloqueado. Se requiere donación.')">
                                <img src="${archivo.url}" class="w-full h-full object-cover blur-content">
                            </div>
                        `;
                    }
                    galeriaContainer.innerHTML += elementoHtml;
                });
            } else {
                // Si aún no ha subido nada, mostramos cuadros grises por defecto
                galeriaContainer.innerHTML = `
                    <div class="aspect-square bg-gray-100 rounded-2xl flex justify-center items-center text-gray-300 text-4xl"><i class="far fa-image"></i></div>
                    <div class="aspect-square bg-gray-100 rounded-2xl flex justify-center items-center text-gray-300 text-4xl"><i class="far fa-image"></i></div>
                    <div class="aspect-square bg-gray-100 rounded-2xl flex justify-center items-center text-gray-300 text-4xl"><i class="fas fa-video"></i></div>
                `;
            }

            document.getElementById('btn-editar-perfil').classList.remove('hidden');

            ocultarTodo();
            document.getElementById('pantalla-perfil').classList.remove('hidden');
        }

        function entrarComoTurista() {
            document.getElementById('det-nombre').innerText = "Romario choque cabezas";
            document.getElementById('det-rubro').innerText = "ALIMENTOS";
            document.getElementById('det-banco').innerText = "Cta: 16778876";
            document.getElementById('det-historia').innerHTML = `<p>yo me llamo romaro soynun emrendedor de la epoc antiua sin nada y al maximo</p>`;
            document.getElementById('det-imagen-principal').src = "https://images.unsplash.com/photo-1590736912338-316f71d18445?auto=format&fit=crop&w=1200";
            
            // Galería por defecto para el perfil turista
            document.getElementById('det-galeria-container').innerHTML = `
                <div class="aspect-square bg-gray-100 rounded-2xl relative overflow-hidden group cursor-pointer" onclick="alert('Contenido bloqueado. Se requiere donación.')">
                    <img src="https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&w=400" class="w-full h-full object-cover blur-content">
                </div>
                <div class="aspect-square bg-gray-100 rounded-2xl relative overflow-hidden group cursor-pointer" onclick="alert('Contenido bloqueado. Se requiere donación.')">
                    <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=400" class="w-full h-full object-cover blur-content">
                </div>
                <div class="aspect-square bg-black rounded-2xl relative overflow-hidden group cursor-pointer" onclick="alert('Contenido bloqueado. Se requiere donación.')">
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400" class="w-full h-full object-cover blur-content opacity-50">
                    <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10">
                        <i class="fas fa-play text-white text-3xl z-20"></i>
                    </div>
                </div>
            `;

            document.getElementById('btn-editar-perfil').classList.add('hidden');
            
            ocultarTodo();
            document.getElementById('pantalla-perfil').classList.remove('hidden');
        }

        function pedirContraseñaParaEditar() {
            document.getElementById('input-verificar-password').value = "";
            document.getElementById('modal-seguridad').classList.add('active');
        }

        function cerrarModalSeguridad() {
            document.getElementById('modal-seguridad').classList.remove('active');
        }

        function verificarYEditar() {
            const intento = document.getElementById('input-verificar-password').value;
            
            if (intento === perfilUsuario.password) {
                cerrarModalSeguridad();
                modoEdicion = true;
                
                document.getElementById('titulo-formulario').innerText = "Editar Mi Perfil";
                document.getElementById('btn-guardar-form').innerText = "Guardar Cambios";
                
                document.getElementById('reg-password').value = perfilUsuario.password;
                document.getElementById('reg-nombre').value = perfilUsuario.nombre;
                document.getElementById('reg-rubro').value = perfilUsuario.rubro;
                document.getElementById('reg-banco').value = perfilUsuario.banco;
                document.getElementById('reg-historia').value = perfilUsuario.historia;
                
                ocultarTodo();
                document.getElementById('pantalla-registro').classList.remove('hidden');
            } else {
                alert("❌ Contraseña incorrecta. Solo el creador de este perfil puede editarlo.");
            }
        }
    </script>
</body>
</html>
