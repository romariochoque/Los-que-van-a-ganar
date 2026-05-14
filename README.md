<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contenido Bolivia - Interactivo</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --primary: #111827;
            --card-bg: #ffffff;
            --text-main: #1f2937;
            --text-muted: #6b7280;
            --orange: #f97316;
            --blue: #3b82f6;
            --purple: #a855f7;
            --green: #22c55e;
            --gold: #f59e0b;
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
        
        body { 
            /* Fondo de aguayo con colores FUERTES y vibrantes */
            background: repeating-linear-gradient(
                -45deg,
                #D92525 0px,      /* Rojo */
                #D92525 20px,
                #FFFFFF 20px,     /* Blanco */
                #FFFFFF 23px,
                #F28705 23px,     /* Naranja */
                #F28705 35px,
                #F2C202 35px,     /* Amarillo */
                #F2C202 47px,
                #FFFFFF 47px,     
                #FFFFFF 50px,
                #04BF55 50px,     /* Verde */
                #04BF55 70px,
                #03658C 70px,     /* Azul */
                #03658C 82px,
                #6F2C91 82px,     /* Morado */
                #6F2C91 94px,
                #E80054 94px,     /* Fucsia */
                #E80054 114px
            );
            background-attachment: fixed;
            color: var(--text-main); 
            overflow-x: hidden; 
        }
        
        header {
            background-color: var(--card-bg);
            border-bottom: 1px solid #e5e7eb;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
        }
        .logo-section { display: flex; align-items: center; gap: 12px; cursor: pointer; }
        .logo-circle { background-color: var(--orange); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
        
        .nav-links { display: flex; gap: 10px; list-style: none; }
        .nav-links li a {
            text-decoration: none; color: var(--text-muted); font-weight: 500; font-size: 0.9rem;
            padding: 8px 12px; border-radius: 6px; transition: 0.2s; cursor: pointer;
        }
        .nav-links li a.active { background-color: #f3f4f6; color: var(--primary); font-weight: 600; }

        .page-section {
            display: none;
            max-width: 1000px;
            margin: 2rem auto;
            padding: 0 2rem;
            animation: fadeIn 0.4s ease-out;
        }
        .page-section.active { display: block; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        .hero-section { 
            text-align: center; 
            margin-bottom: 3rem; 
            background-color: rgba(255, 255, 255, 0.95);
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .cards-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .card {
            background: white; border: 1px solid #e5e7eb; padding: 1.5rem; border-radius: 12px;
            display: flex; flex-direction: column; justify-content: space-between; transition: 0.2s;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .card:hover { transform: translateY(-4px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
        
        .icon-box { width: 48px; height: 48px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.4rem; margin-bottom: 1rem; }
        .btn-explore {
            background: var(--primary); color: white; border: none; padding: 10px; border-radius: 8px;
            cursor: pointer; width: 100%; font-weight: 500; display: flex; justify-content: center; align-items: center; gap: 8px;
        }
        .placeholder-content {
            background: white; padding: 3rem; border-radius: 15px; text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }
        .boton {
            display: inline-block;
            background-color: var(--blue);
            color: white;
            padding: 10px 15px;
            text-decoration: none;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <header>
        <div class="nav-container">
            <div class="logo-section" onclick="showSection('inicio')">
                <div class="logo-circle">Wayna</div>
                <div class="logo-text"><strong>Contenido Wayna</strong></div>
            </div>
            <ul class="nav-links">
                <li><a id="link-inicio" class="active" onclick="showSection('inicio')"><i class="fa-solid fa-house"></i> Inicio</a></li>
                <li><a id="link-patrimonio" onclick="showSection('patrimonio')"><i class="fa-solid fa-landmark"></i> Patrimonio</a></li>
                <li><a id="link-videos" onclick="showSection('videos')"><i class="fa-solid fa-video"></i> Videos</a></li>
                <li><a id="link-recetas" onclick="showSection('recetas')"><i class="fa-solid fa-utensils"></i> Recetas</a></li>
            </ul>
        </div>
    </header>

    <section id="inicio" class="page-section active">
        <div class="hero-section">
            <h2>Explora, </h2>
            <p>Selecciona una categoría para comenzar</p>
        </div>
        <div class="cards-grid">
            <div class="card">
                <div class="icon-box" style="background: var(--orange)"><i class="fa-solid fa-landmark"></i></div>
                <h3>Impacto del producto</h3>
                <p>Descubre la rica historia y cultura de Bolivia</p>
                <button class="btn-explore" onclick="showSection('patrimonio')">Explorar <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div class="card">
                <div class="icon-box" style="background: var(--blue)"><i class="fa-solid fa-video"></i></div>
                <h3>Videos</h3>
                <p>Mira documentales y videos exclusivos del emprendedor.</p>
                <button class="btn-explore" onclick="showSection('videos')">Explorar <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div class="card">
                <div class="icon-box" style="background: var(--purple)"><i class="fa-solid fa-utensils"></i></div>
                <h3>Recetas</h3>
                <p>Aprende a preparar platos tradicionales de Bolivia</p>
                <button class="btn-explore" onclick="showSection('recetas')">Explorar <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </section>

    <section id="patrimonio" class="page-section">
        <div class="hero-section">
            <h2><i class="fa-solid fa-landmark"></i> Impacto del producto</h2>
            <p>Descubre la rica historia y cultura de Bolivia</p>
        </div>
        <div class="placeholder-content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMRrwIIzXrxM-_GN_O7zpVp3JUeE2LWCmNA&s" style="width:100%; border-radius:10px; margin-bottom:1rem;">
            <h3>Galletas: de cañahua</h3>
            <p>Origen Prehispánico: Fue la base alimentaria y de supervivencia de comunidades aymaras y quechuas.</p>
            <p>La mitología aimara relata que salvó a las poblaciones de la hambruna tras una devastadora sequía en la cuenca del Lago Titicaca</p>
        </div>
        <div class="placeholder-content">
            <img src="https://pedidos.waynamercados.com/storage/imagenes_productos/Photoroom-20250603_165853_db486fc8-7791-4d6c-83f7-7111dfe0cd1b_3058481f-d583-434b-8553-8d4b5c772cfa.png" style="width:100%; border-radius:10px; margin-bottom:1rem;">
            <h3>Barra de chocolate y coco: de cacao Boliviano</h3>
            <p>Los olmecas, una de las civilizaciones más antiguas de Latinoamérica, fueron los primeros en transformar la planta del cacao en chocolate.</p>
        </div>
        <div class="placeholder-content">
            <img src="https://pedidos.waynamercados.com/storage/imagenes_productos/Photoroom-20250826_141932%20(1)_a7c09c89-f072-4c17-8538-e63a02be67c0_0b4594b9-9abe-437e-88d2-03de40083950.png" style="width:100%; border-radius:10px; margin-bottom:1rem;">
            <h3>Mix de galletas: Galletas con una deliciosa fusión de sabores de mestiza, cañahua, quinua y chips de chocolate</h3>
            <p>Nuestras galletas mixtas te ofrecen los siguientes beneficios: · Son un alimento con alta calidad energética. · Buena calidad de proteínas. · Aportan fibra. · Contienen Omega 6.</p>
        </div>
    </section>

    <section id="videos" class="page-section">
        <div class="hero-section">
            <h2><i class="fa-solid fa-video"></i> Videos</h2>
            <p>Contenido del emprendedor</p>
        </div>
        <div class="cards-grid">
             <div class="card">
                <a class="boton" href="https://www.facebook.com/waynamercadodeemprendedores/posts/cecita-una-emprendedora-que-realiza-estas-deliciosas-mermeladas-que-las-encontra/814533134190967/" target="_blank">
                Ver Video 
                </a>
                <h3 style="margin-top:1rem;">VIDEO DE AYUDA</h3> 
            </div>
            <div class="card">
                <a class="boton" href="https://www.facebook.com/waynamercadodeemprendedores/posts/cecita-una-emprendedora-que-realiza-estas-deliciosas-mermeladas-que-las-encontra/814533134190967/" target="_blank">
                Ver Video 
                </a>
                <h3 style="margin-top:1rem;">VIDEO DE AYUDA</h3>
            </div>
            <div class="card">
                <a class="boton" href="https://www.facebook.com/waynamercadodeemprendedores/posts/cecita-una-emprendedora-que-realiza-estas-deliciosas-mermeladas-que-las-encontra/814533134190967/" target="_blank">
                Ver Video 
                </a>
                <h3 style="margin-top:1rem;">VIDEO DE AYUDA</h3>
            </div>
        </div>
    </section>

    <section id="recetas" class="page-section">
        <div class="hero-section">
            <h2><i class="fa-solid fa-utensils"></i> Recetas Bolivianas</h2>
        </div>
        <div class="placeholder-content">
            <img src="https://pedidos.waynamercados.com/storage/imagenes_productos/Photoroom-20250603_165853_db486fc8-7791-4d6c-83f7-7111dfe0cd1b_3058481f-d583-434b-8553-8d4b5c772cfa.png" style="width:100%; border-radius:10px; margin-bottom:1rem;">
            <h3>Barra de chocolate y coco: de cacao Boliviano</h3>
            <p><strong>Ingredientes necesarios:</strong></p>
            <p>Cacao en grano o en pasta: 300 gramos</p>
            <p>Manteca de cacao: 100 gramos</p>
            <p>Azúcar: 150 gramos (podés ajustar la cantidad según tu gusto)</p>
            <p>Leche en polvo (opcional para chocolate con leche): 50 gramos</p>
            <p>Esencia de vainilla (opcional): 1 cucharadita</p>
            <p>Frutos secos o frutas deshidratadas (opcional): cantidad a gusto</p>
        </div>
    </section>

    <script>
        function showSection(sectionId) {
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            
            document.getElementById(sectionId).classList.add('active');
            document.getElementById('link-' + sectionId).classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    </script>
</body>
</html>
