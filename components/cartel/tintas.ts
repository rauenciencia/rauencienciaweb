import type { Tinta } from "@/content/tipos";

/**
 * Cada tinta trae consigo el color de texto que sí contrasta sobre ella.
 * Elegir la tinta es elegir el par completo: nunca se combinan a mano.
 *
 *   durazno #D9967A + tinta  -> 6.6:1
 *   salvia  #9DB4A0 + tinta  -> 7.2:1
 *   ciruela #4A4360 + papel  -> 7.5:1
 *   tinta   #1C2130 + papel  -> 13.0:1
 */
export const tintas: Record<
  Tinta,
  { fondo: string; texto: string; tenue: string; borde: string; contraste: Tinta }
> = {
  durazno: {
    fondo: "bg-durazno",
    texto: "text-tinta",
    tenue: "text-tinta/90",
    borde: "border-tinta",
    contraste: "tinta",
  },
  salvia: {
    fondo: "bg-salvia",
    texto: "text-tinta",
    tenue: "text-tinta/90",
    borde: "border-tinta",
    contraste: "tinta",
  },
  ciruela: {
    fondo: "bg-ciruela",
    texto: "text-papel",
    tenue: "text-papel/90",
    borde: "border-papel",
    contraste: "durazno",
  },
  tinta: {
    fondo: "bg-tinta",
    texto: "text-papel",
    tenue: "text-papel/90",
    borde: "border-papel",
    contraste: "durazno",
  },
};

/** El ciclo de tintas del pliego, para que dos campos vecinos nunca repitan. */
export const cicloDeTintas: Tinta[] = ["durazno", "ciruela", "salvia", "tinta"];
