# Contexto de producto e interfaz

## Alcance de esta fase
Este documento define el contexto funcional y de interfaz para una mini aplicación inspirada en Airbnb. En esta fase solo se establece la planificación de vistas, contenido y flujo de usuario, sin implementación de páginas ni componentes.

## Vistas principales

### 1) Home (`/`)
Vista inicial de descubrimiento. Presenta la navegación principal, un bloque de búsqueda y una selección de tarjetas de alojamientos destacados para iniciar la exploración.

### 2) Catálogo de resultados (`/catalog`)
Vista de exploración de resultados según criterios de búsqueda. Muestra una lista de alojamientos en tarjetas y un área de mapa para dar contexto geográfico a los resultados.

### 3) Detalle de habitación (`/rooms/[id]`)
Vista de decisión. Muestra la información completa de un alojamiento concreto: galería, datos clave de la propiedad, detalles del anfitrión y un bloque de reserva.

## Qué muestra cada página

### Home (`/`)
- Navegación principal (logo, acceso a secciones y acciones de usuario).
- Buscador de destino, fechas y huéspedes.
- Tarjetas de alojamientos destacados o recomendados.
- Enfoque mobile-first con jerarquía visual simple y CTA claro.

### Catálogo (`/catalog`)
- Encabezado con resumen de búsqueda activa.
- Filtros principales (precio, tipo de alojamiento, servicios, etc.).
- Tarjetas de resultados con imagen, ubicación, precio y rating.
- Área de mapa asociada a los resultados.
- Diseño mobile-first: lista prioritaria en móvil y distribución lista/mapa optimizada en pantallas grandes.

### Detalle (`/rooms/[id]`)
- Galería de imágenes del alojamiento.
- Información principal (título, ubicación, valoración, características).
- Descripción y servicios.
- Información del anfitrión y reglas básicas.
- Sección de reserva con precio, fechas, huéspedes y CTA de reserva.
- Enfoque mobile-first con acciones de reserva visibles y persistentes.

## Componentes principales por vista (referencia Airbnb)

### Home (`/`)
- Header de navegación.
- Barra/Modal de búsqueda (destino, fechas, huéspedes).
- Chips o accesos rápidos de categorías.
- Grid/Carousel de tarjetas de alojamiento.
- Footer básico.

### Catálogo (`/catalog`)
- Header compacto con búsqueda editable.
- Barra de filtros y orden.
- Lista de tarjetas de resultado.
- Tarjeta de resultado (imagen, precio por noche, rating, ubicación, badges).
- Panel o bloque de mapa con marcadores.
- Estado vacío/sin resultados.

### Detalle (`/rooms/[id]`)
- Galería principal de fotos.
- Bloque de resumen del alojamiento.
- Sección de amenities/servicios.
- Sección de descripción y reglas.
- Card de anfitrión.
- Widget de reserva (precio, calendario, huéspedes, CTA).
- Bloque de políticas y disponibilidad.

## Usuario objetivo
La plataforma está pensada para personas que quieren reservar alojamiento de forma rápida y confiable para un viaje corto o medio. Su objetivo principal es comparar opciones por ubicación, precio y calidad percibida, para elegir una estancia que se ajuste a sus fechas, presupuesto y número de huéspedes.

## Flujo general del usuario
1. El usuario entra al Home (`/`).
2. Define destino, fechas y huéspedes desde el buscador.
3. Navega al catálogo (`/catalog`) y revisa resultados, filtros y mapa.
4. Selecciona un alojamiento de interés.
5. Consulta el detalle (`/rooms/[id]`) para validar fotos, condiciones y precio.
6. Revisa la sección de reserva y queda listo para confirmar.

## Principios de implementación (para fases siguientes)
- Enfoque mobile-first en estructura y prioridades de contenido.
- Navegación entre vistas mediante enrutado del App Router sin recarga completa del navegador.
- Sin uso de librerías de componentes UI preconstruidas (por ejemplo: shadcn, MUI, Ant Design, Chakra).
