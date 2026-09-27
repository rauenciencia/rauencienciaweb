# Brief para Claude Code · Nueva web rauenciencia.com

> **Para Claude Code:** este documento es la fuente de verdad del proyecto. Léelo completo antes de tocar código. Trabaja por fases (sección 15), confirma con Raúl al final de cada fase y no inventes datos: todo lo marcado con `⚠️ CONFIRMAR` o `[PLACEHOLDER]` se deja como placeholder visible en el contenido, no en el código.
>
> **Regla de escritura:** todo el copy va en español con tildes y ñ perfectas, sin guiones largos (—) y con la voz descrita en la sección 13. Si existe la skill `voz-rauenciencia`, úsala para cualquier texto nuevo.

---

## 0. Resumen en 30 segundos

Raúl Jáuregui Penny (@rauenciencia) es un peruano de 22 años, estudiante de Ingeniería Ambiental en la UPCH con Beca 18, que ganó más de 15 becas e intercambios y creó el **"Tinder de Becas"** (Becas para Migajear), una plataforma gratuita de matching con +500 oportunidades que salió en Telemundo, El Comercio, La República, Infobae y Andina. Es 2x TEDx speaker, fundador de **Migajeando Oportunidades** y tiene una mascota: **MIGO**, un osito crema con lentes verdes.

La nueva web convierte rauenciencia.com en su **casa digital**: quién es, el Tinder de Becas, sus charlas TEDx, dónde va a hablar próximamente, asesorías 1:1, talleres, recursos gratis, causas que promueve y contacto para organizadores, marcas y prensa.

**Tono visual:** la calidez ilustrada y juguetona de wendyramos.com + la estructura comercial clara y el motion de missyera.com, todo en la paleta verde bosque, crema y amarillo del universo migajero.

---

## 1. Decisiones ya tomadas

| Tema | Decisión |
|---|---|
| Dominio | `rauenciencia.com` = web personal. El Tinder de Becas se mueve a `rauenciencia.com/becas`. |
| Links viejos | Redirects 301 desde las URLs actuales del Tinder hacia `/becas/...` para no perder el tráfico de prensa. |
| Base de código | **Reusar el repo `github.com/rauenciencia/rauencienciaweb`** (Next.js 16 App Router, Tailwind CSS 4, TypeScript, contenido en `/content`). Se rediseña, no se tira. |
| Hosting | Vercel (Raúl decidió quedarse en Vercel). |
| Asesorías 1:1 | **Formulario corto + WhatsApp.** No hay pasarela de pago. El formulario arma un mensaje y abre WhatsApp con el texto prellenado. Pago y fecha se coordinan por WhatsApp (Yape, Plin o transferencia). |
| Protagonista visual | **Raúl (fotos reales) + MIGO como guía.** Fotos mandan en hero, TEDx y charlas; MIGO acompaña en cada sección, estados vacíos, CTAs y microinteracciones. |
| Idioma | Español principal. Una página `/en` resumen para organizadores internacionales (idea de Miss Yera). |

### Sobre el Tinder de Becas (tarea técnica a investigar primero)
Hoy el Tinder vive en `rauenciencia.com` (Vercel, 506 oportunidades en `base-becas-506.json`, theme color `#0F3D2E`). **Antes de empezar, averigua:**
1. ¿El Tinder está en este mismo repo o en otro proyecto de Vercel?
2. Si es otro proyecto: usar **Vercel multi-zones** (rewrites de `/becas/:path*` al proyecto del Tinder, con `basePath: '/becas'` en ese proyecto) para no reescribirlo.
3. Si está en este repo: moverlo a `app/becas/` sin cambiar su lógica.
4. Mapear todas sus rutas actuales y crear los 301 en `next.config`.
No rediseñes la app del Tinder en esta primera versión; solo alinea header/footer y colores si es trivial.

---

## 2. Objetivos y audiencias

### Objetivos (en orden de prioridad)
1. **Que la gente use el Tinder de Becas** (el producto estrella, gratis).
2. **Captar contactos**: comunidad de WhatsApp + Roadmap Migajero gratis (lead magnet).
3. **Vender asesorías 1:1 y talleres** (Escuelita Migajera).
4. **Conseguir charlas y conferencias** (organizadores de colegios, universidades, empresas, eventos).
5. **Autoridad**: TEDx, prensa, historia, causas.
6. **Colaboraciones con marcas** (ya recibe propuestas pagadas).

### Audiencias
| Audiencia | Qué busca | A dónde la mandamos |
|---|---|---|
| Estudiantes y jóvenes latinos (17 a 30+, mayoría mujeres, Perú, México, Colombia, Chile, Argentina) | Becas, cómo postular, sentirse capaces | `/becas`, `/recursos`, `/asesorias`, `/escuelita` |
| Adultos 30+ que creen que ya "se les pasó" | Oportunidades sin límite de edad | `/becas` con filtro "sin límite de edad" destacado |
| Organizadores (colegios, unis, ONG, empresas, eventos) | Un speaker joven, inspirador y con datos | `/charlas`, `/contacto` |
| Marcas | Alcance y comunidad | `/contacto` (asunto: colaboración) |
| Prensa | Historia, datos, fotos | `/prensa` (con kit de prensa) |

---

## 3. Qué tomamos de las referencias (y qué no)

### De wendyramos.com
| Elemento | Cómo lo adaptamos |
|---|---|
| **Nav tipo píldora flotante** centrada, blanca, con sombra suave, que se queda fija al hacer scroll | Igual, con el isotipo de MIGO/rauenciencia a la izquierda dentro de la píldora. |
| **Intro "HOLA" gigante** con el personaje a ambos lados y carrusel de slides | Hero con "¡Hola, migajer@!" gigante y MIGO saludando (ver 6.1). |
| **Titulares con palabra resaltada en píldora inclinada** ("Descubre lo que tengo para ti / ¡empieza aquí!") | Nuestra firma tipográfica: segunda línea del titular dentro de una píldora amarilla o lima, rotada -2°. |
| **Fondo oscuro con trama repetida del logo** (patrón sutil) | Fondo verde bosque con trama de "migas" (los puntitos del logo de Migajeando) + MIGO en línea, al 6% de opacidad. |
| **Tarjetas inclinadas** tipo polaroid/cartel en "Descubre lo que tengo para ti" (4 tarjetas: Conferencias, Tienda, Cursos, Para ti) | Grid "Empieza aquí" con 4 tarjetas rotadas que se enderezan en hover. |
| **Testimonios en masonry con tarjetas de colores** y el nombre del producto al pie | Igual, con colores de nuestra paleta y etiqueta del servicio (Taller, Asesoría, Charla, Tinder). |
| Contador de slider "01 / 04" | En carruseles de charlas y testimonios. |
| Newsletter con copy cálido ("¿Quieres que te cuente más cositas?" / "¡Claro que sí!") | Bloque de comunidad WhatsApp con el mismo tono. |
| Menú corto y humano (Wendy, Conferencias, Cursos, Cositas, Shop) | Menú corto con nombres humanos (ver sección 5). |

