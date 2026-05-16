// 1. INYECTAR EL DISEÑO VISUAL (HTML) DESDE JAVASCRIPT
const contenedorApp = document.createElement('div');
contenedorApp.innerHTML = `
    <div class="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow-lg border border-gray-200 font-sans">
        <h2 class="text-xl font-bold text-gray-800 mb-2">Panel del Emprendedor</h2>
        <p class="text-xs text-gray-600 mb-4">Ingresa tus datos para habilitar tu perfil y recibir donaciones directo a tu PayPal.</p>
        
        <label class="block text-xs font-bold text-gray-700 mb-1">Nombre Completo / Emprendimiento:</label>
        <input type="text" id="nombre-emprendedor" placeholder="Ej. Juan Pérez o Manjar Artesanal" class="w-full border border-gray-300 p-2 rounded mb-3 text-sm focus:outline-none focus:border-[#4A90E2]">
        
        <label class="block text-xs font-bold text-gray-700 mb-1">Correo Electrónico de PayPal:</label>
        <input type="email" id="email-emprendedor" placeholder="correo.emprendedor@gmail.com" class="w-full border border-gray-300 p-2 rounded mb-3 text-sm focus:outline-none focus:border-[#4A90E2]">
        
        <button id="btn-guardar-datos" class="w-full bg-[#4A90E2] text-white py-2 rounded font-medium hover:bg-[#357ABD] transition">
            Guardar mis datos de perfil
        </button>
        <p id="mensaje-exito" class="text-green-600 text-xs font-bold mt-2 hidden">¡Datos guardados con éxito! Tu perfil está activo.</p>
    </div>

    <div class="max-w-md mx-auto mt-10 text-center font-sans">
        <h3 class="text-lg font-bold text-gray-800 mb-3">Perfil Público del Emprendedor</h3>
        <button id="btn-abrir-modal" class="bg-[#4DB6AC] text-white px-6 py-2 rounded-full font-bold shadow hover:bg-[#3da096] transition">
            Apoyar a este Emprendedor
        </button>
    </div>

    <div id="modal-pago" class="hidden fixed inset-0 bg-black/40 flex justify-center items-center z-50 font-sans">
        <div class="bg-white w-full max-w-[420px] rounded shadow-2xl overflow-hidden relative">
            <div class="bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] py-4 text-center">
                <h2 class="text-white text-2xl font-medium tracking-wide">Enviar Apoyo</h2>
            </div>

            <div class="p-6">
                <div class="bg-[#E0F7FA] p-4 mb-5 border border-[#B2EBF2] rounded-sm">
                    <div class="text-center mb-2 text-[11px] uppercase font-bold tracking-wider text-[#0D47A1]/70">
                        Estás apoyando a:
                    </div>
                    <div class="flex flex-col items-center justify-center text-[#0D47A1] text-center">
                        <div id="modal-ver-nombre" class="text-lg font-bold leading-tight mb-1">-</div>
                        
                        <div class="w-full border-t border-[#B2EBF2] my-2"></div>
                        
                        <div class="flex justify-between w-full text-[11px] opacity-90">
                            <div class="flex-1 text-left">
                                <span class="font-bold">ID Emprendedor:</span><br>
                                <span id="modal-ver-id">#000000</span>
                            </div>
                            <div class="flex-1 text-right">
                                <span class="font-bold">Cuenta de Destino:</span><br>
                                <span id="modal-ver-email" class="break-all">-</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-6">
                    <p class="text-xs font-bold text-gray-800 mb-2">Selecciona el Monto de tu Donación:</p>
                    <div class="flex border border-[#90CAF9] rounded-sm overflow-hidden" id="contenedor-montos">
                        <button class="monto-btn flex-1 py-1.5 text-[13px] text-[#1976D2] bg-white border-r border-[#90CAF9]" data-monto="5">$5</button>
                        <button class="monto-btn flex-1 py-1.5 text-[13px] text-[#1976D2] bg-white border-r border-[#90CAF9]" data-monto="10">$10</button>
                        <button class="monto-btn activo flex-1 py-1.5 text-[13px] text-white bg-[#4DB6AC] border-r border-[#4DB6AC]" data-monto="20">$20</button>
                        <button class="monto-btn flex-1 py-1.5 text-[13px] text-[#1976D2] bg-white border-r border-[#90CAF9]" data-monto="50">$50</button>
                        <button class="monto-btn flex-1 py-1.5 text-[13px] text-[#1976D2] bg-white border-r border-[#90CAF9]" data-monto="100">$100</button>
                        <button class="monto-btn flex-1 py-1.5 text-[13px] text-[#1976D2] bg-white" data-monto="500">$500</button>
                    </div>
                </div>

                <div id="paypal-button-container" class="w-full"></div>
                
                <div class="text-center mt-3">
                    <button id="btn-cerrar-modal" class="text-[11px] text-gray-400 hover:text-gray-600 underline">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
`;
// Agregar todo el diseño al cuerpo de la página web
document.body.appendChild(contenedorApp);

