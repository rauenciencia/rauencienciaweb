import { CampoDeTinta } from "@/components/cartel/CampoDeTinta";
import { FranjaDeAccion } from "@/components/cartel/FranjaDeAccion";
import { Migo } from "@/components/cartel/Migo";
import { Rotulo } from "@/components/cartel/Rotulo";
import { ListaPrensa } from "@/components/contenido/ListaPrensa";
import { apariciones, logistica, temas, testimonios } from "@/content/charlas";
import { perfil } from "@/content/perfil";
import { prensa } from "@/content/prensa";
import { metadatos } from "@/lib/seo";

export const metadata = metadatos({
  titulo: "Charlas",
  descripcion:
    "Tres charlas sobre becas, construir algo útil y comunicar ciencia. Para colegios, universidades, programas de becas y equipos.",
  ruta: "/charlas",
});

export default function Charlas() {
  return (
    <>
      {/* El encabezado de conferencista: qué eres, qué ofreces, y el botón de
          contratar, todo en la primera pantalla. */}
      <CampoDeTinta className="pt-10 sm:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_auto] lg:items-end lg:gap-14">
          <div className="flex flex-col gap-6">
            <h1 className="cartel text-titular max-w-[13ch]">Invítame a hablar</h1>
            <p className="prosa text-lg leading-snug font-medium text-balance sm:text-2xl">
              Salí de Lima Este con Beca 18, gané quince convocatorias, y después construí la
              herramienta que le ahorra ese camino a otros. Eso es lo que vengo a contar.
            </p>
            <FranjaDeAccion
              href={`mailto:${perfil.correo}?subject=${encodeURIComponent("Invitación a dar una charla")}`}
              tinta="durazno"
              externo
              nota="Cuéntame el evento, la fecha y el público. Respondo con disponibilidad."
            >
              Consultar disponibilidad
            </FranjaDeAccion>
          </div>

          <Migo ancho={200} retraso={250} className="justify-self-start lg:justify-self-end" />
        </div>
      </CampoDeTinta>

      {/* Las charlas, con nombre propio. Una charla empaquetada se contrata;
          un "tema de interés" no. */}
      {temas.map((tema, indice) => (
        <CampoDeTinta key={tema.slug} tinta={tema.tinta} trama={indice % 2 === 0}>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-5">
              <h2 className="cartel text-rotulo max-w-[15ch]">{tema.titulo}</h2>
              <p className="prosa text-lg leading-snug font-medium sm:text-xl">{tema.promesa}</p>
              <p className="prosa leading-relaxed">{tema.descripcion}</p>
            </div>

            <div className="flex flex-col gap-6 self-center">
              <div className="flex flex-col gap-3">
                <Rotulo>Qué se llevan</Rotulo>
                <ul className="flex flex-col">
                  {tema.seLlevan.map((punto) => (
                    <li
                      key={punto}
                      className="border-t-[3px] border-current py-3 leading-snug font-medium last:border-b-[3px]"
                    >
                      {punto}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="rotulo text-xs">Para: {tema.para}</p>
            </div>
          </div>
        </CampoDeTinta>
      ))}

      {/* Lo práctico, antes de que lo pregunten por correo. */}
      <CampoDeTinta>
        <div className="flex flex-col gap-8">
          <Rotulo>Lo práctico</Rotulo>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {logistica.map((dato) => (
              <div key={dato.etiqueta} className="flex flex-col gap-2 border-t-[3px] border-tinta py-5">
                <dt className="rotulo text-xs opacity-90">{dato.etiqueta}</dt>
                <dd className="cartel text-[clamp(1.2rem,3vw,1.6rem)] leading-tight">
                  {dato.valor}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </CampoDeTinta>

      {/* Prueba real: lo que ya escribieron sobre él. */}
      <CampoDeTinta tinta="ciruela">
        <div className="flex flex-col gap-10">
          <h2 className="cartel text-rotulo max-w-[18ch]">No tienes que creerme a mí</h2>
          <Rotulo>Lo que ya se ha publicado</Rotulo>
          <ListaPrensa coberturas={prensa.slice(0, 3)} />
        </div>
      </CampoDeTinta>

      {/* Dónde ya habló. Vacío hasta que ocurra la primera. */}
      <CampoDeTinta>
        <div className="flex flex-col gap-8">
          <Rotulo>Dónde he hablado</Rotulo>
          {apariciones.length === 0 ? (
            <p className="prosa text-lg leading-relaxed">
              Esta sección está vacía a propósito. Prefiero que diga la verdad a que se llene de
              logotipos que no me invitaron. Se agrega en{" "}
              <code className="rotulo text-[0.9em]">content/charlas.ts</code> en cuanto ocurra la
              primera.
            </p>
          ) : (
            <ul className="flex flex-col">
              {apariciones.map((aparicion) => (
                <li
                  key={`${aparicion.titulo}-${aparicion.fecha}`}
                  className="grid gap-2 border-t-[3px] border-tinta py-5 last:border-b-[3px] sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="cartel text-[clamp(1.4rem,3.5vw,1.9rem)] leading-none">
                      {aparicion.titulo}
                    </h3>
                    <p className="opacity-90">{aparicion.lugar}</p>
                  </div>
                  <p className="rotulo text-sm opacity-90">{aparicion.fecha}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CampoDeTinta>

      {testimonios.length > 0 ? (
        <CampoDeTinta tinta="salvia" trama>
          <div className="flex flex-col gap-10">
            <Rotulo>Lo que dijeron después</Rotulo>
            <ul className="grid gap-10 lg:grid-cols-2">
              {testimonios.map((testimonio) => (
                <li key={testimonio.quien} className="flex flex-col gap-4 border-t-[3px] border-current pt-5">
                  <p className="cartel text-[clamp(1.4rem,3vw,2rem)] leading-tight">
                    “{testimonio.cita}”
                  </p>
                  <p className="rotulo text-xs">
                    {testimonio.quien} · {testimonio.cargo} · {testimonio.organizacion}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </CampoDeTinta>
      ) : null}

      <CampoDeTinta tinta="tinta">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div className="flex flex-col gap-5">
            <h2 className="cartel text-rotulo max-w-[16ch]">Cuéntame de tu evento</h2>
            <Rotulo>Siguiente paso</Rotulo>
            <p className="prosa text-lg leading-relaxed">
              La fecha, el público y cuánto tiempo tengo. Con eso te respondo con disponibilidad y
              una propuesta concreta.
            </p>
          </div>
          <FranjaDeAccion
            href={`mailto:${perfil.correo}?subject=${encodeURIComponent("Invitación a dar una charla")}`}
            tinta="durazno"
            externo
            nota={perfil.correo}
          >
            Escribirme
          </FranjaDeAccion>
        </div>
      </CampoDeTinta>
    </>
  );
}