### De missyera.com (home y /ia-retail/)
| Elemento | Cómo lo adaptamos |
|---|---|
| **Barra de anuncio** arriba ("COHORTE 1 … 20 cupos. Ver el programa ›") | Barra con el próximo evento/taller, editable desde `/content/anuncio.json`. |
| **Hero con degradado sobre foto** (rosa → cian, 135°) | Degradado verde bosque → verde hoja sobre foto de Raúl, con grano sutil. |
| **Fila de stats con contadores** (13+ años, 208K comunidad, 100+ conferencias) | Stats con count-up: +15 becas, 2x TEDx, +500 oportunidades, +1,000 jóvenes en talleres. |
| **Marquee de logos** ("Mi trayectoria incluye") con animación `scroll-left 25s` | Marquee de prensa ("Salí en") y otro de aliados/instituciones. |
| **Tarjetas de servicio con tiers** (Entrada / Core "MÁS POPULAR" / Premium) | Tiers de asesorías 1:1 y de charlas para organizadores. |
| **Tres caminos de contacto** (Agenda / Déjame un mensaje / WhatsApp) con etiqueta "Recomendado", "Por escrito", "Respuesta rápida" | Igual en `/contacto`. |
| **Formulario con "Asunto" en dropdown agrupado** + "¿Para cuántas personas?" + "¿Para cuándo?" | Igual, adaptado (ver sección 11). |
| **Widget "4 preguntas y te digo qué te conviene"** | Quiz "¿Por dónde empiezo?" que recomienda Tinder, Roadmap, taller o asesoría. |
| **Landing larga por "actos" con índice de anclas** (/ia-retail) | Páginas `/charlas` y `/asesorias` estructuradas por actos con índice lateral pegajoso. |
| **FAQ** con acordeón + schema | FAQ en home, asesorías y charlas. |
| **Botón flotante de WhatsApp** con `pulse-soft 2s` | Igual, pero con MIGO asomándose al hacer hover. |
| **Bloque "En inglés" al final** para no cortar la lectura | Página `/en` + bloque corto al final de `/charlas`. |
| Footer de 4 columnas con toda la arquitectura | Igual. |

### Lo que NO copiamos
- Nada de sus textos, logos, fotos ni ilustraciones. Solo patrones de arquitectura y motion.
- Nada de precios tipo consultora corporativa ni tono de "ROI 200%".
- Nada del look rosa/cian de Miss Yera: nuestra paleta es propia (sección 9).

---

## 4. Sitemap

```
/                      Home
/sobre-mi              Mi historia (Ñaña → COAR → UPCH → +15 becas)
/becas                 Tinder de Becas (app existente, se monta aquí)
/charlas               TEDx + conferencias + "Llévame a tu evento"
/agenda                Próximos eventos donde estaré (y pasados)
/asesorias             Asesorías 1:1 (formulario + WhatsApp)
/escuelita             Escuelita Migajera: talleres y Encuentro de Líderes Migajeros
/recursos              Recursos gratis (Roadmap, guías, plantillas) + tienda de productos
/causas                Lo que promuevo: educación, sostenibilidad, IA, inclusión digital, podcast
/prensa                Salí en + kit de prensa descargable
/contacto              3 caminos + formulario
/en                    English summary for international organizers
/legal/privacidad      Política de privacidad
/legal/terminos        Términos
```
Rutas existentes del repo (`/proyectos`, `/proyectos/[slug]`) se conservan dentro de `/causas` o se redirigen (301) si ya no aplican. Revisa qué existe antes de borrar.

---

## 5. Navegación

### Header (píldora flotante)
`[isotipo]  Becas · Charlas · Agenda · Asesorías · Aprende ▾ · Sobre mí   [Hablemos]`

- **Aprende ▾** abre un mega-menú pequeño con: Escuelita Migajera, Recursos gratis, Tienda, Causas que promuevo.
- **Hablemos** = botón sólido amarillo que va a `/contacto`.
- En `/becas` el nav muestra un botón "Volver a la web" discreto.
- Mobile: botón hamburguesa dentro de la píldora; menú a pantalla completa verde bosque, con MIGO saludando abajo y links grandes en Bricolage Grotesque.

### Barra de anuncio (arriba del header)
Texto corto + link. Se cierra con una X y recuerda el cierre en `localStorage` (con try/catch). Contenido en `/content/anuncio.json`.
Ejemplo: `ESCUELITA MIGAJERA · 12 talleres del 26 de septiembre al 13 de diciembre. Inscríbete ›`

### Footer (fondo verde bosque, trama de migas)
- Columna 1: logo + "Oportunidades para quienes no tienen contactos (todavía)." + redes (Instagram @rauenciencia, TikTok @rauencienciaa, LinkedIn rauljpenny, Instagram @migajeando.oportunidades, podcast).
- Columna **Explora**: Tinder de Becas, Charlas, Agenda, Asesorías.
- Columna **Aprende**: Escuelita Migajera, Recursos gratis, Tienda, Causas.
- Columna **Contacto**: email `[PLACEHOLDER]`, WhatsApp `[PLACEHOLDER]`, Lima, Perú. Link a Prensa y a /en.
- MIGO asomado por el borde superior del footer (se asoma al llegar al final del scroll).
- Línea final: "Hecho con 💚 en Lima, una migaja a la vez · © 2026 Raúl Jáuregui Penny" + legales.

---

## 6. Home, sección por sección

> Copy de referencia en la voz de Raúl. Claude Code debe usarlo tal cual salvo que Raúl lo cambie. Las opciones A/B se dejan como comentario en el archivo de contenido.

### 6.1 Hero "¡Hola, migajer@!"
**Layout:** pantalla completa en desktop. Fondo crema con trama de migas. Titular enorme centrado; foto recortada de Raúl a la derecha y MIGO saludando (`migo-saludando`) a la izquierda, ambos con entrada animada. En mobile: titular arriba, foto + MIGO abajo superpuestos.

- **Eyebrow** (versalitas espaciadas): `BECAS · CHARLAS · ASESORÍAS · COMUNIDAD`
- **Titular (A):** Ya no migajeamos amor.
  **Segunda línea en píldora amarilla:** Migajeamos becas.
