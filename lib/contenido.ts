import { z } from "zod";

import anuncioJson from "@/content/anuncio.json";
import asesoriasJson from "@/content/asesorias.json";
import charlasJson from "@/content/charlas.json";
import eventosJson from "@/content/eventos.json";
import faqJson from "@/content/faq.json";
import logrosJson from "@/content/logros.json";
import prensaJson from "@/content/prensa.json";
import productosJson from "@/content/productos.json";
import recursosJson from "@/content/recursos.json";
import siteJson from "@/content/site.json";
import statsJson from "@/content/stats.json";
import testimoniosJson from "@/content/testimonios.json";

/**
 * EL CONTENIDO DE LA WEB, VALIDADO.
 *
 * Todo lo que Raúl edita vive en /content como JSON. Este archivo lo lee y lo
 * valida con Zod al compilar: si alguien escribe mal una fecha o se olvida un
 * campo, el build falla con un mensaje que dice qué archivo y qué campo, en
 * vez de publicar una página rota.
 *
 * Convención de pendientes:
 * - Un texto que falta se escribe "[PLACEHOLDER lo que falta]" y se ve así en
 *   pantalla, a propósito, para que nadie lo publique sin darse cuenta.
 * - Un link que falta va en null: el botón se muestra como pendiente y no
 *   lleva a ningún lado.
 * - `confirmar: true` marca un dato que existe pero Raúl debe validar.
 */

const fechaIso = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Usa el formato AAAA-MM-DD");
const url = z.string().url().or(z.string().startsWith("/"));

export const esquemas = {
  site: z.object({
    nombre: z.string(),
    handle: z.string(),
    lema: z.string(),
    email: z.string().email().nullable(),
    whatsapp: z.string().regex(/^\d{8,15}$/, "Solo dígitos, con código de país (51...)").nullable(),
    comunidadUrl: url.nullable(),
    roadmapUrl: url.nullable(),
    ciudad: z.string(),
    redes: z.array(z.object({ nombre: z.string(), usuario: z.string(), url: url.nullable() })),
  }),
  anuncio: z.object({
    activo: z.boolean(),
    texto: z.string(),
    textoLink: z.string(),
    link: url.nullable(),
    fechaFin: fechaIso.nullable(),
    confirmar: z.boolean().default(false),
  }),
  stats: z.array(
    z.object({
      numero: z.number().nonnegative(),
      prefijo: z.string(),
      sufijo: z.string(),
      etiqueta: z.string(),
      confirmar: z.boolean().default(false),
      nota: z.string().optional(),
    }),
  ),
  eventos: z.array(
    z.object({
      id: z.string(),
      titulo: z.string(),
      fecha: fechaIso.nullable(),
      fechaFin: fechaIso.nullable(),
      lugar: z.string(),
      ciudad: z.string().nullable(),
      modalidad: z.enum(["presencial", "virtual", "híbrido"]),
      rol: z.enum(["Ponente", "Organizador", "Taller"]),
      tipo: z.enum(["Ponencia", "Taller", "Organizo", "Entrevista"]),
      descripcion: z.string(),
      link: url.nullable(),
      estado: z.enum(["abierto", "ultimos-cupos", "agotado"]),
      confirmar: z.boolean().default(false),
    }),
  ),
  charlas: z.object({
    tedx: z.array(
      z.object({
        titulo: z.string(),
        evento: z.string(),
        fecha: fechaIso.nullable(),
        ciudad: z.string(),
        youtubeId: z.string().nullable(),
        thumbnail: z.string().nullable(),
        descripcion: z.string(),
      }),
    ),
    temas: z.array(z.object({ titulo: z.string(), descripcion: z.string(), confirmar: z.boolean().default(false) })),
    formatos: z.array(
      z.object({ nombre: z.string(), duracion: z.string(), descripcion: z.string(), destacado: z.boolean() }),
    ),
  }),
  asesorias: z.array(
    z.object({
      id: z.string(),
      nombre: z.string(),
      duracion: z.string(),
      precioTexto: z.string(),
      incluye: z.array(z.string()),
      destacado: z.boolean(),
      confirmar: z.boolean().default(false),
    }),
  ),
  recursos: z.array(
    z.object({
      id: z.string(),
      titulo: z.string(),
      descripcion: z.string(),
      tipo: z.string(),
      etapa: z.enum(["Empiezo de cero", "Busco convocatoria", "Armo mi CV", "Escribo mi carta", "Entrevista"]),
      gratis: z.boolean(),
      link: url.nullable(),
      tiempo: z.string(),
      imagen: z.string().nullable(),
    }),
  ),
  productos: z.array(
    z.object({
      nombre: z.string(),
      descripcion: z.string(),
      precioTexto: z.string(),
      link: url.nullable(),
      orden: z.number().int(),
    }),
  ),
  testimonios: z.array(
    z.object({
      nombre: z.string(),
      pais: z.string(),
      texto: z.string(),
      servicio: z.enum(["Taller", "Asesoría", "Charla", "Tinder"]),
      foto: z.string().optional(),
      // Sin permiso explícito, el testimonio no se publica. Nunca.
      permiso: z.literal(true),
    }),
  ),
  prensa: z.array(
    z.object({
      medio: z.string(),
      titular: z.string(),
      fecha: fechaIso.nullable(),
      url: z.string().url(),
      logo: z.string().optional(),
    }),
  ),
  logros: z.array(
    z.object({
      anio: z.number().int().nullable(),
      titulo: z.string(),
      lugar: z.string(),
      tipo: z.string(),
      confirmar: z.boolean().default(false),
    }),
  ),
  faq: z.array(
    z.object({
      pagina: z.enum(["home", "asesorias", "charlas"]),
      pregunta: z.string(),
      respuesta: z.string(),
    }),
  ),
};

