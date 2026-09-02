import type { Cifra, Ficha, Red } from "./tipos";

/**
 * Quién eres. Esto es lo primero que hay que revisar antes de publicar.
 *
 * Todo lo que está aquí sin la marca "PENDIENTE" viene de prensa publicada en
 * agosto de 2026 (La República, Infobae, El Peruano). Si algo cambió —la edad,
 * el año de carrera, el número de becas— se corrige aquí y cambia en todo el
 * sitio a la vez.
 */
export const perfil = {
  nombre: "Raúl Jáuregui Penny",
  handle: "@rauenciencia",
  alias: "Raw en Ciencia",

  /** El titular del cartel. Es lo único que mucha gente va a leer. */
  titular: ["La nueva generación", "ya no migajea amor.", "Migajea becas."],

  /** La frase que va debajo del titular. Dos líneas, máximo. */
  bajada:
    "Soy Raúl. Crecí en Lima Este, llegué a la universidad con Beca 18 y desde entonces gané 15 becas e intercambios. Después construí la herramienta que me habría ahorrado todo ese camino, y la dejé gratis.",

  /** Bio corta, para /sobre-mi y para los metadatos al compartir. */
  bioCorta:
    "Estudiante de Ingeniería Ambiental en la Universidad Peruana Cayetano Heredia y creador de Becas para Migajear, la plataforma gratuita que ya usaron más de 15.000 jóvenes de América Latina para encontrar becas.",

  /** Bio larga, en párrafos, para /sobre-mi. */
  bioLarga: [
    "Nací y crecí en Lima Este, en condiciones de pobreza extrema. Llegué a la universidad con Beca 18, la beca estatal de Pronabec, y ahí descubrí algo que nadie me había contado: las oportunidades existen, están publicadas, y aun así casi nadie las encuentra. Están repartidas en decenas de páginas oficiales, en PDF que nadie lee, en convocatorias que se cierran antes de que te enteres.",
    "Aprendí a buscarlas a la mala. Terminé con quince becas e intercambios y con un Excel gigante que fui armando durante años. Cada vez que se lo pasaba a un amigo pasaba lo mismo: lo abría una vez y no volvía. El problema no era la información. Era la forma.",
    "Así nació Becas para Migajear: la misma información, pero con la mecánica que mi generación ya sabe usar de memoria. Deslizas a la derecha lo que te sirve, a la izquierda lo que no, y te quedas con tu lista. Nada de descargar una app, nada de pagar.",
    "Estudio Ingeniería Ambiental en la Universidad Peruana Cayetano Heredia y comunico ciencia como Raw en Ciencia. Las dos cosas son la misma: agarrar algo que parece inalcanzable y dejarlo al alcance de alguien que no tenía por qué llegar ahí.",
  ],

  /** Ficha de identidad. Se imprime como el recuadro de datos de un cartel. */
  ficha: [
    { etiqueta: "Edad", valor: "22 años" },
    { etiqueta: "De", valor: "Lima Este, Perú" },
    { etiqueta: "Estudia", valor: "Ingeniería Ambiental" },
    { etiqueta: "En", valor: "Universidad Peruana Cayetano Heredia" },
    { etiqueta: "Llegó con", valor: "Beca 18 — Pronabec" },
  ] satisfies Ficha[],

  /** Las cifras del cartel. Cada una con su fuente. Sin fuente, no entra. */
  cifras: [
    {
      numero: "15",
      concepto: "becas e intercambios ganados",
      fuente: "La República, agosto 2026",
    },
    {
      numero: "+15.000",
      concepto: "jóvenes usaron la plataforma",
      fuente: "Infobae, agosto 2026",
    },
    {
      numero: "+400.000",
      concepto: "personas alcanzadas en tres meses",
      fuente: "La República, agosto 2026",
    },
  ] satisfies Cifra[],

  /**
   * PENDIENTE — reemplaza estas URLs por las tuyas antes de publicar.
   * Están marcadas `porConfirmar` a propósito: mientras la marca esté puesta,
   * `npm run build` las deja pasar pero el README te las lista como deuda.
   */
  redes: [
    { nombre: "TikTok", rotulo: "TikTok", url: "https://www.tiktok.com/@rauenciencia", porConfirmar: true },
    { nombre: "Instagram", rotulo: "Instagram", url: "https://www.instagram.com/rauenciencia/", porConfirmar: true },
    { nombre: "LinkedIn", rotulo: "LinkedIn", url: "https://www.linkedin.com/", porConfirmar: true },
    { nombre: "Linktree", rotulo: "Todos los enlaces", url: "https://linktr.ee/rauenciencia", porConfirmar: true },
  ] satisfies Red[],

  /** PENDIENTE — pon aquí el correo que quieres que la gente use. */
  correo: "hola@rauenciencia.com",
  correoPorConfirmar: true,

  /** Qué puede pedirte alguien que llega a /contacto. */
  para: [
    "Charlas y talleres sobre cómo buscar y ganar becas",
    "Entrevistas y notas de prensa",
    "Alianzas con universidades, colegios y organizaciones",
  ],

  /**
   * PENDIENTE — tu retrato. Deja el archivo en `public/retrato.jpg`
   * (vertical, mínimo 1200 px de alto) y quita `porConfirmar`.
   */
  retrato: {
    src: "/retrato.jpg",
    alt: "Raúl Jáuregui Penny",
    porConfirmar: true,
  },
} as const;
