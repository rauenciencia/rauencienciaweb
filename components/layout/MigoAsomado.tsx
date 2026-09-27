"use client";

import { motion, useReducedMotion } from "motion/react";

import { MigoImagen } from "@/components/ui/MigoImagen";

/**
 * MIGO asomado por el borde superior del footer (brief 5): aparece recién
 * cuando llegas al final, subiendo desde detrás de la onda.
 */
export function MigoAsomado() {
  const sinMovimiento = useReducedMotion();
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -top-16 right-[8%] z-10 overflow-hidden sm:-top-24">
      <motion.div
        initial={sinMovimiento ? { y: 0 } : { y: "70%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        transition={{ type: "spring", stiffness: 180, damping: 16 }}
      >
        <MigoImagen pose="saludando" ancho={112} className="sm:w-[150px]" />
      </motion.div>
    </div>
  );
}
