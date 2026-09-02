import Link from "next/link";

import { CampoDeTinta } from "@/components/cartel/CampoDeTinta";
import { FranjaDeAccion } from "@/components/cartel/FranjaDeAccion";
import { Rotulo } from "@/components/cartel/Rotulo";
import { TiraDeCifras } from "@/components/cartel/TiraDeCifras";
import { Titular } from "@/components/cartel/Titular";
import { ListaPrensa } from "@/components/contenido/ListaPrensa";
import { Pasos } from "@/components/contenido/Pasos";
import { Retrato } from "@/components/contenido/Retrato";
import { perfil } from "@/content/perfil";
import { prensa } from "@/content/prensa";
import { proyectoInsignia } from "@/content/proyectos";
import { urlPlataforma } from "@/lib/sitio";

export default function Portada() {
  return (
    <>
      {/* EL PLIEGO. El titular a sangre, la acción pegada debajo, y las cifras
          al pie como los flecos arrancables de un cartel de pared. */}
      <CampoDeTinta className="pt-10 sm:pt-14">
        <div className="flex flex-col gap-8">
          <Titular lineas={perfil.titular} />

          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-14">
            <p className="prosa text-lg leading-snug font-medium text-balance sm:text-2xl">
              {perfil.bajada}
            </p>

            <FranjaDeAccion
              href={urlPlataforma}
              tinta="naranja"
              externo
              nota="Más de 500 oportunidades reales. Gratis, en el navegador, sin descargar nada."
            >
              Entrar a Becas para Migajear
            </FranjaDeAccion>
          </div>

          <TiraDeCifras cifras={perfil.cifras} />
        </div>
      </CampoDeTinta>

      {/* LA PLATAFORMA, sobreimpresa en naranja. Es la promesa del cartel, y
          se explica en tres pasos porque el orden es el dato. */}
      <CampoDeTinta tinta="naranja" trama id="plataforma">
        <div className="flex flex-col gap-10">
          <Rotulo>{proyectoInsignia.apodo ? `Le dicen ${proyectoInsignia.apodo}` : "El proyecto"}</Rotulo>

          <h2 className="cartel text-rotulo max-w-[16ch]">{proyectoInsignia.nombre}</h2>

          <p className="prosa text-lg leading-snug font-medium sm:text-2xl">
            {proyectoInsignia.resumen}
          </p>

          <Pasos pasos={proyectoInsignia.comoFunciona} />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <FranjaDeAccion href={urlPlataforma} tinta="tinta" externo className="sm:w-auto">
              Buscar mi beca
            </FranjaDeAccion>
            <Link
              href={`/proyectos/${proyectoInsignia.slug}`}
              className="rotulo text-sm underline decoration-[3px] underline-offset-[6px] hover:no-underline"
            >
              Cómo se hizo
            </Link>
          </div>
        </div>
      </CampoDeTinta>

      {/* QUIÉN. La pausa del pliego: menos tinta, más aire, y la historia que
          ningún otro puede copiar. */}
      <CampoDeTinta>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Retrato className="max-w-sm" />

          <div className="flex flex-col justify-center gap-6">
            <Rotulo>Quién está detrás</Rotulo>
            <h2 className="cartel text-rotulo max-w-[14ch]">De Lima Este a quince becas</h2>
            <p className="prosa text-lg leading-relaxed sm:text-xl">{perfil.bioLarga[0]}</p>
            <p className="prosa text-lg leading-relaxed sm:text-xl">{perfil.bioLarga[1]}</p>
            <Link
              href="/sobre-mi"
              className="rotulo text-sm underline decoration-naranja decoration-[3px] underline-offset-[6px] hover:no-underline"
            >
              Leer la historia completa
            </Link>
          </div>
        </div>
      </CampoDeTinta>

      {/* LA PRUEBA. Lo que escribieron otros, con sus titulares completos. */}
      <CampoDeTinta tinta="azul">
        <div className="flex flex-col gap-10">
          <Rotulo>Lo que se ha publicado</Rotulo>
          <h2 className="cartel text-rotulo max-w-[18ch]">
            La prensa le puso nombre antes que yo
          </h2>
          <ListaPrensa coberturas={prensa.slice(0, 4)} />
          <Link
            href="/prensa"
            className="rotulo text-sm underline decoration-naranja decoration-[3px] underline-offset-[6px] hover:no-underline"
          >
            Ver toda la cobertura
          </Link>
        </div>
      </CampoDeTinta>

      {/* EL CIERRE. El pliego termina anclado en una acción, no en un adorno. */}
      <CampoDeTinta tinta="verde" trama>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div className="flex flex-col gap-6">
            <Rotulo>Para qué escribirme</Rotulo>
            <h2 className="cartel text-rotulo max-w-[15ch]">
              Charlas, prensa y alianzas
            </h2>
            <ul className="flex flex-col gap-2 text-lg leading-snug font-medium sm:text-xl">
              {perfil.para.map((motivo) => (
                <li key={motivo} className="border-t-[3px] border-current pt-2">
                  {motivo}
                </li>
              ))}
            </ul>
          </div>

          <FranjaDeAccion href="/contacto" tinta="tinta">
            Escríbeme
          </FranjaDeAccion>
        </div>
      </CampoDeTinta>
    </>
  );
}
