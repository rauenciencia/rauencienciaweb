import Link from "next/link";

import { CampoDeTinta } from "@/components/cartel/CampoDeTinta";
import { FranjaDeAccion } from "@/components/cartel/FranjaDeAccion";
import { Rotulo } from "@/components/cartel/Rotulo";
import { temas } from "@/content/charlas";
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
              <FranjaDeAccion href={`mailto:${perfil.correo}`} tinta="durazno" externo nota={perfil.correo}>
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
                        className="cartel text-[clamp(1.3rem,4vw,1.8rem)] leading-none hover:text-durazno"
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

      <CampoDeTinta tinta="tinta">
        <div className="flex flex-col gap-8">
          <h2 className="cartel text-rotulo max-w-[18ch]">
            Tengo {temas.length} charlas listas para dar
          </h2>
          <Rotulo>Charlas</Rotulo>
          <ul className="flex flex-col">
            {temas.map((tema) => (
              <li
                key={tema.slug}
                className="grid gap-1 border-t-[3px] border-current py-4 last:border-b-[3px] sm:grid-cols-[1fr_1.3fr] sm:items-baseline sm:gap-8"
              >
                <h3 className="cartel text-[clamp(1.3rem,3.5vw,1.8rem)] leading-none">
                  {tema.titulo}
                </h3>
                <p className="leading-snug opacity-90">{tema.promesa}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/charlas"
            className="rotulo text-sm underline decoration-durazno decoration-[3px] underline-offset-[6px] hover:no-underline"
          >
            Ver de qué trata cada una
          </Link>
        </div>
      </CampoDeTinta>
    </>
  );
}
