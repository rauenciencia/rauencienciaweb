import type { Hito } from "./tipos";

/**
 * La línea de tiempo de /sobre-mi.
 *
 * PENDIENTE — los años exactos de los primeros hitos no están confirmados en
 * fuentes públicas. Corrígelos antes de publicar: es el tipo de dato que un
 * periodista va a citar.
 */
export const trayectoria: Hito[] = [
  {
    anio: "Lima Este",
    titulo: "El punto de partida",
    detalle:
      "Crecí en condiciones de pobreza extrema en el este de Lima. Ninguna de las oportunidades que vinieron después estaba en el guion.",
    tinta: "tinta",
  },
  {
    anio: "Beca 18",
    titulo: "La puerta de entrada",
    detalle:
      "Entré a la universidad con Beca 18, la beca estatal de Pronabec. La primera convocatoria que gané fue la que hizo posible todas las demás.",
    tinta: "verde",
  },
  {
    anio: "UPCH",
    titulo: "Ingeniería Ambiental",
    detalle:
      "Estudio Ingeniería Ambiental en la Universidad Peruana Cayetano Heredia.",
    tinta: "azul",
  },
  {
    anio: "15",
    titulo: "Becas e intercambios",
    detalle:
      "Quince convocatorias ganadas, y un Excel que fue creciendo con cada una hasta volverse impracticable.",
    tinta: "tinta",
  },
  {
    anio: "2026",
    titulo: "Becas para Migajear",
    detalle:
      "Convertí ese Excel en una plataforma gratuita. En tres meses llegó a más de 400.000 personas y la usaron más de 15.000 jóvenes en Perú, México, Chile y otros países de la región.",
    tinta: "naranja",
  },
];
