import Image from "next/image";

/** Todas las poses del pack, con su tamaño real para que no salte el layout. */
export const POSES = {
  saludando: [742, 1096],
  "code-celular": [539, 581],
  "code-laptop": [1200, 1042],
  "code-pollito": [1200, 767],
  laptop: [715, 1065],
  "laptop-mac": [895, 1200],
  megafono: [1200, 1196],
  pensativo: [914, 1200],
  "idea-foco": [833, 1058],
  "mapa-totebag": [960, 1200],
  totebag: [755, 1048],
  "mochila-yo-migajeo": [773, 1004],
  viajero: [877, 1119],
  "viajero-lado": [893, 1101],
  aventurero: [916, 1127],
  diploma: [993, 1200],
  "chompa-rau": [1115, 1200],
  pan: [629, 1103],
  "peru-camiseta": [810, 1200],
} as const;

export type PoseMigo = keyof typeof POSES;

type Props = {
  pose: PoseMigo;
  /** Ancho en píxeles. La altura sale sola de la proporción del dibujo. */
  ancho: number;
  /** Rotación en grados. El brief no deja pasar de 8 en ningún sentido. */
  rotacion?: number;
  /** Casi siempre MIGO es decorativo y va con alt vacío. Solo cuando comunica algo, se describe. */
  alt?: string;
  prioridad?: boolean;
  className?: string;
};

/**
 * MIGO, la mascota de Migajeando Oportunidades.
 * Reglas del brief (9.5): uno por pantalla, nunca deformado ni recoloreado,
 * nunca rotado más de 8°, siempre con aire alrededor, y nunca en lugar de la
 * foto de Raúl.
 */
export function MigoImagen({ pose, ancho, rotacion = 0, alt = "", prioridad = false, className = "" }: Props) {
  const [anchoReal, altoReal] = POSES[pose];
  const giro = Math.max(-8, Math.min(8, rotacion));

  return (
    <Image
      src={`/migo/migo-${pose}.webp`}
      alt={alt}
      width={ancho}
      height={Math.round((ancho * altoReal) / anchoReal)}
      priority={prioridad}
      draggable={false}
      className={`select-none ${className}`}
      style={giro ? { rotate: `${giro}deg` } : undefined}
    />
  );
}