- **Titular (B):** Oportunidades para quienes no tienen contactos (todavía).
- **Sub:** Soy Raúl: crecí en Ñaña vendiendo mazamorras y hoy llevo más de 15 becas e intercambios en 4 países. Ahora te ayudo a encontrar la tuya, una migaja a la vez.
- **CTA primario:** `Hacer match con mi beca →` (a `/becas`)
- **CTA secundario:** `Conóceme` (a `/sobre-mi`)
- **Rotador de palabras** bajo el sub: "Encuentra **becas / intercambios / pasantías / voluntariados / concursos** sin pagar nada." (la palabra cambia cada 2,2 s con efecto de deslizamiento vertical).
- **Firma de motion:** a la derecha, una **mini pila de 3 tarjetas de becas** (tipo Tinder) que se desliza sola: una tarjeta sale a la derecha con un corazón, otra a la izquierda con una X. Es la demo viva del producto. Datos de ejemplo reales tomados de la base del Tinder.

### 6.2 Stats (fila con count-up)
| Número | Etiqueta |
|---|---|
| +15 | becas e intercambios ganados ⚠️ CONFIRMAR (en Beacons dice +25) |
| 2x | speaker TEDx |
| +500 | oportunidades verificadas en el Tinder |
| +1,000 | jóvenes en mis talleres ⚠️ CONFIRMAR |
Los números cuentan de 0 al valor cuando entran en viewport (1,2 s, ease-out). Separadores con migas.

### 6.3 Marquee "Salí en"
Logos o nombres en tipografía: Telemundo · El Comercio · La República · Infobae · Andina · El Peruano · The Rio Times · Yahoo Noticias. Loop infinito 30 s, pausa en hover, cada logo enlaza a la nota (lista en sección 8). Si no hay logos en SVG, usar el nombre del medio en Big Shoulders para evitar problemas de marca.

### 6.4 "Descubre lo que tengo para ti / ¡empieza aquí!" (grid de 4 tarjetas inclinadas)
Fondo verde bosque con trama. Titular en crema, "¡empieza aquí!" en píldora lima.

| Tarjeta | Microcopy | MIGO | Link |
|---|---|---|---|
| Tinder de Becas | Desliza, guarda y postula. +500 oportunidades, gratis. | `migo-code-celular` | /becas |
| Charlas y conferencias | Llévame a tu cole, uni, empresa o evento. | `migo-megafono` | /charlas |
| Asesorías 1:1 | Tu postulación, revisada conmigo. | `migo-pensativo` | /asesorias |
| Recursos gratis | Roadmap, guías y plantillas para empezar hoy. | `migo-idea-foco` | /recursos |

Tarjetas rotadas (-4°, 3°, -2°, 4°), fondo crema/durazno/lima/amarillo alternados, borde tinta 2px, sombra "offset" sólida (4px 4px 0 tinta). En hover: rotación a 0°, se eleva 6px y MIGO da un saltito.

### 6.5 El Tinder de Becas (sección producto)
Dos columnas. Izquierda: mockup de celular con la app (screenshot real o video corto en loop, `[PLACEHOLDER]`). Derecha:
- **Titular:** El Tinder que sí te conviene.
- **Sub:** Becas reales, verificadas y con el link oficial listo para postular. Deslizas, armas tu lista, copias… y tienes todas tus becas en un solo lugar.
- **3 bullets con ícono:** +500 oportunidades de gobiernos, universidades y organismos internacionales · +350 sin límite de edad ("somos adultos que también tenemos sueños") · 100% gratis.
- **CTA:** `Quiero mi match →`
- Frase en píldora: "La nueva generación ya no migajea amor, migajea becas."

### 6.6 Mi historia (teaser)
Foto de Raúl + línea de tiempo horizontal en 5 hitos, con MIGO caminando sobre la línea a medida que haces scroll (ver motion M7):
Ñaña, vendiendo mazamorras y chocotejas → COAR Lima → Beca 18 en la UPCH → +15 becas e intercambios (España, Brasil, EE. UU., Francia, Canadá) → Tinder de Becas y 2x TEDx.
- **Titular:** No es una brecha de talento.
- **Píldora:** Es una brecha de información.
- CTA: `Lee mi historia completa`

### 6.7 Charlas TEDx
Dos tarjetas grandes de video (thumbnail + botón play que abre modal con YouTube embebido, `lite-youtube` para no cargar el iframe hasta el clic):
- TEDxCamacho Youth · 2 de agosto de 2025 · Lima · `[PLACEHOLDER título y link YouTube]`
- TEDxUNALM · `[PLACEHOLDER fecha, título y link]`
- CTA: `¿Quieres esta energía en tu evento? →` (a /charlas)

### 6.8 Próximos eventos ("Dónde me vas a encontrar")
Lista de 3 próximos eventos desde `/content/eventos.json`, ordenados por fecha, estilo "entrada de concierto" (fecha grande a la izquierda en Big Shoulders, nombre, lugar, rol: Ponente / Organizador / Taller, botón "Quiero ir"). Si no hay eventos futuros: estado vacío con `migo-pensativo` y texto "Uy, todavía no hay fechas nuevas. Raúl anda armando cositas 👀 Únete a la comunidad y te aviso primero."
Link: `Ver toda la agenda →`

### 6.9 Escuelita Migajera + Asesorías (bloque dividido)
Dos tarjetas lado a lado:
- **Escuelita Migajera:** "Talleres para ganar becas desde cero. Y tu inscripción ayuda a llevarlos a más regiones del Perú 🇵🇪" → `/escuelita`
- **Asesoría 1:1:** "¿Tienes una convocatoria en la mira y no sabes por dónde empezar? Lo vemos juntos." → `/asesorias`

### 6.10 Testimonios (masonry de colores)
Titular: "Lo que dicen los migajeros" / píldora: "(sin pagarles, lo juro)". Tarjetas de colores de la paleta con cita, nombre, país y etiqueta del servicio. Botón `Ver más` que carga más. Contenido en `/content/testimonios.json`. `⚠️ CONFIRMAR`: Raúl debe aportar testimonios reales con permiso; no inventar ninguno. Mientras no haya, ocultar la sección.

### 6.11 Lo que promuevo (causas)
4 chips grandes con ícono y MIGO: Educación y acceso a oportunidades · Sostenibilidad y ciencia · IA para el bien · Inclusión digital. + tarjeta del podcast *Ambientalmente Incorrectos*. → `/causas`

### 6.12 Quiz "¿Por dónde empiezo?"
Widget de 4 preguntas (¿Qué buscas? ¿En qué etapa estás? ¿Tienes una convocatoria en mente? ¿Cuánto tiempo tienes?) que devuelve 1 recomendación: Tinder, Roadmap gratis, Escuelita o Asesoría 1:1. MIGO cambia de pose según la respuesta. Lógica 100% cliente, sin backend.