function validar<T extends z.ZodTypeAny>(archivo: string, esquema: T, datos: unknown): z.infer<T> {
  const resultado = esquema.safeParse(datos);
  if (!resultado.success) {
    const detalle = resultado.error.issues
      .map((problema) => `  · ${problema.path.join(".") || "(raíz)"}: ${problema.message}`)
      .join("\n");
    throw new Error(`content/${archivo} tiene errores:\n${detalle}`);
  }
  return resultado.data;
}

export const site = validar("site.json", esquemas.site, siteJson);
export const anuncio = validar("anuncio.json", esquemas.anuncio, anuncioJson);
export const stats = validar("stats.json", esquemas.stats, statsJson);
export const eventos = validar("eventos.json", esquemas.eventos, eventosJson);
export const charlas = validar("charlas.json", esquemas.charlas, charlasJson);
export const asesorias = validar("asesorias.json", esquemas.asesorias, asesoriasJson);
export const recursos = validar("recursos.json", esquemas.recursos, recursosJson);
export const productos = validar("productos.json", esquemas.productos, productosJson).sort(
  (a, b) => a.orden - b.orden,
);
export const testimonios = validar("testimonios.json", esquemas.testimonios, testimoniosJson);
export const prensa = validar("prensa.json", esquemas.prensa, prensaJson);
export const logros = validar("logros.json", esquemas.logros, logrosJson);
export const faq = validar("faq.json", esquemas.faq, faqJson);

export type Evento = (typeof eventos)[number];
export type Nota = (typeof prensa)[number];

/** true si el texto es un placeholder que Raúl todavía tiene que llenar. */
export function esPendiente(texto: string | null | undefined): boolean {
  return texto == null || texto.trim().startsWith("[PLACEHOLDER");
}

const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

/** "2026-08-31" → "31 de agosto de 2026". Sin zona horaria: la fecha es la fecha. */
export function fechaLarga(iso: string | null): string | null {
  if (!iso) return null;
  const [anio, mes, dia] = iso.split("-").map(Number);
  return `${dia} de ${MESES[mes - 1]} de ${anio}`;
}

/** Separa eventos en próximos y pasados según la fecha de hoy (o la de fin). */
export function eventosPorFecha(hoy = new Date()) {
  const hoyIso = hoy.toISOString().slice(0, 10);
  const conFecha = eventos.filter((evento) => evento.fecha);
  const proximos = conFecha
    .filter((evento) => (evento.fechaFin ?? evento.fecha!) >= hoyIso)
    .sort((a, b) => a.fecha!.localeCompare(b.fecha!));
  const pasados = conFecha
    .filter((evento) => (evento.fechaFin ?? evento.fecha!) < hoyIso)
    .sort((a, b) => b.fecha!.localeCompare(a.fecha!));
  return { proximos, pasados, sinFecha: eventos.filter((evento) => !evento.fecha) };
}

/** Todo lo marcado para confirmar, para listarlo en /sistema. */
export function pendientesDeConfirmar(): string[] {
  const lista: string[] = [];
  if (!site.email) lista.push("site.json · email de contacto");
  if (!site.whatsapp) lista.push("site.json · número de WhatsApp");
  if (!site.comunidadUrl) lista.push("site.json · link de la comunidad de WhatsApp");
  if (!site.roadmapUrl) lista.push("site.json · link del Roadmap Migajero");
  site.redes.filter((red) => !red.url).forEach((red) => lista.push(`site.json · link de ${red.usuario}`));
  if (anuncio.confirmar) lista.push("anuncio.json · texto y link de inscripción");
  stats.filter((s) => s.confirmar).forEach((s) => lista.push(`stats.json · ${s.prefijo}${s.numero}${s.sufijo} ${s.etiqueta}${s.nota ? ` (${s.nota})` : ""}`));
  eventos.filter((e) => e.confirmar).forEach((e) => lista.push(`eventos.json · ${e.titulo}`));
  charlas.tedx.filter((t) => !t.youtubeId).forEach((t) => lista.push(`charlas.json · link de YouTube de ${t.evento}`));
  charlas.temas.filter((t) => t.confirmar).forEach((t) => lista.push(`charlas.json · tema “${t.titulo}”`));
  asesorias.filter((a) => a.confirmar).forEach((a) => lista.push(`asesorias.json · ${a.nombre}: duración y precio`));
  productos.filter((p) => !p.link).forEach((p) => lista.push(`productos.json · link de compra de ${p.nombre}`));
  logros.filter((l) => l.confirmar).forEach((l) => lista.push(`logros.json · año de ${l.titulo}`));
  if (testimonios.length === 0) lista.push("testimonios.json · testimonios reales con permiso (la sección está oculta)");
  return lista;
}
