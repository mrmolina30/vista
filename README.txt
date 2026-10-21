VISTA APARTAMIRADOR — PORTAL DEL CONSEJO
=========================================

ARCHIVOS
- index.html: contenido y enlaces del portal.
- styles.css: estilos y adaptación a escritorio, tablet y móvil.
- script.js: marca automáticamente las reuniones cuya fecha ya pasó.
- assets/logo_vista.png: logo suministrado.

CÓMO PUBLICARLO
1. Descarga y descomprime el ZIP en tu computador.
2. Entra al administrador de archivos de tu proveedor de hosting (o conéctate por FTP).
3. Abre la carpeta pública del sitio. Suele llamarse public_html, www o htdocs.
4. Sube index.html, styles.css y script.js directamente a esa carpeta.
5. Sube también la carpeta assets completa, conservando la ruta assets/logo_vista.png.
6. Visita tu dominio y verifica el sitio en computador y móvil.

No requiere base de datos, PHP, Node.js ni proceso de compilación. Es una página estática.

ACTUALIZAR EL INVENTARIO
En index.html, busca “Inventario de insumos”. Cuando tengas la URL de Google Drive, reemplaza el bloque:
<span class="card-link disabled-link">Enlace pendiente <span aria-hidden="true">•</span></span>
por un enlace como este:
<a class="card-link" href="PEGA_AQUI_LA_URL_DE_DRIVE" target="_blank" rel="noopener noreferrer">Abrir carpeta <span aria-hidden="true">→</span></a>

ACTUALIZAR FECHAS
En index.html, cada reunión tiene un elemento con data-date="AAAA-MM-DD". Cambia esa fecha y el texto del título. script.js marca como “Realizada” cualquier fecha anterior a la fecha local del dispositivo. La fecha del día no se marca como realizada hasta el día siguiente.

IMPORTANTE SOBRE PRIVACIDAD
La página no protege por sí sola los documentos ni oculta realmente las direcciones de Google Drive: solo muestra un botón con un texto más limpio. Los permisos de cada carpeta siguen dependiendo de Google Drive. Para información sensible (por ejemplo, cartera y morosos), configura el acceso de Drive únicamente para las cuentas autorizadas; evita “Cualquier persona con el enlace” si no corresponde.

FUENTES Y CONEXIÓN
El diseño usa Google Fonts para DM Sans y Manrope. Si el dispositivo no puede acceder a Google Fonts, se mostrarán fuentes de respaldo del sistema. Puedes alojar fuentes localmente si necesitas evitar esa dependencia.
