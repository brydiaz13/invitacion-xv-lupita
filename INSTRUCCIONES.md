# INVITACIÓN DIGITAL XV AÑOS - MARÍA GUADALUPE DÍAZ SANTIAGO

## 📋 Información del Evento

| Dato | Detalle |
|------|---------|
| **Quinceañera** | María Guadalupe Díaz Santiago |
| **Fecha** | 13 de junio de 2026 |
| **Hora** | 3:00 PM - 6:00 PM (hora de comida) |
| **Lugar** | Salon La Tortuga, Calle Calmecac, El Cerrito, Zempoala, Hidalgo |
| **Padre** | Luciano Díaz Sánchez |
| **Madre** | Laura Joana Santiago López |

## 📝 Poema

> Con amor creciste,
> con amor nos llenas,
> hoy con amor celebramos
> a la joven que eres.

## ✨ Funcionalidades Implementadas

- [x] Portada animada con nombre
- [x] Fondo floral/romántico (rosa, dorado, blanco)
- [x] Poema sobre familia y amor
- [x] Cuenta regresiva (días, horas, minutos, segundos)
- [x] Botón de ubicación (Google Maps + Waze)
- [x] Música de fondo
- [x] Galería de 3 fotos
- [x] RSVP / Confirmar asistencia
- [x] Confeti animado
- [x] Flores animadas flotando

## 📁 Estructura del Proyecto

```
invitacion_XV_Lupita/
├── index.html          (estructura principal)
├── styles.css          (diseño floral/romántico)
├── script.js           (funcionalidades)
├── AGENTS.md           (guías para desarrolladores)
├── INSTRUCCIONES.md    (este archivo)
└── assets/
    ├── musica.mp3      ← AGREGAR: tu canción
    ├── foto1.jpg       ← AGREGAR: foto 1
    ├── foto2.jpg       ← AGREGAR: foto 2
    └── foto3.jpg       ← AGREGAR: foto 3
```

## 🔧 PASOS PARA COMPLETAR LA INVITACIÓN

### 1. Agregar Música
Coloca tu archivo de música en `assets/musica.mp3`
- Formato recomendado: MP3
- Duración sugerida: 1-3 minutos

### 2. Agregar Fotos
Coloca 3 fotos de María Guadalupe en la carpeta `assets/`:
- `foto1.jpg`
- `foto2.jpg`
- `foto3.jpg`
- Formato recomendado: JPG, PNG
- Tamaño sugerido: 800x600px o más

### 3. Configurar Ubicación (Opcional)
Para cambiar el enlace del mapa:
1. Busca la ubicación en Google Maps
2. Click en "Compartir" > "Insertar un mapa"
3. Copia el iframe o el link
4. Actualiza el archivo `index.html` en la sección de ubicación

## 🌐 CÓMO SUBIR A PRODUCCIÓN (HOSTING GRATIS)

### Opción 1: Netlify (Más fácil)
1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta completa del proyecto
3. Listo! Obtendrás un enlace para compartir

### Opción 2: GitHub Pages (Gratis)
1. Crea una cuenta en https://github.com
2. Crea un nuevo repositorio
3. Sube todos los archivos del proyecto
4. Ve a Settings > Pages
5. Selecciona "main" branch y guarda
6. Tu invitación estará en: `https://tusuario.github.io/repositorio`

### Opción 3: Vercel (Gratis)
1. Ve a https://vercel.com
2. Regístrate con GitHub o email
3. Crea un nuevo proyecto
4. Arrastra la carpeta del proyecto
5. Obtén un enlace para compartir

## 📱 Cómo Compartir

### WhatsApp
1. Copia el enlace de Netlify/Vercel/GitHub Pages
2. Envía el enlace a tus invitados

### Instagram Stories
- Usa la función de enlace en historias
- O comparte el enlace en tu bio

### Mensajes de texto
- Envía el enlace directamente

## 🎨 Personalización Adicional

### Cambiar colores
En `styles.css`, busca las variables en `:root`:
```css
:root {
    --color-principal: #d4a5a5;     /* Rosa */
    --color-dorado: #c9a227;        /* Dorado */
    --color-fondo: #fdf6f0;         /* Crema */
}
```

### Cambiar fuentes
En `index.html`, modifica los Google Fonts en la línea de `<link>`

### Cambiar poema
En `index.html`, busca la sección del poema y edítalo

## 📞 Notas Importantes

- Los placeholders de fotos (📷) desaparecen automáticamente cuando agregas las fotos
- La música requiere que el usuario toque el botón para reproducir (por políticas del navegador)
- Los botones de mapa abren Google Maps y Waze en una nueva pestaña
- La invitación es responsive y se ve bien en celulares y computadoras

## 🔧 Solución de Problemas

### La página no carga
- Verifica que todos los archivos estén en la misma carpeta
- Asegúrate de que `index.html` esté en la raíz

### Las fotos no aparecen
- Verifica que los nombres sean exactamente: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`
- Asegúrate de que estén en la carpeta `assets/`

### La música no suena
- Verifica que el archivo se llame `musica.mp3`
- Asegúrate de que esté en la carpeta `assets/`
- Toca el botón de música (el navegador bloquea la reproducción automática)

### El confeti/flores no aparecen
- Verifica que JavaScript esté habilitado en tu navegador
- Revisa la consola del navegador para errores

## 📞 Soporte
Si necesitas hacer cambios, modifica los archivos:
- `index.html` - Contenido y estructura
- `styles.css` - Colores y estilos
- `script.js` - Funcionalidades
- `assets/` - Imágenes y música
