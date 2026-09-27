import Link from "next/link";
import type { ReactNode } from "react";

type Variante = "primario" | "secundario" | "oscuro" | "claro";

const variantes: Record<Variante, string> = {
  // Brief 9.2: primario = beca con texto bosque; secundario = contorno tinta 2 px.
  primario: "bg-beca text-bosque border-2 border-tinta shadow-[3px_3px_0_var(--color-tinta)] hover:shadow-[5px_5px_0_var(--color-tinta)] hover:-translate-y-0.5",
  secundario: "bg-transparent text-tinta border-2 border-tinta hover:bg-tinta hover:text-crema",
  oscuro: "bg-bosque text-crema border-2 border-bosque hover:bg-bosque-900",
  claro: "bg-transparent text-crema border-2 border-crema hover:bg-crema hover:text-bosque",
};

type Props = {
  children: ReactNode;
  variante?: Variante;
  href?: string;
  /** Si no hay destino todavía (dato pendiente), el botón se ve pero no lleva a ningún lado. */
  pendiente?: boolean;
  tamano?: "normal" | "grande";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

/**
 * Botón píldora. Al presionar se hunde un poco (escala 0,97, brief M13).
 * Los links externos abren en otra pestaña; los internos usan el router.
 */
export function Boton({
  children,
  variante = "primario",
  href,
  pendiente = false,
  tamano = "normal",
  type = "button",
  onClick,
  className = "",
}: Props) {
  const clases = [
    "inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap no-underline",
    "transition-[transform,box-shadow,background-color,color] duration-200 ease-[var(--ease-suave)] active:scale-[0.97]",
    tamano === "grande" ? "px-7 py-4 text-lg" : "px-5 py-2.5 text-base",
    variantes[variante],
    pendiente ? "cursor-not-allowed opacity-60" : "",
    className,
  ].join(" ");

  if (pendiente || !href) {
    return (
      <button type={type} onClick={onClick} disabled={pendiente} aria-disabled={pendiente} className={clases}>
        {children}
        {pendiente ? <span className="sr-only"> (enlace pendiente)</span> : null}
      </button>
    );
  }

  if (/^https?:\/\//.test(href) || href.startsWith("mailto:")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={clases}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={clases}>
      {children}
    </Link>
  );
}
