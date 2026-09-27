# rauenciencia.com

Sitio personal de **Raúl Jáuregui Penny** (`@rauenciencia`, *Raw en Ciencia*):
portafolio, historia y la puerta de entrada a **Becas para Migajear**.

Next.js 16 (App Router) + Tailwind 4 + TypeScript. Sin base de datos: todo el
contenido vive en archivos y el sitio se genera estático.

---

## Lo primero: dos decisiones pendientes

**1. El dominio ya está ocupado.** Hoy `rauenciencia.com` sirve la plataforma
Becas para Migajear. Este sitio personal no la reemplaza. Hay dos formas de que
convivan, y las dos funcionan sin tocar el código:

| Opción | El sitio personal va en | La plataforma va en | Qué configurar |
|---|---|---|---|
| **A** — recomendada | `rauenciencia.com` | `rauenciencia.com/becas` | `NEXT_PUBLIC_URL_PLATAFORMA=/becas` |
| **B** | `soy.rauenciencia.com` | `rauenciencia.com` (donde está) | `NEXT_PUBLIC_URL_SITIO=https://soy.rauenciencia.com` |

La opción A concentra todo el SEO y el tráfico de tus enlaces en bio en un solo
dominio. La B no toca nada de lo que ya funciona, que es la razón para elegirla
si no quieres arriesgar la plataforma en plena racha de prensa.

**2. Faltan cuatro datos tuyos.** Están marcados en el código con
`porConfirmar: true` y el sitio los muestra como pendientes en pantalla, a
propósito, para que no se te pasen:

- Tu retrato → deja el archivo en `public/retrato.jpg` y quita `porConfirmar` en `content/perfil.ts`.
- **Migo** → deja el archivo en `public/migo.png` (fondo transparente, mínimo 800 px de alto) y quita `porConfirmar` en `perfil.migo`. Lo busqué en tu repo `becas-para-migajear-v2` y no está ahí. El movimiento ya está hecho y funcionando: en cuanto exista el archivo, Migo lo hereda sin tocar código.
- Tu correo de contacto → `perfil.correo`.
- Las URLs reales de tus redes → `perfil.redes`.
- Los años exactos de tu trayectoria → `content/trayectoria.ts`.

---

## Correr el sitio

```bash
npm install
cp .env.example .env.local   # y ajusta las dos variables
npm run dev                  # http://localhost:3000
```

Otros comandos:

```bash
npm run build       # build de producción
npm run typecheck   # revisa tipos sin compilar
```

---

## Arquitectura

La regla de oro: **ningún componente inventa texto.** Todo lo que se lee en
pantalla sale de `content/`. Si algo está mal escrito, se corrige ahí y cambia
en todo el sitio a la vez.

```
content/          ← LO ÚNICO QUE EDITAS TÚ
  perfil.ts         quién eres: titular, bio, ficha, cifras, redes, correo
  proyectos.ts      tus proyectos (el que tenga `insignia: true` manda la portada)
  trayectoria.ts    la línea de tiempo de /sobre-mi
  prensa.ts         cobertura de medios, con enlace y fecha
  charlas.ts        tus charlas con nombre propio, lo práctico, apariciones
                    y testimonios (los dos últimos vacíos, a propósito)
  tipos.ts          los tipos de TypeScript que comparten todos los anteriores

app/              rutas (App Router)
  page.tsx          portada — el cartel
  charlas/          la página de conferencista: charlas, lo práctico, prueba
  sobre-mi/         historia larga, ficha y trayectoria
  proyectos/        índice + /proyectos/[slug] generado desde content/proyectos.ts
  prensa/           toda la cobertura
  contacto/         correo, redes y charlas
  layout.tsx        fuentes, metadatos, datos estructurados, encabezado y pie
  globals.css       el sistema visual completo (tintas, tipografía, movimiento)
  opengraph-image.tsx  la tarjeta que se ve al compartir el enlace
  sitemap.ts, robots.ts, not-found.tsx

components/
  cartel/           las piezas del cartel: campos de tinta, titular, franja de
                    acción, tira de cifras, rótulos, la flecha, Migo y el aviso
  contenido/        piezas que muestran datos: retrato, pasos, prensa, línea de tiempo
  layout/           encabezado y pie

lib/
  sitio.ts          URLs y navegación
  seo.ts            metadatos por página
  jsonld.ts         datos estructurados de schema.org

PRODUCT.md        la verdad de producto: quién es el público, qué está confirmado
                  y qué no. Se lee antes de cambiar nada de fondo.
DESIGN.md         el sistema visual escrito a partir del sitio ya construido.
```

### Agregar cosas

