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
  charlas.ts        charlas y talleres (hoy vacío, a propósito)
  tipos.ts          los tipos de TypeScript que comparten todos los anteriores

app/              rutas (App Router)
  page.tsx          portada — el cartel
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
                    acción, tira de cifras, rótulos, la flecha
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
| Agregar una charla | `content/charlas.ts`. Al agregar la primera, la sección aparece sola en `/contacto` |
| Corregir una cifra | `content/perfil.ts` → `cifras`. **Toda cifra necesita `fuente`**: sin fuente, no se publica |

---

## El sistema visual, en corto

El sitio es **un cartel de convocatoria serigrafiado**, no un portafolio de
tarjetas. La unidad de composición es el *campo de tinta*: una banda de color a
todo el ancho. No hay grillas de tarjetas iguales, ni degradados, ni vidrio, ni
sombras suaves.

**Tintas.** Cada una viene con el color de texto que sí contrasta sobre ella, y
no se combinan a mano — se elige la tinta y el par viene completo:

| Tinta | Color | Texto encima | Contraste |
|---|---|---|---|
| naranja | `#FF4A1C` | tinta | 5.5:1 |
| verde | `#6FCF3F` | tinta | 9.4:1 |
| azul | `#1B39E8` | papel | 7.4:1 |
| tinta | `#16130F` | papel | 15.6:1 |
| papel | `#F0E7D3` | tinta | 15.6:1 |

**Tipografía.** *Big Shoulders* condensada para todo lo que grita (titulares,
cifras, rótulos) y *Archivo* para lo que se lee de corrido.

**Movimiento.** Uno solo, y es del oficio: al cargar, las líneas del titular
entran fuera de registro y calzan, como una prensa ajustando la plancha. Al
tocar la acción principal, la capa de tinta se vuelve a salir un par de píxeles
— se mueve la plancha, nunca las letras que estás leyendo. Todo se apaga con
`prefers-reduced-motion`.

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
- [ ] Correo real en `perfil.correo`
- [ ] URLs de redes verificadas una por una
- [ ] Años de la trayectoria corregidos
- [ ] `NEXT_PUBLIC_URL_SITIO` y `NEXT_PUBLIC_URL_PLATAFORMA` configuradas en Vercel
- [ ] Comparte el enlace en un chat contigo mismo y revisa que la tarjeta se vea bien
