# rauenciencia.com

La casa digital de **Raúl Jáuregui Penny** (@rauenciencia): quién es, el Tinder
de Becas, sus charlas TEDx, agenda, asesorías, talleres, recursos y contacto.

Next.js 16 (App Router) · Tailwind CSS 4 · TypeScript · Motion · Zod. Contenido
en archivos, sin base de datos. Publicado en Vercel.

> **La fuente de verdad del proyecto es [`docs/BRIEF-WEB-RAUENCIENCIA.md`](docs/BRIEF-WEB-RAUENCIENCIA.md).**
> Léelo antes de tocar código. Se trabaja por fases (sección 15 del brief).

## Estado del rediseño "Cuaderno migajero"

| Fase | Qué incluye | Estado |
|---|---|---|
| 0 · Diagnóstico | Dónde vive el Tinder, plan de montaje en `/becas`, redirects | Hecha |
| 1 · Fundaciones | Tokens, fuentes, componentes base, layout, contenido con Zod | **En revisión** (ver `/sistema`) |
| 2 · Home completa | Las 15 secciones de la home con todo el motion | Pendiente |
| 3 · Páginas clave | `/becas`, `/charlas`, `/agenda`, `/asesorias`, `/contacto` con formularios | Pendiente |
| 4 · Resto | `/sobre-mi`, `/escuelita`, `/recursos`, `/causas`, `/prensa`, `/en`, legales, 404 | Pendiente |
| 5 · Pulido | SEO, schema, OG, accesibilidad, Lighthouse, 301 | Pendiente |

Mientras dure el rediseño, las páginas viejas (el "cartel") siguen funcionando
con la paleta nueva. Se reemplazan una por una en las fases 2 a 4.

## Correr el sitio

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # build de producción; también valida todo /content
npm run typecheck
```

`/sistema` es la vitrina interna del sistema de diseño: todos los componentes,
la paleta, las 19 poses de MIGO y la lista de datos pendientes. No aparece en
Google.

## Editar el contenido (sin tocar código)

Todo lo que cambia vive en `/content` como JSON. Al compilar, `lib/contenido.ts`
lo valida con Zod: si una fecha está mal escrita o falta un campo, el build se
detiene y dice exactamente qué archivo y qué campo arreglar.

| Quiero… | Edito… |
|---|---|
| Cambiar la barra de anuncio | `content/anuncio.json` |
| Agregar un evento | `content/eventos.json` (fecha en formato `AAAA-MM-DD`; pasa solo a "pasados") |
| Poner mi email, WhatsApp o links | `content/site.json` |
| Actualizar cifras | `content/stats.json` |
| Sumar una nota de prensa | `content/prensa.json` |
| Poner el link de YouTube de un TEDx | `content/charlas.json` → `youtubeId` |
| Agregar un testimonio | `content/testimonios.json`, **solo con permiso** (`"permiso": true` es obligatorio) |

**Pendientes:** un texto que falta se escribe `"[PLACEHOLDER lo que falta]"` y
se ve así en pantalla, a propósito. Un link que falta va en `null`. La lista
completa de lo que falta está en `/sistema`.

## Arquitectura

```
docs/BRIEF-WEB-RAUENCIENCIA.md   la fuente de verdad
content/*.json                   lo que edita Raúl
lib/contenido.ts                 esquemas Zod + utilidades (fechas, eventos, pendientes)
lib/sitio.ts                     URLs, navegación
components/ui/                   Boton, Pildora, TituloSeccion, TarjetaSticker, Doodles,
                                 MigoImagen, Marquee, Contador, Acordeon, VideoTedx, IconosRedes
components/layout/               BarraAnuncio, NavPildora, Pie, MigoAsomado, BotonWhatsApp
public/migo/                     las 19 poses de MIGO en WebP
public/fotos/                    fotos reales
app/                             rutas (App Router)
```

## Sistema visual (resumen del brief, sección 9)

| Token | Color | Uso |
|---|---|---|
| bosque | `#0F3D2E` | fondos oscuros, footer |
| hoja | `#2F7A4B` | links, íconos |
| brote | `#9CCB4F` | píldoras, tags |
| beca | `#F5C443` | CTA primario, píldora del titular, anuncio |
| durazno | `#FACC9C` | superficies cálidas |
| crema | `#FCF5E5` | fondo base |
| papel | `#FFFDF7` | tarjetas |
| tinta | `#1F2A10` | texto y contornos (el mismo verde oscuro del contorno de MIGO) |

Contrastes del brief verificados uno por uno. Un ajuste: el anillo de foco es
**verde bosque sobre fondos claros** y amarillo sobre fondos oscuros, porque
amarillo sobre crema da 1,5:1 y no se ve.

Tipografías: Bricolage Grotesque (titulares), Big Shoulders con eje óptico en
72 (carteles, fechas, cifras), DM Sans (texto), Caveat (notas a mano).

Todo el movimiento respeta `prefers-reduced-motion`.

## Publicar

Vercel publica solo cada cambio en `main`, y cada PR recibe su propia vista
previa. **No conectes `rauenciencia.com` a este proyecto** hasta que el Tinder
esté montado en `/becas` (fase 3); si no, la plataforma deja de verse.