### 6.13 Comunidad (lead capture)
Fondo amarillo beca. `migo-totebag` a un lado.
- **Titular:** ¿Quieres que te mande becas por WhatsApp?
- **Sub:** Únete a la comunidad migajera: convocatorias, recursos gratis y avisos de talleres antes que nadie.
- **CTA principal:** `¡Claro que sí!` (link a la comunidad de WhatsApp `[PLACEHOLDER]`)
- **CTA secundario:** `Descargar el Roadmap Migajero gratis` (link actual en Beacons)

### 6.14 FAQ
Acordeón con 6 preguntas (¿El Tinder es gratis? ¿Sirve si tengo más de 30? ¿Cómo agendo una asesoría? ¿Das charlas fuera de Lima o virtuales? ¿Cómo llevo la Escuelita a mi región? ¿Colaboras con marcas?). Respuestas cortas en voz de Raúl. Schema `FAQPage`.

### 6.15 CTA final
"¿Hablamos?" + 3 botones: `Llévame a tu evento` · `Agendar mi asesoría` · `Escríbeme por WhatsApp`.

---

## 7. Páginas internas

### 7.1 `/sobre-mi`
- Hero con foto grande y titular: "De Ñaña al mundo, una migaja a la vez."
- Historia en actos (índice lateral pegajoso como /ia-retail de Miss Yera): 1) Ñaña y el puesto de periódicos, 2) Fe y Alegría y el COAR, 3) Beca 18 y la UPCH, 4) Las becas: Granada, Calgary, Brasil, EE. UU., Francia, 5) El Tinder de Becas, 6) Lo que viene (finanzas sostenibles, talleres regionales).
- Galería de fotos por país (scroll horizontal con arrastre).
- Bloque "Hoy": Ingeniería Ambiental en la UPCH, Sostenibilidad en Prima AFP (Credicorp), Migajeando Oportunidades, GIIA, Soildier, podcast.
- Timeline de logros desde `/content/logros.json` (becas y programas: COAR Lima, Beca 18, PIMA Granada, ELAP Calgary, etc. `⚠️ CONFIRMAR lista completa y años`).
- Bio descargable para organizadores (corta, media, larga, inglés) con botón "Copiar".

### 7.2 `/becas`
App existente del Tinder montada aquí (ver sección 1). Solo alinear header y footer.

### 7.3 `/charlas` (landing por actos, estilo /ia-retail)
Índice pegajoso: Mis TEDx · Temas · Formatos · Dónde he hablado · Qué dicen · Preguntas · Llévame a tu evento.
- **Hero:** "Charlas que dan ganas de postular." + CTA `Cotizar una charla`.
- **TEDx:** videos grandes.
- **Temas** (tarjetas): Cómo ganar becas sin contactos · Migajear oportunidades: el proceso no es lineal · IA para encontrar oportunidades · Sostenibilidad y jóvenes · Inclusión digital. `⚠️ CONFIRMAR temas`.
- **Formatos (tiers estilo Miss Yera):** Charla inspiracional (45 a 60 min) · Taller práctico (2 a 4 h, marcado "MÁS PEDIDO") · Programa para instituciones (Escuelita Migajera en tu región). Sin precios públicos; botón "Cotizar".
- **Dónde he hablado:** marquee de instituciones y eventos (TEDxCamacho Youth, TEDxUNALM, UNESCO Perú, UTEC, UPCH, etc. `⚠️ CONFIRMAR`).
- **Galería** de fotos en escenario.
- **FAQ para organizadores** (virtual/presencial, viajes, idiomas, qué necesito técnico).
- **Bloque en inglés** al final ("Book Raúl for your event").
- **Formulario** con asunto preseleccionado "Charla / conferencia".

### 7.4 `/agenda`
- Tabs: **Próximos** / **Pasados**. Automático por fecha desde `/content/eventos.json` (sin editar código).
- Cada evento: fecha, nombre, lugar (o "Virtual"), ciudad, rol, descripción corta, link de inscripción, badge de estado (Inscripciones abiertas / Últimos cupos / Agotado / Pasado).
- Botón "Agregar a mi calendario" (genera `.ics` en cliente).
- Filtro por tipo: Ponencia, Taller, Organizo, Entrevista.
- Datos iniciales (`⚠️ CONFIRMAR todos`):
  - Escuelita Migajera · ciclo de 12 talleres · 26/09/2026 al 13/12/2026 · virtual y presencial · Organizo.
  - Ideathon "Sueñ-IA en Grande" (Miss Yera × Rauenciencia) · 17/10/2026 · Aula Magna UTEC, Lima · Organizo.
  - Taller Migajeando Oportunidades en Arequipa · 24/10/2026 · día completo · Taller.
  - Encuentro de Líderes Migajeros, 3.ª edición · `[PLACEHOLDER fecha]`.

### 7.5 `/asesorias`
- **Hero:** "Tu postulación, revisada conmigo." Sub: "¿Tienes una convocatoria en la mira y no sabes por dónde empezar? Lo vemos juntos, 1 a 1, por videollamada."
- **Para quién es / para quién no es** (dos columnas honestas).
- **Tipos de asesoría** (tarjetas estilo tiers): `⚠️ CONFIRMAR nombres, duración y precio`
  - Diagnóstico migajero (30 min): revisamos tu perfil y te armo tu ruta.
  - Revisión de CV y Carta (60 min): siguiendo la secuencia Inventario de Experiencias → CV Migajero → Carta Migajera.
  - Acompañamiento de postulación (paquete de sesiones).
- **Cómo funciona** en 4 pasos con MIGO: 1) Llenas el formulario, 2) Te escribo por WhatsApp para coordinar fecha y pago, 3) Nos vemos por videollamada, 4) Te llevas tu plan por escrito.
- **Formulario de asesoría** (ver 11.2).
- FAQ (¿garantizas que gane? No, y desconfía de quien lo haga. ¿Reembolsos? `[PLACEHOLDER]`).

### 7.6 `/escuelita`
- Hero con `migo-mochila-yo-migajeo`: "Escuelita Migajera: talleres para ganar becas desde cero."
- Propósito: "Tengo un sueño: que aprender sobre becas y oportunidades no sea un privilegio de quienes viven en las grandes ciudades."
- Próximos talleres (filtrados de eventos.json con tipo Taller).
- Talleres regionales: mapa del Perú ilustrado con regiones activas y planificadas (Arequipa, Ucayali, Piura, Cusco) y botón "Llévala a mi región".
- Encuentro de Líderes Migajeros (1.ª y 2.ª edición con fotos, 3.ª próxima).
- "Tú aprendes. Tú creces. Y juntos llevamos oportunidades a quienes más las necesitan."

