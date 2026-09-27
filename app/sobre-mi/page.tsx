import { CampoDeTinta } from "@/components/cartel/CampoDeTinta";
import { Rotulo } from "@/components/cartel/Rotulo";
import { TiraDeCifras } from "@/components/cartel/TiraDeCifras";
import { LineaDeTiempo } from "@/components/contenido/LineaDeTiempo";
import { Retrato } from "@/components/contenido/Retrato";
import { perfil } from "@/content/perfil";
import { trayectoria } from "@/content/trayectoria";
import { metadatos } from "@/lib/seo";

export const metadata = metadatos({
  titulo: "Sobre mí",
  descripcion: perfil.bioCorta,
  ruta: "/sobre-mi",
});

export default function SobreMi() {
  return (
    <>
      <CampoDeTinta className="pt-10 sm:pt-14">
        <div className="flex flex-col gap-10">
          <h1 className="cartel text-titular max-w-[11ch]">Migajeando oportunidades</h1>

          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-5">
              {perfil.bioLarga.map((parrafo) => (
                <p key={parrafo.slice(0, 40)} className="prosa text-lg leading-relaxed sm:text-xl">
                  {parrafo}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <Retrato />
              <dl className="flex flex-col">
                {perfil.ficha.map((dato) => (
                  <div
                    key={dato.etiqueta}
                    className="flex items-baseline justify-between gap-4 border-t-[3px] border-tinta py-3 last:border-b-[3px]"
                  >
                    <dt className="rotulo text-xs opacity-90">{dato.etiqueta}</dt>
                    <dd className="text-right font-medium">{dato.valor}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </CampoDeTinta>

      <CampoDeTinta tinta="naranja" trama>
        <div className="flex flex-col gap-8">
          <Rotulo>En números</Rotulo>
          <TiraDeCifras cifras={perfil.cifras} />
        </div>
      </CampoDeTinta>

      <CampoDeTinta>
        <div className="flex flex-col gap-10">
          <h2 className="cartel text-rotulo max-w-[16ch]">Una convocatoria a la vez</h2>
          <Rotulo>Cómo llegué acá</Rotulo>
          <LineaDeTiempo hitos={trayectoria} />
        </div>
      </CampoDeTinta>
    </>
  );
}