| Quiero… | Edito… |
|---|---|
| Cambiar el titular de la portada | `content/perfil.ts` → `titular` (3 líneas) |
| Agregar un proyecto | `content/proyectos.ts`: copio un bloque y cambio el `slug`. La página `/proyectos/<slug>` se genera sola |
| Agregar una nota de prensa | `content/prensa.ts`, arriba del todo |
| Cambiar una charla | `content/charlas.ts` → `temas`. Son tres borradores con tu historia real: ajústalos hasta que suenen a ti |
| Registrar dónde diste una charla | `content/charlas.ts` → `apariciones`. La sección aparece sola con la primera |
| Agregar un testimonio | `content/charlas.ts` → `testimonios`. Pídelo por escrito después de cada charla y pégalo tal cual. **Nunca inventes uno con el nombre de una institución real** |
| Cambiar el texto del aviso que salta al entrar | `content/perfil.ts` → `aviso` |
| Corregir una cifra | `content/perfil.ts` → `cifras`. **Toda cifra necesita `fuente`**: sin fuente, no se publica |

---

## El sistema visual, en corto

El sitio es **un cartel de convocatoria serigrafiado**, no un portafolio de
tarjetas. La unidad de composición es el *campo de tinta*: una banda de color a
todo el ancho. No hay grillas de tarjetas iguales, ni degradados, ni vidrio, ni
sombras suaves.

**Tintas: pastel nocturno.** Tu marca personal es pariente de Migajeando
Oportunidades (Bosque & Crema) pero no su gemela. La plataforma es verde bosque,
menta y ámbar sobre crema; tu web es azul noche, durazno tostado, salvia y
ciruela ahumada sobre piedra. Son pasteles bajados de tono: se leen
profesionales, no infantiles. La salvia es el guiño a la menta de la plataforma.

Cada tinta viene con el color de texto que sí contrasta sobre ella, y no se
combinan a mano: se elige la tinta y el par viene completo.

| Tinta | Color | Texto encima | Contraste | Para qué |
|---|---|---|---|---|
| durazno | `#D9967A` | tinta | 6.6:1 | la acción: todo lo que lleva a la plataforma |
| salvia | `#9DB4A0` | tinta | 7.2:1 | la oferta: charlas |
| ciruela | `#4A4360` | papel | 7.5:1 | la prueba: prensa |
| tinta (azul noche) | `#1C2130` | papel | 13.0:1 | texto, encabezado, pie |
| papel (piedra) | `#ECE7DF` | tinta | 13.0:1 | el fondo de lectura |

**Tipografía.** *Big Shoulders* condensada para todo lo que grita (titulares,
cifras, rótulos) y *Archivo* para lo que se lee de corrido.

**Movimiento.** Todo sale de la misma idea, el calce de registro de una prensa:

- Al cargar, las líneas del titular entran fuera de registro y calzan.
- Al tocar la acción principal, la capa de tinta se vuelve a salir un par de
  píxeles — se mueve la plancha, nunca las letras que estás leyendo.
- **Migo** entra desplazado y girado, calza, y después respira: una flotación
  lenta de 5,2 s. Al tocarlo se desfasa y vuelve. Nada de rebotes de juguete.
- El aviso entra como un papel recién pegado en la pared, no como un modal que
  se desvanece.

Todo se apaga con `prefers-reduced-motion`.

**El aviso de entrada.** Salta a los 0,7 s porque casi todo el tráfico llega de
un enlace en bio y se va en segundos. Lo que evita que sea una plaga: sale una
sola vez por navegador, se cierra con Escape, con el fondo y con un botón que
dice lo que hace, el foco entra y se queda dentro mientras está abierto, y si el
navegador bloquea el almacenamiento el aviso simplemente no aparece.

**La parte de conferencista.** Tus dos referencias (Josh Sundquist y Kindra
Hall) se sostienen sobre lo mismo: charlas con nombre propio, no "temas de
interés". Una charla empaquetada se puede contratar; un tema suelto, no. Por eso
`/charlas` lleva tres charlas con título, promesa, qué se lleva el público y
para quién es — más lo práctico (duración, modalidad, idioma, público) para
ahorrarte el primer correo de ida y vuelta.

**Impresión.** `/sobre-mi` está pensada para imprimirse: en papel el cartel
vuelve a ser blanco y negro y sirve de CV.

---

## Publicar en Vercel

1. [vercel.com](https://vercel.com) → **Sign in with GitHub**.
2. **Add New… → Project** → importa este repositorio. Vercel detecta Next.js solo;
   no cambies nada en Build Settings.
3. En **Environment Variables** agrega las dos de `.env.example`, con el valor
   que corresponda a la opción A o B de arriba.
4. **Deploy**. En un par de minutos tienes una URL.
5. **Settings → Domains** para apuntar tu dominio.

> En la columna *Value* va el dato, no la descripción. Es el error más fácil de
> cometer con estas tablas.

---

## Antes de publicar

- [ ] Retrato en `public/retrato.jpg`
- [ ] Migo en `public/migo.png`
- [ ] Las tres charlas de `content/charlas.ts` redactadas con tus palabras
- [ ] Correo real en `perfil.correo`
- [ ] URLs de redes verificadas una por una
- [ ] Años de la trayectoria corregidos
- [ ] `NEXT_PUBLIC_URL_SITIO` y `NEXT_PUBLIC_URL_PLATAFORMA` configuradas en Vercel
- [ ] Comparte el enlace en un chat contigo mismo y revisa que la tarjeta se vea bien
