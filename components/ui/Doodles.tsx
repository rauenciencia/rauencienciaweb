"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Garabatos del cuaderno (brief 9.4). Son trazos, no ilustraciones: se
 * dibujan solos al entrar en pantalla con pathLength de 0 a 1 en 700 ms
 * (brief M9). Siempre decorativos, siempre aria-hidden.
 */

type Tono = "beca" | "brote" | "hoja" | "tinta" | "crema" | "match";
const colores: Record<Tono, string> = {
  beca: "var(--color-beca)",
  brote: "var(--color-brote)",
  hoja: "var(--color-hoja)",
  tinta: "var(--color-tinta)",
  crema: "var(--color-crema)",
  match: "var(--color-match)",
};

type Props = { tono?: Tono; className?: string; grosor?: number };

function Trazo({ d, viewBox, tono = "tinta", className = "", grosor = 3, relleno = false }: Props & { d: string; viewBox: string; relleno?: boolean }) {
  const sinMovimiento = useReducedMotion();
  return (
    <svg viewBox={viewBox} aria-hidden="true" focusable="false" className={className} fill="none">
      <motion.path
        d={d}
        stroke={colores[tono]}
        strokeWidth={grosor}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={relleno ? colores[tono] : "none"}
        initial={sinMovimiento ? { pathLength: 1 } : { pathLength: 0, fillOpacity: 0 }}
        whileInView={{ pathLength: 1, fillOpacity: 1 }}
        viewport={{ once: true }}
        transition={{ pathLength: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }, fillOpacity: { delay: 0.6, duration: 0.2 } }}
      />
    </svg>
  );
}

export const Estrella = (p: Props) => (
  <Trazo {...p} relleno viewBox="0 0 40 40" d="M20 3 C21.5 14 26 18.5 37 20 C26 21.5 21.5 26 20 37 C18.5 26 14 21.5 3 20 C14 18.5 18.5 14 20 3 Z" />
);

export const Destellos = (p: Props) => (
  <Trazo {...p} viewBox="0 0 48 48" d="M24 4 V14 M24 34 V44 M4 24 H14 M34 24 H44 M10 10 L16 16 M32 32 L38 38 M38 10 L32 16 M16 32 L10 38" />
);

export const FlechaCurva = (p: Props) => (
  <Trazo {...p} viewBox="0 0 120 70" d="M6 58 C30 10, 78 4, 108 30 M108 30 L96 30 M108 30 L106 18" />
);

export const Subrayado = (p: Props) => (
  <Trazo {...p} viewBox="0 0 220 20" d="M4 13 C40 6, 90 5, 130 9 C160 12, 190 10, 216 6" />
);

export const CirculoMano = (p: Props) => (
  <Trazo {...p} viewBox="0 0 200 90" d="M110 8 C50 2, 6 22, 8 46 C10 74, 70 86, 120 80 C170 74, 196 56, 190 36 C184 16, 140 6, 92 12" />
);

export const Corazon = (p: Props) => (
  <Trazo {...p} relleno viewBox="0 0 40 36" d="M20 33 C8 24 3 17 3 11 C3 6 7 3 11.5 3 C15 3 18 5 20 8.5 C22 5 25 3 28.5 3 C33 3 37 6 37 11 C37 17 32 24 20 33 Z" />
);

/**
 * Separador ondulado entre una sección clara y una oscura (brief 9.4).
 * `desde` es el color de la sección de arriba; `hacia`, el de abajo.
 */
export function Onda({ desde, hacia, invertida = false }: { desde: string; hacia: string; invertida?: boolean }) {
  return (
    <div aria-hidden="true" className="relative -my-px leading-[0]" style={{ backgroundColor: desde }}>
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className={`block h-8 w-full sm:h-12 ${invertida ? "-scale-x-100" : ""}`}>
        <path
          d="M0 34 C120 12 240 8 360 22 C480 36 600 58 720 52 C840 46 960 14 1080 12 C1200 10 1320 30 1440 40 L1440 64 L0 64 Z"
          fill={hacia}
        />
      </svg>
    </div>
  );
}
