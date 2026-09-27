import type { Aparicion, Tema, Testimonio } from "./tipos";

/**
 * LA PARTE DE CONFERENCISTA.
 *
 * Los sitios de conferencistas que tomamos como referencia (Josh Sundquist,
 * Kindra Hall) se sostienen sobre lo mismo: charlas con nombre propio, no
 * "temas de interés". Una charla empaquetada se puede contratar; un tema
 * suelto, no.
 *
 * Estos tres borradores salen de hechos tuyos verificados. Ajusta los títulos
 * y la duración a tu gusto: son tu oferta, y deben sonar a ti.
 */
export const temas: Tema[] = [
  {
    slug: "migajear",
    titulo: "Migajear oportunidades",
    promesa:
      "Cómo gané 15 becas saliendo de Lima Este, y el método que cualquiera puede copiar.",
    descripcion:
      "La charla que cuenta el camino completo: de no tener el guion, a Beca 18, a quince convocatorias ganadas. No es una historia de superación con música de fondo: es el método, con los errores incluidos.",
    seLlevan: [
      "Dónde están publicadas las convocatorias que nadie encuentra",
      "Cómo se arma una postulación que no se descarta en el primer filtro",
      "Qué hacer con los rechazos, que son la mayoría",
    ],
    para: "Colegios, universidades y programas de becas",
    tinta: "naranja",
  },
  {
    slug: "construir",
    titulo: "De un Excel a 15.000 usuarios",
    promesa:
      "Cómo un estudiante sin equipo ni presupuesto construyó una plataforma que alcanzó a 400.000 personas.",
    descripcion:
      "El detrás de Becas para Migajear: por qué el problema no era la información sino la forma, cómo se decide qué construir, y qué pasa cuando algo que hiciste para ti se le vuelve útil a un país entero.",
    seLlevan: [
      "Cómo se detecta un problema que todos tienen y nadie nombra",
      "Por qué la mecánica importa más que el contenido",
      "Qué cambia cuando lo regalas en vez de venderlo",
    ],
    para: "Programas de emprendimiento, incubadoras y eventos de tecnología",
    tinta: "azul",
  },
  {
    slug: "divulgacion",
    titulo: "Ciencia que la gente sí ve",
    promesa:
      "Cómo explicar algo complejo en treinta segundos sin mentir y sin aburrir.",
    descripcion:
      "Lo que aprendí comunicando ciencia como Raw en Ciencia: por qué la mayoría de la divulgación no llega, qué hace que un video se comparta, y dónde está la línea que no se cruza cuando simplificas.",
    seLlevan: [
      "Cómo se construye un gancho que no es clickbait",
      "Qué formato pide cada plataforma y por qué",
      "Cómo simplificar sin perder lo que es verdad",
    ],
    para: "Facultades, museos, medios y equipos de comunicación",
    tinta: "verde",
  },
];

/**
 * Charlas y apariciones ya dadas.
 *
 * Vacío a propósito: no hay ninguna confirmada en fuentes públicas y el sitio
 * no inventa una trayectoria. En cuanto agregues la primera, la sección
 * aparece sola en /charlas.
 */
export const apariciones: Aparicion[] = [];

/**
 * Testimonios.
 *
 * También vacío, y por una razón más dura: un testimonio inventado con el
 * nombre de una institución real es una mentira que te puede costar caro.
 * Pide uno por escrito después de cada charla y pégalo acá tal cual.
 */
export const testimonios: Testimonio[] = [];

/**
 * Lo práctico que pregunta quien te va a contratar, antes de escribirte.
 * Responderlo en la página evita el primer correo de ida y vuelta.
 * Ajústalo a lo que realmente ofreces.
 */
export const logistica = [
  { etiqueta: "Duración", valor: "45 a 60 minutos, más preguntas" },
  { etiqueta: "Modalidad", valor: "Presencial en Lima o remota" },
  { etiqueta: "Idioma", valor: "Español" },
  { etiqueta: "Público", valor: "Desde 30 hasta auditorio completo" },
];