### 7.7 `/recursos`
- **Gratis primero** (grid): Roadmap Migajero (las etapas que Raúl siguió), guías, plantillas, videos, playlist. Cada recurso con tipo, tiempo de lectura y botón. Contenido en `/content/recursos.json`.
- Filtro por etapa: Empiezo de cero · Busco convocatoria · Armo mi CV · Escribo mi carta · Entrevista.
- **Tienda** (sección aparte, abajo, colapsada visualmente): productos actuales de Beacons, en el orden Inventario de Experiencias → CV Migajero → Carta Migajera. Hoy existen: Sistema Migajero para Becas, Carta Migajera Pro (STEM), Carta Migajera Pro (Humanidades), CV Migajero Corporativo Pro, CV Migajero Académico Pro, Plantilla Migajera de CV. Los botones van a los links de compra actuales (Beacons/Hotmart). No mostrar precios hardcodeados: leerlos de `/content/productos.json`.

### 7.8 `/causas`
Lo que promuevo, con una sección por causa: Educación y acceso a oportunidades · Sostenibilidad (Ingeniería Ambiental, Soildier, GIIA) · IA para el bien (el Tinder, la ideathon) · Inclusión digital (postulación al Premio Nacional Democracia Digital 2026) · Podcast *Ambientalmente Incorrectos* (embed de YouTube o Spotify). Aquí viven los proyectos del repo actual (`/proyectos/[slug]` → `/causas/[slug]` con 301).

### 7.9 `/prensa`
- Grid de notas con logo/nombre del medio, titular, fecha y link (sección 8).
- **Kit de prensa** descargable (ZIP): bios, fotos en alta, logo de Migajeando, MIGO, datos clave. `[PLACEHOLDER archivo]`.
- Contacto de prensa directo.

### 7.10 `/contacto`
Tres caminos (tarjetas estilo Miss Yera):
1. **Recomendado · Escríbeme por el formulario**: "Para charlas, talleres en tu institución, marcas o prensa. Te respondo en 48 horas hábiles."
2. **Respuesta rápida · WhatsApp**: "Para dudas puntuales: fechas, talleres, asesorías."
3. **Comunidad · Únete**: "Si solo quieres recibir becas, entra a la comunidad."
Debajo, el formulario general (11.1).

### 7.11 `/en`
Una página en inglés: quién es, Tinder for Scholarships, TEDx, speaking topics, press, contact. Para organizadores internacionales y postulaciones (ej. Tomilli Summit).

---

## 8. Datos confiables y fuentes

Usa solo estos datos. Si algo no está aquí, déjalo como `[PLACEHOLDER]`.

- Nombre: Raúl Jáuregui Penny · @rauenciencia ("Raw en Ciencia") · 22 años · peruano.
- Origen: Ñaña, Chaclacayo (Lima Este). Cuarto de cinco hermanos. Desde los 11 años vendía mazamorras, chupetes, panchos y chocotejas; ayudaba a su mamá en un puesto de periódicos. Primera generación universitaria.
- Educación: Fe y Alegría → COAR Lima → Ingeniería Ambiental, UPCH, con Beca 18 (PRONABEC).
- Becas: +15 becas e intercambios (PIMA Granada, ELAP Calgary, entre otros); experiencia en España, Brasil, EE. UU., Francia, Canadá y Perú. ⚠️ Beacons dice "+25": unificar.
- TEDx: TEDxCamacho Youth (2 de agosto de 2025, Lima) y TEDxUNALM.
- Tinder de Becas: +500 oportunidades (506 en la base), +350 sin límite de edad, gratis, filtros por área, edad y tipo de convocatoria; fuentes públicas oficiales.
- Alcance del Tinder (según prensa, cifras de distintas fechas, `⚠️ CONFIRMAR la actual`): 400,000 personas alcanzadas en 3 meses; +15,000 usuarios (agosto 2026); +60,000 usuarios activos y +350,000 interacciones (El Comercio).
- Comunidad: +60,000 seguidores sumando redes; +2 millones de impresiones mensuales; Instagram @rauenciencia (~24K) y @migajeando.oportunidades (~15K).
- Otros: fundador de Migajeando Oportunidades y GIIA; co-fundador de Soildier; co-host de *Ambientalmente Incorrectos*; practicante de Sostenibilidad en Prima AFP (Credicorp).

**Prensa (links para `/prensa` y el marquee):**
- Telemundo: https://www.telemundo.com/noticias/noticias-telemundo/internacional/video/un-joven-peruano-crea-un-tinder-de-becas-para-conectar-a-jovenes-con-oportunidades-educativas-tmvo13209100
- El Comercio: https://elcomercio.pe/somos/tendencias/buscas-becas-peruano-creo-plataforma-gratuita-para-que-hagas-match-con-la-mejor-oportunidad-educativa-tinder-de-becas-migajeando-oportunidades-noticia/
- La República: https://larepublica.pe/mundo/2026/08/20/el-peruano-de-22-anos-que-asombra-al-crear-un-tinder-de-becas-para-conectar-a-jovenes-con-oportunidades-de-estudio-en-el-extranjero-1997260
- Infobae: https://www.infobae.com/peru/2026/08/31/estudiante-peruano-crea-tinder-de-becas-con-inteligencia-artificial-y-reune-cerca-de-200-oportunidades-para-jovenes-de-latinoamerica/
- Andina: https://andina.pe/agencia/noticia-peruano-crea-un-tinder-becas-para-hacer-match-oportunidades-estudio-1087588.aspx
- El Peruano: https://elperuano.pe/noticia/302765-estudiante-peruano-crea-un-tinder-de-becas-para-hacer-match-con-oportunidades-academicas
- The Rio Times: https://www.riotimesonline.com/peru-tinder-for-scholarships-raul-jauregui/
- Yahoo Noticias: https://es-us.noticias.yahoo.com/joven-peruano-crea-tinder-becas-040803861.html
- Stakeholders: https://stakeholders.com.pe/noticias-sh/becas-para-migajear-la-plataforma-peruana-que-conecta-a-estudiantes-con-becas-en-europa-y-ee-uu/

---

## 9. Sistema de diseño

### 9.1 Concepto: "Cuaderno migajero"
Un cuaderno de aventuras de un estudiante que va juntando migas hasta llegar lejos: papel crema, stickers, garabatos a mano (estrellitas, flechas, destellos, subrayados), fotos tipo polaroid y MIGO como compañero. Todo sobre la base verde bosque y amarillo que ya usa Migajeando en Instagram. Cálido como Wendy, ordenado como Miss Yera.

