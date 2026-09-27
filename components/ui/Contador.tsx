"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** 1000 → "1,000". El brief escribe los miles con coma ("+1,000"). */
function formatear(numero: number) {
  return Math.round(numero).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Número que cuenta de 0 a su valor al entrar en pantalla, en 1,2 s y una
 * sola vez (brief M4). El HTML sale del servidor con el valor final: sin
 * JavaScript, o para Google, el número es el correcto desde el principio.
 */
export function Contador({ valor, prefijo = "", sufijo = "", className = "" }: { valor: number; prefijo?: string; sufijo?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const sinMovimiento = useReducedMotion();
  const [mostrado, setMostrado] = useState(valor);
  const [armado, setArmado] = useState(false);

  // Al hidratar, si hay movimiento, se baja a 0 para poder contar.
  useEffect(() => {
    if (!sinMovimiento) {
      setMostrado(0);
      setArmado(true);
    }
  }, [sinMovimiento]);

  useEffect(() => {
    if (!visible || !armado) return;
    const control = animate(0, valor, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setMostrado,
    });
    return () => control.stop();
  }, [visible, armado, valor]);

  return (
    <span ref={ref} className={`cifra tabular-nums ${className}`}>
      {/* El lector de pantalla lee el valor final, no cada paso de la cuenta. */}
      <span aria-hidden="true">
        {prefijo}
        {formatear(mostrado)}
        {sufijo}
      </span>
      <span className="sr-only">
        {prefijo}
        {formatear(valor)}
        {sufijo}
      </span>
    </span>
  );
}
