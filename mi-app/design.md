# Design System Analysis - Mini App tipo Airbnb

## 1) Estructura visual y jerarquía

La interfaz sigue una jerarquía visual vertical clara, apoyada en rejilla flexible y bloques con prioridad de conversión.

- **Home (`/`)**: el buscador central es el foco primario de atención. Se refuerza con elevación visual (sombra, contraste y separación del fondo).
- **Catálogo (`/catalog`)**: la prioridad recae en imagen de alojamiento (aprox. ratio 4:3), seguida por metadatos críticos: ubicación, título, rating y precio.
- **Detalle (`/rooms/[id]`)**: secuencia de lectura tipo embudo: galería dominante en cabecera, contenido descriptivo en columna principal y tarjeta de reserva con alto peso visual para impulsar decisión.

Patrones de jerarquía comunes:

- Nivel 1: acción principal (buscar o reservar).
- Nivel 2: evidencia visual (fotos, galería, mapa).
- Nivel 3: información de confianza (rating, reseñas, anfitrión, reglas).
- Nivel 4: datos complementarios (amenities, badges, notas).

## 2) Layout principal por página

### Home (`/`)

- Header de navegación con accesos globales.
- Bloque de búsqueda en posición protagonista.
- Sección de categorías/filtros rápidos en formato horizontal.
- Grid o carrusel de tarjetas destacadas.
- Footer básico de cierre.

Objetivo del layout: activar búsqueda rápidamente y ofrecer descubrimiento inmediato de opciones.

### Catálogo (`/catalog`)

- Header compacto con búsqueda en estado resumido.
- Barra de filtros/orden horizontal con pills.
- Área principal de resultados (lista de cards).
- Área de mapa asociada a resultados (en escritorio con presencia simultánea).

Objetivo del layout: facilitar comparación rápida de múltiples alojamientos con contexto geográfico.

### Detalle (`/rooms/[id]`)

- Cabecera con galería de imágenes protagonista.
- Columna principal con información del alojamiento (título, ubicación, rating, descripción, servicios, reglas, anfitrión).
- Columna lateral (o bloque persistente) para reserva con CTA de alta visibilidad.

Objetivo del layout: reducir incertidumbre y llevar al usuario a confirmar reserva.

## 3) Componentes detectados

- Header adaptable (logo, navegación, perfil, acciones).
- Buscador (destino, fechas, huéspedes) con versiones expandida/compacta.
- Pills de categorías/filtros con selección.
- Tarjeta de alojamiento:
  - carrusel de imágenes,
  - botón favorito (corazón),
  - badge opcional,
  - ubicación,
  - título,
  - rating,
  - precio por noche o total.
- Mapa con pines de precio.
- Galería principal de detalle.
- Bloques de contenido (descripción, amenities, reglas).
- Card de anfitrión.
- Widget/tarjeta de reserva con CTA primario.
- Botones primarios de acción (buscar, reservar).

## 4) Componentes reutilizables

- **Header adaptable**: misma base en Home, Catálogo y Detalle con variaciones de densidad.
- **Buscador**: mismo modelo de campos en modos expandido y compacto.
- **Pills de filtros/categorías**: patrón reutilizable para navegación temática y refinamiento.
- **Tarjeta de alojamiento**: componente núcleo con variaciones de tamaño/contexto.
- **Elemento de rating + reseñas**: bloque de confianza transversal.
- **Botón primario de marca**: acción principal consistente.
- **Sistema de badges**: etiquetas de destaque aplicables en diferentes listados.

## 5) Componentes interactivos

- Buscador con cambio de estado (expandido a compacto según vista).
- Pills de filtros con estados activo/inactivo.
- Tarjetas con hover/focus y navegación a detalle.
- Carrusel en tarjetas/galería con indicadores de posición.
- Botón favorito (toggle guardado/no guardado).
- Mapa con pines clicables vinculados a resultados.
- Widget de reserva con CTA principal.

Interacciones relevantes de feedback:

- Elevación o transición suave en hover de card/botón.
- Indicadores visuales de selección en filtros.
- Refuerzo de foco en elementos accionables para accesibilidad y claridad.

## 6) Relaciones entre componentes

- **Buscador ↔ Catálogo**: el contexto de búsqueda se mantiene entre vistas y se comprime visualmente en catálogo.
- **Lista ↔ Mapa**: relación directa entre tarjetas y pines de precio para exploración espacial.
- **Card ↔ Detalle**: la card actúa como puerta de entrada al embudo de conversión del detalle.
- **Detalle ↔ Reserva**: la tarjeta de reserva depende del contexto visible (precio, fechas, huéspedes, reglas).
- **Rating/Reseñas ↔ Decisión**: bloque de prueba social conectado con título y precio para acelerar confianza.

## 7) Comportamiento responsive/mobile-first

La estructura responde a enfoque mobile-first con progresión hacia layouts de mayor densidad en escritorio.

- **Móvil**:
  - flujo en una sola columna,
  - galería en carrusel horizontal,
  - prioridad de acciones al alcance del pulgar,
  - barra/bloque de reserva sticky inferior en detalle.
- **Escritorio**:
  - layouts en columnas (lista + mapa en catálogo, contenido + reserva en detalle),
  - mayor simultaneidad de información,
  - más espacio para filtros persistentes y previsualización.

Resultado esperado: mantener continuidad de tareas entre tamaños sin romper jerarquía ni CTA principal.

## 8) Estados visuales posibles

Estados globales por componente:

- **Default**: visual base sin interacción.
- **Hover**: refuerzo visual en elementos clicables.
- **Focus**: realce de accesibilidad en navegación por teclado.
- **Active/Selected**: filtros, favoritos y elementos elegidos.
- **Disabled**: acciones no disponibles por falta de datos o reglas.
- **Loading/Skeleton**: carga de resultados y multimedia.
- **Empty**: catálogo sin resultados para criterios aplicados.
- **Error**: fallos de carga en mapa, imágenes o datos de reserva.

Estados específicos recomendados:

- Favorito activado/desactivado en tarjetas.
- Pin de mapa normal/activo al sincronizar con card.
- CTA de reserva habilitado/bloqueado según selección de fechas y huéspedes.

## 9) Notas UX importantes

- **Prueba social visible temprano**: rating y número de reseñas cerca del título para reducir fricción cognitiva.
- **Transparencia de precio**: destacar precio principal y desgloses para evitar sorpresas.
- **Consistencia de acción principal**: mantener semántica visual del CTA (buscar/reservar) en todas las vistas.
- **Continuidad contextual**: preservar criterios de búsqueda al navegar Home → Catálogo → Detalle.
- **Equilibrio escaneo/profundidad**: cards optimizadas para escaneo rápido, detalle optimizado para validación.
- **Prioridad móvil real**: CTA y controles críticos siempre accesibles sin desplazamientos largos.
- **Relación espacial clara**: en catálogo, reforzar conexión visual entre resultado listado y ubicación en mapa.
- **Microinteracciones con propósito**: usar animaciones breves para confirmar estado, no para distraer.
