import { CampoDeTinta } from "@/components/cartel/CampoDeTinta";
import { FranjaDeAccion } from "@/components/cartel/FranjaDeAccion";
import { Rotulo } from "@/components/cartel/Rotulo";
import { charlas } from "@/content/charlas";
import { perfil } from "@/content/perfil";
import { metadatos } from "@/lib/seo";

export const metadata = metadatos({
  titulo: "Contacto",
  descripcion: "Charlas, prensa y alianzas. Escríbeme directo.",
  ruta: "/contacto",
});

export default function Contacto() {
  return (
    <>
      <CampoDeTinta className="pt-10 sm:pt-14">
        <div className="flex flex-col gap-10">
          <Rotulo>Contacto</Rotulo>
          <h1 className="cartel text-titular max-w-[9ch]">Escríbeme</h1>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <p className="prosa text-lg leading-relaxed sm:text-xl">
                No hay formulario. Un correo llega igual de rápido y no se pierde en una bandeja
                automática.
              </p>

              <ul className="flex flex-col">
                {perfil.para.map((motivo) => (
                  <li
                    key={motivo}
                    className="border-t-[3px] border-tinta py-3 text-lg font-medium last:border-b-[3px]"
                  >
                    {motivo}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <FranjaDeAccion href={`mailto:${perfil.correo}`} tinta="naranja" externo nota={perfil.correo}>
                Mandar correo
              </FranjaDeAccion>

              <div className="flex flex-col gap-3">
                <Rotulo>O por redes</Rotulo>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {perfil.redes.map((red) => (
                    <li key={red.nombre}>
                      <a
                        href={red.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cartel text-[clamp(1.3rem,4vw,1.8rem)] leading-none hover:text-naranja"
                      >
                        {red.rotulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CampoDeTinta>

      <CampoDeTinta tinta={charlas.length > 0 ? "verde" : "tinta"} trama={charlas.length > 0}>
        <div className="flex flex-col gap-8">
          <Rotulo>Charlas y talleres</Rotulo>

          {charlas.length === 0 ? (
            <>
              <h2 className="cartel text-rotulo max-w-[18ch]">
                Todavía no hay ninguna publicada acá
              </h2>
              <p className="prosa text-lg leading-relaxed">
                Prefiero dejar esta sección vacía antes que llenarla con relleno. En cuanto haya una
                confirmada, aparece sola: se agrega en{" "}
                <code className="rotulo text-[0.9em]">content/charlas.ts</code>.
              </p>
            </>
          ) : (
            <ul className="flex flex-col">
              {charlas.map((charla) => (
                <li
                  key={`${charla.titulo}-${charla.fecha}`}
                  className="grid gap-2 border-t-[3px] border-current py-5 last:border-b-[3px] sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="cartel text-[clamp(1.4rem,3.5vw,1.9rem)] leading-none">
                      {charla.titulo}
                    </h3>
                    <p className="text-base opacity-90">{charla.lugar}</p>
                  </div>
                  <p className="rotulo text-sm opacity-90">{charla.fecha}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CampoDeTinta>
    </>
  );
}
