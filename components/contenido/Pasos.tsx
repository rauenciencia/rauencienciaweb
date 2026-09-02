/**
 * Los pasos de uso. Van numerados porque el orden es el dato: primero se
 * define el perfil, después se desliza, y recién al final queda la lista.
 */
export function Pasos({ pasos }: { pasos: readonly string[] }) {
  return (
    <ol className="grid sm:grid-cols-3">
      {pasos.map((paso, indice) => (
        <li key={paso} className="flex flex-col gap-3 border-t-[3px] border-current pt-5 pr-6">
          <span className="cifra text-[clamp(2.5rem,7vw,4rem)] leading-none">{indice + 1}</span>
          <p className="text-lg leading-snug font-medium text-balance sm:text-xl">{paso}</p>
        </li>
      ))}
    </ol>
  );
}
