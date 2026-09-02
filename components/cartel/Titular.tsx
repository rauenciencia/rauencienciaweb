/**
 * El titular a sangre. Tres líneas que ocupan la pantalla y se calzan en
 * registro una tras otra al cargar, como una prensa ajustando la plancha.
 * Es el único momento de movimiento de la portada.
 */
export function Titular({ lineas }: { lineas: readonly string[] }) {
  return (
    <h1 className="cartel text-titular">
      {lineas.map((linea, indice) => (
        <span
          key={linea}
          className="registro block"
          style={
            {
              "--registro-retraso": `${indice * 90}ms`,
              "--registro-x": indice % 2 === 0 ? "-0.9rem" : "0.9rem",
              "--registro-y": "0.6rem",
            } as React.CSSProperties
          }
        >
          {linea}
        </span>
      ))}
    </h1>
  );
}
