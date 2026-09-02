/**
 * El único ícono dibujado del sistema. Grosor 2.5, remates rectos, igual que
 * la punta de flecha que un cartel serigrafiado imprime junto a la dirección.
 * Todo lo demás en este sitio se dice con tipografía, no con pictogramas.
 */
export function Flecha({
  className = "",
  direccion = "derecha",
}: {
  className?: string;
  direccion?: "derecha" | "abajo" | "arriba-derecha";
}) {
  const giro = {
    derecha: "rotate(0)",
    abajo: "rotate(90 12 12)",
    "arriba-derecha": "rotate(-45 12 12)",
  }[direccion];

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g transform={giro}>
        <path d="M3 12h17" />
        <path d="M13.5 5.5 20 12l-6.5 6.5" />
      </g>
    </svg>
  );
}
