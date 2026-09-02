import type { Tinta } from "@/content/tipos";

/**
 * Cada tinta trae consigo el color de texto que sí contrasta sobre ella.
 * Elegir la tinta es elegir el par completo: nunca se combinan a mano.
 *
 *   naranja #FF4A1C + tinta  -> 5.5:1
 *   verde   #6FCF3F + tinta  -> 9.4:1
 *   azul    #1B39E8 + papel  -> 7.4:1
 *   tinta   #16130F + papel  -> 15.6:1
 */
export const tintas: Record<
  Tinta,
  { fondo: string; texto: string; tenue: string; borde: string; contraste: Tinta }
> = {
  naranja: {
    fondo: "bg-naranja",
    texto: "text-tinta",
    tenue: "text-tinta/90",
    borde: "border-tinta",
    contraste: "tinta",
  },
  verde: {
    fondo: "bg-verde",
    texto: "text-tinta",
    tenue: "text-tinta/90",
    borde: "border-tinta",
    contraste: "tinta",
  },
  azul: {
    fondo: "bg-azul",
    texto: "text-papel",
    tenue: "text-papel/90",
    borde: "border-papel",
    contraste: "naranja",
  },
  tinta: {
    fondo: "bg-tinta",
    texto: "text-papel",
    tenue: "text-papel/90",
    borde: "border-papel",
    contraste: "naranja",
  },
};

/** El ciclo de tintas del pliego, para que dos campos vecinos nunca repitan. */
export const cicloDeTintas: Tinta[] = ["naranja", "azul", "verde", "tinta"];
