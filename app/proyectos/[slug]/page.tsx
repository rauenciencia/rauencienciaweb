import Link from "next/link";
import { notFound } from "next/navigation";

import { CampoDeTinta } from "@/components/cartel/CampoDeTinta";
import { FranjaDeAccion } from "@/components/cartel/FranjaDeAccion";
import { Rotulo } from "@/components/cartel/Rotulo";
import { TiraDeCifras } from "@/components/cartel/TiraDeCifras";
import { Pasos } from "@/components/contenido/Pasos";
import { proyectoPorSlug, proyectos } from "@/content/proyectos";
import { metadatos } from "@/lib/seo";

export function generateStaticParams() {
  return proyectos.map((proyecto) => ({ slug: proyecto.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const proyecto = proyectoPorSlug(slug);
  if (!proyecto) return metadatos({ titulo: "Proyecto no encontrado" });

  return metadatos({
    titulo: proyecto.nombre,
    descripcion: proyecto.resumen,
    ruta: `/proyectos/${proyecto.slug}`,
  });
}

export default async function PaginaProyecto({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const proyecto = proyectoPorSlug(slug);
  if (!proyecto) notFound();

  return (
    <>
      <CampoDeTinta tinta={proyecto.tinta} trama className="pt-10 sm:pt-14">
        <div className="flex flex-col gap-8">
          <Rotulo>
            {proyecto.anio} · {proyecto.estado}
            {proyecto.apodo ? ` · le dicen ${proyecto.apodo}` : ""}
          </Rotulo>
          <h1 className="cartel text-titular max-w-[11ch]">{proyecto.nombre}</h1>
          <p className="prosa text-lg leading-snug font-medium sm:text-2xl">{proyecto.resumen}</p>

          {proyecto.enlace ? (
            <FranjaDeAccion href={proyecto.enlace.url} tinta="tinta" externo>
              {proyecto.enlace.rotulo}
            </FranjaDeAccion>
          ) : null}
        </div>
      </CampoDeTinta>

      <CampoDeTinta>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <Rotulo>Qué es</Rotulo>
            {proyecto.descripcion.map((parrafo) => (
              <p key={parrafo.slice(0, 40)} className="prosa text-lg leading-relaxed">
                {parrafo}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {proyecto.repositorio ? (
              <a
                href={proyecto.repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="rotulo border-t-[3px] border-tinta pt-3 text-sm hover:text-naranja"
              >
                Código abierto en GitHub
              </a>
            ) : null}
          </div>
        </div>
      </CampoDeTinta>

      <CampoDeTinta tinta="tinta">
        <div className="flex flex-col gap-10">
          <Rotulo>Cómo funciona</Rotulo>
          <Pasos pasos={proyecto.comoFunciona} />
        </div>
      </CampoDeTinta>

      {proyecto.cifras.length > 0 ? (
        <CampoDeTinta>
          <div className="flex flex-col gap-8">
            <Rotulo>Hasta hoy</Rotulo>
            <TiraDeCifras cifras={proyecto.cifras} />
          </div>
        </CampoDeTinta>
      ) : null}

      <CampoDeTinta tinta="verde">
        <Link href="/proyectos" className="cartel text-rotulo no-underline hover:underline">
          Ver los demás proyectos
        </Link>
      </CampoDeTinta>
    </>
  );
}
