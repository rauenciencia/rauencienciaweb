# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + Tailwind, desplegado en Vercel. Elegido por el usuario en la ronda de arranque; coincide con el stack que ya opera en su otro proyecto (`rauenciencia/simulador`), así que el flujo de despliegue le resulta familiar. Contenido en archivos TypeScript, sin base de datos.

## Users

Audiencia primaria confirmada por el usuario: **su audiencia de redes sociales**. Jóvenes latinoamericanos (Perú, México, Chile principalmente) de 16 a 30 años que lo descubren como "Raw en Ciencia" en TikTok e Instagram, casi siempre desde un teléfono, y entran a la web para (a) usar Becas para Migajear y (b) averiguar quién es la persona detrás.

Audiencias secundarias, no prioritarias pero reales: medios que lo han cubierto y buscan datos de contacto; instituciones y organizadores que quieren invitarlo a hablar o colaborar.

## Product Purpose

Sitio personal de Raúl Jáuregui Penny: el lugar donde su nombre, su historia y su trabajo viven de forma permanente, fuera del feed. Debe convertir a alguien que vio un video de 30 segundos en alguien que entiende quién es, usa su plataforma y sabe cómo contactarlo.

Éxito = un visitante que llega desde una bio de TikTok sabe en pocos segundos qué es Becas para Migajear, entra a usarla, y entiende que detrás hay una persona con una historia concreta.

## Positioning

No es "un divulgador de ciencia con web". Es alguien que consiguió 15 becas e intercambios y luego construyó la herramienta que le habría ahorrado ese camino a él mismo — y la regaló. La credibilidad no viene de credenciales: viene de haber recorrido el proceso y de que 15.000 personas ya usaron el resultado.

## Operating Context

- Casi todo el tráfico llega desde el enlace en bio de TikTok/Instagram → móvil, vertical, conexión variable, atención de segundos.
- El dominio `rauenciencia.com` **ya está en uso**: hoy sirve la plataforma "Becas para Migajear". Este sitio personal tiene que convivir con eso (raíz personal + plataforma en una ruta, o sitio personal en subdominio). Decisión abierta del usuario; el sitio se construye para poder ir en cualquiera de las dos.
- Idioma: español (peruano, cercano, sin solemnidad académica).

## Capabilities and Constraints

- Sitio estático/SSG: sin base de datos, sin login, sin panel. El contenido se edita en archivos.
- Formulario de contacto opcional; por defecto, contacto directo por correo y redes.
- Debe cargar rápido en 4G en un teléfono de gama media.
- Terminología propia: **"migajear"** (buscar y juntar oportunidades una por una, con la insistencia con la que otros buscan atención). Es el verbo de la marca, no un chiste desechable.

## Brand Commitments

> **Actualizado con el brief** (`docs/BRIEF-WEB-RAUENCIENCIA.md`), que Raúl confirmó como fuente de verdad. Donde este archivo contradiga al brief, manda el brief.

- Identidad visual: **Cuaderno migajero**, sobre la paleta de Migajeando Oportunidades (verde bosque, crema, amarillo beca). Reemplaza tanto al "cartel de convocatoria" como a la paleta "pastel nocturno", ambos descartados por Raúl.
- MIGO, el osito crema con lentes verdes, es el guía visual: máximo uno por pantalla, nunca en lugar de la foto de Raúl.
- Voz: la de la skill `voz-rauenciencia`. Cero guiones largos, tildes y ñ perfectas.
- El Tinder de Becas que se monta en `/becas` es el **v2** (`becas-para-migajear-v2`, 506 oportunidades), confirmado por Raúl.

### Compromisos anteriores


- Nombre público / handle: **@rauenciencia** ("Raw en Ciencia"). Nombre real: **Raúl Jáuregui Penny**.
- Producto insignia: **Becas para Migajear**, apodado por la prensa "el Tinder de becas".
- Frase suya ya publicada en prensa: *"La nueva generación ya no migajea amor, migajea becas"*.
- El usuario tiene fotos/retratos propios utilizables. Los archivos aún no están en el repo: se dejan slots marcados.
- No usar la identidad visual de Prima AFP: es la marca de un cliente/empleador, no la suya.

## Evidence on Hand

Verificado en prensa (agosto 2026), utilizable como hecho en el sitio:

- 22 años, peruano, estudiante de Ingeniería Ambiental en la Universidad Peruana Cayetano Heredia (UPCH).
- Creció en pobreza extrema en Lima Este; entró a la universidad con Beca 18 (Pronabec).
- 15 becas e intercambios ganados.
- Becas para Migajear: +500 oportunidades reales (becas, prácticas, voluntariados, concursos), gratuita, funciona en el navegador sin descargar app, mecánica de swipe con filtros por tipo, país de destino y área de estudio, organizada con ayuda de IA.
- Alcance: +400.000 personas en los primeros tres meses; +15.000 jóvenes la han usado en Perú, México, Chile y otros países de LatAm.
- Cobertura: La República, Infobae, El Peruano, Telemundo, Stakeholders, Rio Times, Periodismo en Línea, Radio Folk Perú.

No confirmado — **no inventar**: correo de contacto, URLs exactas de sus perfiles sociales, cifras de seguidores, lista de charlas dadas, premios, y su trayectoria laboral completa. Todo eso queda marcado como pendiente de llenar.

## Product Principles

1. **La historia es la prueba.** Beca 18, Lima Este, 15 becas: eso es lo que ningún competidor puede copiar. Va antes que cualquier adjetivo.
2. **La acción vive arriba.** Entrar a Becas para Migajear tiene que estar visible sin scroll, en móvil.
3. **Móvil primero, de verdad.** La composición se diseña para un pulgar en un teléfono vertical; el escritorio es la adaptación.
4. **Cifras reales o ninguna.** Solo los números verificados en prensa. Nada de métricas de relleno.
5. **Su voz, no la voz institucional.** "Migajear" se queda. El sitio suena a él, no a memoria anual de una ONG.

## Accessibility & Inclusion

Público joven y masivo en dispositivos y conexiones muy dispares. Contraste AA como piso, objetivos táctiles cómodos, todo operable con teclado, y que el contenido sea legible aunque fallen imágenes o fuentes.