### 9.2 Paleta (derivada de MIGO, del logo de Migajeando, del theme actual del Tinder y de sus posts)

| Token | Hex | Rol | Origen |
|---|---|---|---|
| `--bosque` | `#0F3D2E` | Fondos oscuros, texto sobre claro, footer | Theme color actual del Tinder y fondos de posts de Migajeando |
| `--bosque-900` | `#0A2A20` | Hover y sombras sobre bosque | |
| `--hoja` | `#2F7A4B` | Links, íconos, bordes activos | Verde del logo de Migajeando |
| `--brote` | `#9CCB4F` | Acento lima: píldoras, tags, chips | Tote bag y ojos de MIGO |
| `--beca` | `#F5C443` | Acento principal: CTA primario, píldora de titular, barra de anuncio | Amarillo de "Dummies" y "Escuelita Migajera" |
| `--durazno` | `#FACC9C` | Superficies cálidas, tarjetas | Polo de MIGO |
| `--crema` | `#FCF5E5` | Fondo base de toda la web | Pelaje de MIGO |
| `--papel` | `#FFFDF7` | Tarjetas sobre crema | |
| `--tinta` | `#1F2A10` | Texto principal y contornos (borde de 2px estilo sticker) | Contorno de MIGO |
| `--match` | `#E5484D` | Corazón del match, badges "últimos cupos" (solo decorativo o texto ≥ 24px) | Megáfono de MIGO y rojo Perú |
| `--match-700` | `#C8323A` | Versión accesible de match para texto y botones | |
| `--rau` | `#6E3A6B` | Acento puntual para lo personal (Sobre mí, TEDx) | Chompa morada de Raúl |

**Contraste verificado (WCAG):**
tinta/crema 13.8 · bosque/crema 11.2 · hoja/crema 4.8 (AA) · beca sobre bosque 7.5 · brote sobre bosque 6.4 · bosque sobre beca 7.5 · bosque sobre durazno 8.2 · match-700/crema 4.9 · rau/crema 7.8.
`--match` puro sobre crema da 3.6: solo para decoración o texto grande.

**Reglas de uso:** 60% crema/papel · 25% bosque · 10% beca + brote · 5% resto. Botón primario = beca con texto bosque. Botón secundario = contorno tinta 2px. Nunca amarillo sobre crema para texto.

**Degradado hero (estilo Miss Yera, versión migajera):** `linear-gradient(135deg, rgba(15,61,46,.92), rgba(47,122,75,.75))` sobre foto, con grano SVG al 8%.

### 9.3 Tipografía (Google Fonts, vía `next/font`)
| Uso | Fuente | Notas |
|---|---|---|
| Titulares | **Bricolage Grotesque** 700 a 800 | Cálida, con personalidad, variable. Tracking -2%. |
| Carteles, fechas, stats, stickers | **Big Shoulders Display** 800 a 900 | Ya está en el repo. Condensada tipo "ESCUELITA MIGAJERA". Siempre en mayúsculas. |
| Texto | **DM Sans** 400 a 700 | Ya es parte de su identidad. 17 a 18px base, interlineado 1.6. |
| Notas a mano (opcional, poco) | **Caveat** 600 | Anotaciones tipo garabato junto a fotos ("¡este soy yo en Granada!"). |

Escala fluida con `clamp()`: H1 56 a 120px · H2 36 a 64px · H3 24 a 32px · cuerpo 17 a 18px.

**Firma tipográfica:** titulares en dos líneas donde la segunda va dentro de una píldora (`--beca` o `--brote`, radio completo, rotada -2°, padding 0.1em 0.45em). Ejemplo: "Descubre lo que tengo para ti / ¡empieza aquí!".

### 9.4 Formas, bordes y texturas
- Radio: 20px tarjetas, 999px botones y píldoras.
- **Estilo sticker:** borde `2px solid var(--tinta)` + sombra sólida `4px 4px 0 var(--tinta)`. En hover la sombra pasa a 6px 6px y el elemento sube 2px.
- **Trama de migas:** patrón SVG repetible con los 3 puntitos del logo de Migajeando y siluetas de MIGO en línea fina, 6% de opacidad sobre bosque y 4% sobre crema.
- **Doodles SVG** (dibujar como componentes): estrella de 4 puntas, destellos, flecha curva, subrayado a mano, círculo a mano, corazón. Colores beca, brote o tinta.
- **Separadores ondulados** entre secciones claras y oscuras (SVG, no imagen).
- Grano sutil opcional en fondos grandes.

### 9.5 MIGO: reglas de uso
Assets web listos en `public/migo/` (archivo `migo-web-pack.zip`: fondo transparente, recortados, WebP + PNG).

| Archivo | Dónde usarlo |
|---|---|
| `migo-saludando` | Hero, menú mobile, 404 |
| `migo-code-celular` | Tarjeta Tinder de Becas |
| `migo-code-laptop`, `migo-code-pollito`, `migo-laptop`, `migo-laptop-mac` | IA, recursos digitales, causas "IA para el bien" |
| `migo-megafono` | Charlas, anuncios, barra de evento |
| `migo-pensativo` | Asesorías, FAQ, estados vacíos |
| `migo-idea-foco` | Recursos gratis, quiz |
| `migo-mapa-totebag`, `migo-totebag`, `migo-mochila-yo-migajeo` | Escuelita, comunidad, talleres regionales |
| `migo-viajero`, `migo-viajero-lado`, `migo-aventurero` | Historia, línea de tiempo, becas internacionales |
| `migo-diploma` | Logros, testimonios, "lo lograste" |
| `migo-chompa-rau` | Sobre mí (MIGO vestido como Raúl) |
| `migo-pan` | Microcopy de "migajas" y 404 |
| `migo-peru-camiseta` | Talleres regionales y contenido Perú (lleva escudo de la FPF: úsalo solo en contexto editorial) |

Reglas: máximo 1 MIGO por viewport. Nunca deformar, recolorear ni rotar más de 8°. Siempre con aire alrededor. MIGO nunca reemplaza la foto de Raúl en hero, TEDx ni charlas.

### 9.6 Fotografía
Fotos reales, luminosas, con gente (escenario TEDx, talleres, viajes). Recortes de Raúl con fondo removido para el hero, con borde blanco de 6px estilo sticker. Polaroids ligeramente rotadas en la historia. Tratamiento: calidez leve, sin filtros pesados.

### 9.7 Iconos
Lucide (línea 2px) coloreados con tokens. Íconos de redes en SVG propio.

---

## 10. Motion (la parte que hace que se sienta viva)

