"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  /** Primera línea, en texto normal. */
  linea: string;
  /** Segunda línea, dentro de la píldora. */
  pildora: string;
  tono?: "beca" | "brote";
  /** Sobre fondo bosque la primera línea va en crema. */
  sobreOscuro?: boolean;
  nivel?: "h1" | "h2";
  className?: string;
  id?: string;
};

/**
 * Titular en dos líneas con la segunda dentro de la píldora (brief 9.3).
 * Al entrar en pantalla la píldora se "dibuja" de izquierda a derecha y
 * después se inclina -2°, como un marcador que pasa y se asienta (brief M1).
 * Si la frase no cabe en una línea (celular), la píldora se parte en dos y el
 * radio de 0,6 em la mantiene redonda en cada renglón.
 */
export function TituloSeccion({
  linea,
  pildora,
  tono = "beca",
  sobreOscuro = false,
  nivel = "h2",
  className = "",
  id,
}: Props) {
  const sinMovimiento = useReducedMotion();
  const Etiqueta = nivel;
  const tamano = nivel === "h1" ? "text-h1" : "text-h2";
  const fondo = tono === "beca" ? "bg-beca" : "bg-brote";

  return (
    <Etiqueta id={id} className={`${tamano} ${sobreOscuro ? "text-crema" : "text-tinta"} ${className}`}>
      <span className="block">{linea}</span>
      <motion.span
        className={`relative mt-[0.12em] inline-block max-w-full origin-left rounded-[0.6em] px-[0.45em] py-[0.08em] text-tinta ${fondo}`}
        initial={sinMovimiento ? { rotate: -2 } : { scaleX: 0, rotate: 0 }}
        whileInView={{ scaleX: 1, rotate: -2 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{
          scaleX: { duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
          rotate: { duration: 0.35, delay: 0.9, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        {pildora}
      </motion.span>
    </Etiqueta>
  );
}
