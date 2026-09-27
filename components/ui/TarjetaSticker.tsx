"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Fondo = "crema" | "papel" | "durazno" | "brote" | "beca";

const fondos: Record<Fondo, string> = {
  crema: "bg-crema",
  papel: "bg-papel",
  durazno: "bg-durazno",
  brote: "bg-brote",
  beca: "bg-beca",
};

/**
 * Tarjeta sticker (brief 9.4 y M6): contorno de 2 px, sombra sólida, y una
 * rotación de partida. Al pasar el cursor o enfocar con teclado se endereza,
 * sube 6 px y la sombra crece, con resorte. El MIGO que tenga adentro puede
 * saltar usando la clase `migo-salta`.
 */
export function TarjetaSticker({
  children,
  fondo = "papel",
  rotacion = 0,
  className = "",
}: {
  children: ReactNode;
  fondo?: Fondo;
  rotacion?: number;
  className?: string;
}) {
  const sinMovimiento = useReducedMotion();

  return (
    <motion.div
      className={`group/sticker sticker relative ${fondos[fondo]} ${className}`}
      initial={{ rotate: rotacion }}
      whileHover={sinMovimiento ? undefined : { rotate: 0, y: -6, boxShadow: "7px 7px 0 var(--color-tinta)" }}
      whileFocus={sinMovimiento ? undefined : { rotate: 0, y: -6, boxShadow: "7px 7px 0 var(--color-tinta)" }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {children}
    </motion.div>
  );
}
