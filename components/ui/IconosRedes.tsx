/**
 * Íconos de redes en SVG propio (brief 9.7), en línea de 2 px como Lucide
 * para que convivan con el resto del sistema. Siempre decorativos: el link
 * que los envuelve lleva el nombre de la red.
 */
type Props = { className?: string };
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const Instagram = ({ className }: Props) => (
  <svg {...base} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
  </svg>
);

export const TikTok = ({ className }: Props) => (
  <svg {...base} className={className}>
    <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
    <path d="M14 3c.4 2.6 2.3 4.5 5 4.8" />
  </svg>
);

export const LinkedIn = ({ className }: Props) => (
  <svg {...base} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10.5V16M8 7.6v.1M12 16v-3.2a2.3 2.3 0 0 1 4.6 0V16M12 10.5V16" />
  </svg>
);

export const WhatsApp = ({ className }: Props) => (
  <svg {...base} className={className}>
    <path d="M4.3 19.7 5.4 16A8.4 8.4 0 1 1 8.4 19z" />
    <path d="M9.2 8.6c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.6l-.5.6c-.1.2-.1.4 0 .6.6 1 1.4 1.8 2.5 2.4.2.1.4.1.6 0l.6-.6c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5v.4c0 .5-.3 1-.8 1.2-.7.3-1.5.3-2.3 0a9 9 0 0 1-4.9-4.9c-.3-.8-.3-1.7 0-2.4z" />
  </svg>
);

export const Microfono = ({ className }: Props) => (
  <svg {...base} className={className}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </svg>
);

export function IconoRed({ nombre, className }: { nombre: string; className?: string }) {
  const Icono = { Instagram, TikTok, LinkedIn, WhatsApp, Podcast: Microfono }[nombre] ?? Microfono;
  return <Icono className={className} />;
}