**Librería:** `motion` (Motion for React) para entradas y gestos + CSS para loops (marquee, pulse). Sin GSAP salvo que sea imprescindible. Sin scroll-jacking. **Todo respeta `prefers-reduced-motion`**: con reduce, se muestran estados finales sin animación y se pausan loops.

**Easing base:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out suave). Resorte para stickers: `type: spring, stiffness 260, damping 18`.

| # | Animación | Detalle |
|---|---|---|
| M1 | **Entrada del hero** | Titular palabra por palabra (stagger 60ms, sube 24px + fade, 600ms). Píldora amarilla se "dibuja" de izquierda a derecha (scaleX 0→1, 500ms, delay 400ms) y luego rota a -2°. Foto de Raúl y MIGO entran como stickers (escala 0.8→1 con resorte). |
| M2 | **Pila Tinder autodeslizante** | 3 tarjetas apiladas. Cada 2,8 s la de arriba sale a +120% x con rotación 12° y un corazón que late, o a -120% con una X. La de abajo sube. Loop infinito. Pausa en hover. Arrastrable con el dedo/mouse (drag x) como demo real. |
| M3 | **Rotador de palabras** | becas / intercambios / pasantías / voluntariados / concursos. Slide vertical con máscara, 2,2 s por palabra. |
| M4 | **Count-up de stats** | Al entrar en viewport, 0 → valor en 1,2 s. Una sola vez. |
| M5 | **Marquee de prensa y aliados** | Loop CSS 30 s lineal, duplicando el contenido. Pausa en hover. Bordes con fade. |
| M6 | **Tarjetas inclinadas** | Rotación inicial variada; en hover van a 0°, suben 6px, la sombra crece y MIGO da un saltito (y -8px, resorte). |
| M7 | **MIGO caminante en la línea de tiempo** | En "Mi historia", MIGO (`migo-viajero-lado`) avanza sobre una línea punteada según el progreso del scroll de esa sección (`useScroll` + `useTransform`). Cada hito se ilumina al pasarlo. |
| M8 | **Scroll reveal** | Secciones entran con fade + 24px hacia arriba, 500ms, una vez. Stagger 80ms en grids. |
| M9 | **Doodles que se dibujan** | Subrayados y flechas SVG con `pathLength` 0→1 al entrar en viewport (700ms). |
| M10 | **Nav píldora** | Al bajar más de 80px, la píldora se compacta (padding y sombra) y se oculta al bajar rápido y reaparece al subir. |
| M11 | **Botón WhatsApp flotante** | `pulse-soft` 2 s (escala 1→1.06 y halo). En hover, MIGO se asoma por detrás del botón. |
| M12 | **Migas del cursor** (solo desktop, solo en el hero) | Al mover el mouse caen 3 o 4 puntitos (migas) que se desvanecen en 600ms. Muy sutil. Se desactiva con reduced motion y en touch. |
| M13 | **Micro-feedback** | Botones: escala 0.97 al presionar. Formulario enviado: MIGO con diploma aparece con confeti de migas. |
| M14 | **Transición de página** | Fade + leve desplazamiento (200ms) con la View Transitions API si está disponible. |

**Presupuesto:** ninguna animación debe bajar de 60fps en un Android de gama media. Animar solo `transform` y `opacity`.

---

## 11. Formularios

### 11.1 Contacto general (`/contacto` y `/charlas`)
Campos:
- Nombre* · Email* · WhatsApp (selector de país: +51, +52, +57, +56, +54, +593, +1, +34) · Institución u organización
- **Asunto*** (dropdown agrupado):
  - CHARLAS: Charla o conferencia · Taller en mi institución · Escuelita Migajera en mi región · Jurado o mentor
  - COLABORACIONES: Marca o campaña · Alianza institucional
  - OTROS: Prensa o entrevista · Podcast · Otro
- ¿Para cuántas personas? (Menos de 50 · 50 a 200 · 200 a 500 · Más de 500)
- ¿Para cuándo? (Este mes · En 1 a 3 meses · En más de 3 meses · Solo averiguando)
- ¿Presencial o virtual? · Ciudad
- Mensaje
- Botón: `Enviar mensaje →`

Envío: **Server Action + Resend** al correo de Raúl `[PLACEHOLDER email]`. Validación con Zod. Honeypot anti-spam + rate limit simple. Pantalla de éxito con `migo-diploma`: "¡Listo! Te respondo en 48 horas hábiles. Mientras, ¿ya probaste el Tinder de Becas? 👀". Si Resend no está configurado, fallback: abrir WhatsApp con el mensaje armado.

### 11.2 Asesoría 1:1 (`/asesorias`) → WhatsApp
Campos: Nombre* · País* · ¿Qué tipo de asesoría? (según `/content/asesorias.json`)* · ¿A qué beca o programa postulas? · ¿Cuándo cierra la convocatoria? (fecha) · ¿En qué etapa estás? (Empiezo de cero / Tengo CV / Tengo carta / Ya postulé antes) · Cuéntame brevemente.

Al enviar: arma el mensaje y abre `https://wa.me/[NUMERO]?text=...` (encodeURIComponent). Mensaje prellenado:
```
¡Hola Raúl! 💚 Quiero una asesoría 1:1.
Soy {nombre}, de {país}.
Tipo: {tipo}
Postulo a: {programa} (cierra el {fecha})
Etapa: {etapa}
{mensaje}
```
Además (opcional) registrar el lead por Server Action en un email a Raúl para no perderlo. No guardar datos personales en la URL más allá del link de WhatsApp que el usuario abre voluntariamente.

---

## 12. Contenido editable (sin tocar código)

Todo el contenido que cambia vive en `/content` (JSON o MDX tipado con Zod). Raúl debe poder actualizar la web editando estos archivos:

```
content/
  anuncio.json        texto, link, activo (bool), fechaFin
  stats.json          número, etiqueta
  eventos.json        id, titulo, fecha, fechaFin?, lugar, ciudad, modalidad, rol, tipo, descripcion, link, estado
  charlas.json        tedx y temas: titulo, evento, fecha, youtubeId, thumbnail, descripcion
  asesorias.json      nombre, duracion, precioTexto, incluye[], destacado
  recursos.json       titulo, tipo, etapa, gratis, link, tiempo, imagen
  productos.json      nombre, descripcion, precioTexto, link, orden
  testimonios.json    nombre, pais, texto, servicio, foto?, permiso (bool)
  prensa.json         medio, titular, fecha, url, logo?
  logros.json         año, titulo, lugar, tipo
  causas/*.mdx        una por causa o proyecto
  faq.json            pagina, pregunta, respuesta
  site.json           email, whatsapp, redes, comunidadUrl, roadmapUrl
```
Eventos pasados y futuros se calculan por fecha en build (y revalidación diaria con ISR para que un evento "pase" solo).

