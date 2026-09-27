import type { ReactNode } from "react";

/**
 * La firma tipográfica del sitio (brief 9.3): una palabra o frase dentro de
 * una píldora amarilla o lima, rotada -2°. Para la versión animada de
 * titular, ver TituloSeccion.
 */
export function Pildora({
  children,
  tono = "beca",
  rotacion = -2,
  className = "",
}: {
  children: ReactNode;
  tono?: "beca" | "brote" | "durazno";
  rotacion?: number;
  className?: string;
}) {
  const fondo = { beca: "bg-beca", brote: "bg-brote", durazno: "bg-durazno" }[tono];
  return (
    <span
      className={`inline-block rounded-full px-[0.45em] py-[0.1em] text-tinta ${fondo} ${className}`}
      style={{ rotate: `${rotacion}deg` }}
    >
      {children}
    </span>
  );
}
