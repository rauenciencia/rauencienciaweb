import { MigoImagen, type PoseMigo } from "@/components/ui/MigoImagen";

type Props = {
  ancho?: number;
  retraso?: number;
  respira?: boolean;
  pose?: PoseMigo;
  className?: string;
};

/**
 * LEGADO. MIGO con el movimiento del cartel (entra, respira, se desfasa), ya
 * con el dibujo real del pack. Lo usan el aviso y las páginas que todavía no
 * se rehacen; las nuevas usan MigoImagen directamente.
 */
export function Migo({ ancho = 220, retraso = 0, respira = true, pose = "saludando", className = "" }: Props) {
  const estilo = { "--migo-retraso": `${retraso}ms` } as React.CSSProperties;
  return (
    <div className={`migo ${respira ? "migo-respira" : ""} ${className}`}>
      <div className="migo-entra" style={estilo}>
        <div className="migo-vivo">
          <MigoImagen pose={pose} ancho={ancho} />
        </div>
      </div>
    </div>
  );
}
