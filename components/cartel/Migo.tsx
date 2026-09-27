import Image from "next/image";

import { perfil } from "@/content/perfil";

type Props = {
  /** Ancho en píxeles al que se dibuja. La altura sale de la proporción. */
  ancho?: number;
  /** Retraso de la entrada, para escalonarlo con lo que tenga al lado. */
  retraso?: number;
  /** false cuando Migo va dentro de algo que ya se mueve, como el aviso. */
  respira?: boolean;
  className?: string;
};

/**
 * MIGO — la mascota de Migajeando Oportunidades.
 *
 * El movimiento vive acá y es el mismo con archivo o sin él: entra fuera de
 * registro y calza, respira despacio, y se desfasa al tocarlo. Mientras el
 * archivo no exista se imprime el recuadro que dice cuál falta, y ese recuadro
 * se mueve igual — así se ve el efecto funcionando antes de tener el dibujo.
 */
export function Migo({ ancho = 220, retraso = 0, respira = true, className = "" }: Props) {
  const estilo = { "--migo-retraso": `${retraso}ms` } as React.CSSProperties;

  const capas = (contenido: React.ReactNode) => (
    <div className={`migo ${respira ? "migo-respira" : ""} ${className}`}>
      <div className="migo-entra" style={estilo}>
        <div className="migo-vivo">{contenido}</div>
      </div>
    </div>
  );

  if (perfil.migo.porConfirmar) {
    return capas(
      <div
        className="flex flex-col justify-between border-[3px] border-tinta bg-papel px-4 py-5 text-tinta"
        style={{ width: ancho, minHeight: Math.round(ancho * 1.15) }}
      >
        <p className="rotulo text-[0.65rem] leading-tight">Aquí va Migo</p>
        <p className="cartel text-[clamp(1.1rem,2.5vw,1.6rem)] leading-none">
          public/
          <br />
          migo.png
        </p>
        {/* La nota solo cabe en los tamaños grandes; en el aviso del celular
            el recuadro dice lo justo. */}
        {ancho >= 160 ? (
          <p className="text-[0.7rem] leading-snug">
            El movimiento ya funciona: esto se mueve igual que se va a mover Migo.
          </p>
        ) : null}
      </div>,
    );
  }

  return capas(
    <Image
      src={perfil.migo.src}
      alt={perfil.migo.alt}
      width={ancho}
      height={Math.round(ancho * 1.15)}
      style={{ width: ancho, height: "auto" }}
      priority
    />,
  );
}