---

## 13. Voz y microcopy

Resumen (la guía completa está en la skill `voz-rauenciencia`):
- Hermano mayor que ya pasó por ahí. Cálido, juvenil, con humor de internet y una misión seria.
- Tuteo. Frases cortas. Una idea por línea. Preguntas que nombran el dolor.
- Vocabulario propio: migajear, migajero/a, una migaja a la vez, Escuelita Migajera, Roadmap Migajero, Tinder de Becas.
- **Prohibido:** guiones largos (—), "potenciar", "sinergia", "sumérgete", "descubre el poder", tono de consultora.
- Botones en primera persona: "Quiero mi match", "Agendar mi asesoría", "Llévame a tu evento", "¡Claro que sí!".

Microcopy fijo:
- 404: "Esta página se migajeó 🐻 Pero tranqui, aquí tienes el camino de vuelta." + botón `Volver al inicio`.
- Cargando: "MIGO está buscando…"
- Estado vacío de agenda: ver 6.8.
- Error de formulario: "Uy, algo falló. Inténtalo otra vez o escríbeme por WhatsApp 💚".

---

## 14. SEO, rendimiento y accesibilidad

**SEO**
- Metadata por página con la API de Next. Títulos con keyword primero: "Becas para latinos: Tinder de Becas gratis | Raúl Jáuregui".
- Keywords objetivo: becas, becas para latinos, becas internacionales, becas sin límite de edad, cómo ganar una beca, carta de motivación, CV formato Harvard, speaker TEDx Perú, charlas para jóvenes.
- Schema.org: `Person` (Raúl, con sameAs a redes y prensa), `Organization` (Migajeando Oportunidades), `Event` (cada evento de agenda), `FAQPage`, `VideoObject` (TEDx), `BreadcrumbList`.
- `sitemap.xml`, `robots.txt`, OG images dinámicas con `next/og` usando la paleta y MIGO.
- Mantener y reforzar el SEO del Tinder en `/becas`.

**Rendimiento** (objetivo Lighthouse ≥ 90 en mobile)
- `next/image` para todo, WebP/AVIF, `priority` solo en el hero.
- Videos de YouTube con carga diferida (facade).
- Fuentes con `next/font`, `display: swap`, subsets latin.
- JS de animaciones cargado solo en cliente donde se usa.

**Accesibilidad** (WCAG 2.2 AA)
- Contrastes de la sección 9.2. Focus visible (anillo beca de 3px).
- Navegación completa por teclado, incluida la pila Tinder (flechas ← →).
- `alt` descriptivo en fotos; MIGO decorativo con `alt=""` salvo cuando comunica.
- `prefers-reduced-motion` respetado en todo.
- `lang="es-PE"` y `lang="en"` en `/en`.

**Analítica**
- Vercel Analytics + eventos: clic en "Hacer match", envío de formularios, clic en WhatsApp, clic en comunidad, descarga de Roadmap, clic en productos. `[PLACEHOLDER Meta Pixel / GA4 si Raúl los tiene]`.
- Aviso de cookies mínimo solo si se agregan píxeles de terceros; opción de rechazar.

---

## 15. Plan de trabajo por fases

**Fase 0 · Diagnóstico (no escribas código todavía)**
- Explorar el repo actual, listar rutas, componentes y contenido existentes.
- Averiguar dónde vive el Tinder y proponer la estrategia de montaje en `/becas` (sección 1).
- Entregar a Raúl: plan de migración + lista de redirects.

**Fase 1 · Fundaciones**
- Tokens de diseño (sección 9) en Tailwind 4 (`@theme`), fuentes, componentes base: Button, Pill, StickerCard, SectionTitle (con píldora), Doodles, MigoImage, Marquee, CountUp, Accordion, Modal de video.
- Layout: barra de anuncio, nav píldora, footer, botón WhatsApp.
- Esquemas Zod y archivos de `/content` con datos de la sección 8 y placeholders.

**Fase 2 · Home completa** (sección 6) con todo el motion.

**Fase 3 · Páginas clave:** `/becas` (montaje), `/charlas`, `/agenda`, `/asesorias`, `/contacto` con formularios funcionando.

**Fase 4 · Resto:** `/sobre-mi`, `/escuelita`, `/recursos`, `/causas`, `/prensa`, `/en`, legales, 404.

**Fase 5 · Pulido:** SEO, schema, OG images, accesibilidad, Lighthouse, redirects 301 probados, revisión ortográfica completa (tildes y ñ, cero guiones largos).

**Criterios de aceptación**
- [ ] Todas las URLs viejas del Tinder redirigen bien y el Tinder funciona en `/becas`.
- [ ] Raúl puede agregar un evento editando solo `eventos.json` y aparece en Home y Agenda en la sección correcta.
- [ ] Formulario de asesoría abre WhatsApp con el mensaje correcto en mobile y desktop.
- [ ] Formulario de contacto llega al correo (o cae al fallback de WhatsApp).
- [ ] Lighthouse mobile ≥ 90 en Rendimiento, Accesibilidad, Buenas prácticas y SEO.
- [ ] Con `prefers-reduced-motion` no hay animaciones en movimiento.
- [ ] Búsqueda de "—" en `/content` y componentes devuelve 0 resultados.
- [ ] Ningún dato inventado: todo lo no confirmado se ve como placeholder.

---

## 16. Lo que Raúl tiene que entregar (checklist)

- [ ] **Número de becas oficial:** ¿+15 o +25? (unificar en web, bio y Beacons)
- [ ] Links de YouTube, títulos y fechas de ambas charlas TEDx
- [ ] Fotos en alta: retrato para hero (idealmente con fondo limpio), escenario TEDx, talleres, viajes por país
- [ ] Lista de eventos próximos confirmados (fecha, lugar, rol, link)
- [ ] Tipos de asesoría 1:1, duración y precio (o "desde S/ …")
- [ ] Número de WhatsApp y email de contacto
- [ ] Link de la comunidad de WhatsApp y del Roadmap Migajero
- [ ] Testimonios reales con permiso (nombre, país, texto, servicio)
- [ ] Lista de instituciones donde ha dado charlas o talleres
- [ ] Logos en SVG de Migajeando Oportunidades (y de medios, si tiene permiso)
- [ ] Temas de charla que quiere ofrecer
- [ ] Links del podcast *Ambientalmente Incorrectos* (YouTube/Spotify)
- [ ] Acceso al proyecto del Tinder en Vercel (o confirmar que está en el mismo repo)
- [ ] Carpeta `migo-web-pack` descomprimida en `public/migo/`