// 2. DEFINIR VARIABLES GLOBALES
let montoActual = "20.00"; 
let datosEmprendedor = {
    nombre: "",
    email: "",
    idSistema: ""
};

// 3. ASIGNAR LÓGICA A LOS BOTONES RECIÉN CREADOS
document.getElementById('btn-guardar-datos').addEventListener('click', function() {
    const txtNombre = document.getElementById('nombre-emprendedor').value.trim();
    const txtEmail = document.getElementById('email-emprendedor').value.trim();
    
    if(txtNombre === "" || !txtEmail.includes("@")) {
        alert("Por favor, introduce un nombre y un correo electrónico válido.");
        return;
    }

    datosEmprendedor.nombre = txtNombre;
    datosEmprendedor.email = txtEmail;
    datosEmprendedor.idSistema = "EMP-" + Math.floor(100000 + Math.random() * 900000);

    document.getElementById('modal-ver-nombre').innerText = datosEmprendedor.nombre;
    document.getElementById('modal-ver-email').innerText = datosEmprendedor.email;
    document.getElementById('modal-ver-id').innerText = datosEmprendedor.idSistema;

    document.getElementById('mensaje-exito').classList.remove('hidden');
});

document.getElementById('btn-abrir-modal').addEventListener('click', function() {
    if(datosEmprendedor.email === "") {
        alert("Simulación: Primero el emprendedor debe registrar sus datos en el panel superior.");
        return;
    }
    document.getElementById('modal-pago').classList.remove('hidden');
});

document.getElementById('btn-cerrar-modal').addEventListener('click', function() {
    document.getElementById('modal-pago').classList.add('hidden');
});

// Lógica de las pestañas de monto
const botonesMonto = document.querySelectorAll('.monto-btn');
botonesMonto.forEach(boton => {
    boton.addEventListener('click', function() {
        botonesMonto.forEach(b => {
            b.className = "monto-btn flex-1 py-1.5 text-[13px] text-[#1976D2] bg-white border-r border-[#90CAF9]";
        });
        botonesMonto[botonesMonto.length - 1].classList.remove('border-r');
        this.className = "monto-btn activo flex-1 py-1.5 text-[13px] text-white bg-[#4DB6AC] border-r border-[#4DB6AC]";
        montoActual = this.getAttribute('data-monto') + ".00";
    });
});
botonesMonto[botonesMonto.length - 1].classList.remove('border-r');

// 4. CARGAR EL SDK DE PAYPAL DINÁMICAMENTE
const scriptPayPal = document.createElement('script');
scriptPayPal.src = "https://www.paypal.com/sdk/js?client-id=AYaQ6yzDA23Y8uGbdm-3eV-BBgPRqbrLDOdh7FG_BBJpLyaZdePr-f50oOXcGcRqEXdgMG-4cicKfcFC&currency=USD";

// Cuando el script de PayPal termine de cargar, inicializamos los botones
scriptPayPal.onload = function() {
    paypal.Buttons({
        style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal', height: 40 },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: { value: montoActual },
                    payee: { 
                        email_address: datosEmprendedor.email
                    },
                    description: "Apoyo a Emprendedor - Manq'a y Wayna"
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(orderData) {
                alert('¡Donación procesada con éxito!\\nHas enviado $' + montoActual + ' USD directo a la cuenta de ' + datosEmprendedor.nombre);
                document.getElementById('modal-pago').classList.add('hidden');
            });
        },
        onError: function(err) {
            console.error(err);
            alert("Error en el pago. Asegúrate de que el correo de destino corresponda a una cuenta activa de PayPal.");
        }
    }).render('#paypal-button-container');
};

// Inyectamos el script de PayPal al final de la página
document.head.appendChild(scriptPayPal);
